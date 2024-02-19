import Main from '../../pages/main';

type AppScreenProps = {
  offerCardsCount: number;
}

function App({offerCardsCount}: AppScreenProps): JSX.Element {
  return (
    <Main offerCardsCount={offerCardsCount}/>
  );
}

export default App;
