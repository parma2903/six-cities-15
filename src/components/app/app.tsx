import MainScreen from '../../pages/main';

type AppScreenProps = {
  offerCardsCount: number;
}

function App({offerCardsCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen offerCardsCount={offerCardsCount}/>
  );
}

export default App;
