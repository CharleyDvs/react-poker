import './App.css';

import Hand from './components/Hand';

function App() {
  const BASE_URL = 'http://localhost:4040';
  const tableUrl = BASE_URL + '/get-table-hand';
  const playerUrl = BASE_URL + '/get-hand/2';

  return (
    <div className="App">
      <div className="play-area">
        <h1>Poker Game</h1>
        <Hand title="Table hand" url={tableUrl} isTable />
        <Hand title="Player hand" url={playerUrl} />
      </div>
    </div>
  );
}

export default App;
