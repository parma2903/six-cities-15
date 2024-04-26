import { useRef, useEffect } from 'react';
import leaflet, { Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import { Offers, City } from '../../types/offers';

type MapProps = {
  city: City;
  offers: Offers;
  activeCardId: string | null;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({city, offers, activeCardId}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        if (offer.location) {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          });
          marker
            .setIcon(
              activeCardId !== null && offer.id === activeCardId
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(markerLayer);
        }
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCardId]);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  return (
    <section
      className="cities__map map"
      style={{height: '500px'}}
      ref={mapRef}
    />
  );
}

export default Map;
