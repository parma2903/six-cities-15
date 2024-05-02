import { useRef, useEffect, useCallback } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import { Offers, City, Offer } from '../../types/offers';
import { useLocation } from 'react-router-dom';

type MapProps = {
  className: string;
  city: City;
  offers: Offers;
  activeCardId: string | null;
  currentCardId?: string | null;
};

function createCustomIcon(iconUrl: string): Icon {
  return new Icon({
    iconUrl: iconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
}

function Map({className, city, offers, activeCardId, currentCardId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const location = useLocation();
  const isOfferPage = location.pathname.includes('offer');

  const getMarkerIcon = useCallback((offer: Offer): Icon => {
    const isCurrentOffer = currentCardId && offer.id === currentCardId;

    if (isOfferPage) {
      return isCurrentOffer
        ? createCustomIcon(URL_MARKER_CURRENT)
        : createCustomIcon(URL_MARKER_DEFAULT);
    } else {
      const isNearbyOffer = activeCardId !== undefined && offer.id === activeCardId;
      return isNearbyOffer
        ? createCustomIcon(URL_MARKER_CURRENT)
        : createCustomIcon(URL_MARKER_DEFAULT);
    }
  }, [currentCardId, isOfferPage, activeCardId]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      const markers = offers.map((offer) => {
        const marker = new Marker([offer.location.latitude, offer.location.longitude]);
        marker.setIcon(getMarkerIcon(offer));
        marker.addTo(markerLayer);
        return marker;
      });

      const currentCard = offers.find((offer) => offer.id === currentCardId);
      if (currentCard) {
        const currentOfferMarker = new Marker([currentCard.location.latitude, currentCard.location.latitude]);
        currentOfferMarker.setIcon(getMarkerIcon(currentCard));
        currentOfferMarker.addTo(markerLayer);
        markers.push(currentOfferMarker);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, currentCardId, getMarkerIcon]);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  return (
    <section
      className={className}
      style={{height: '500px'}}
      ref={mapRef}
    />
  );
}

export default Map;
