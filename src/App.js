import './App.css';

import Hand from './components/Hand';
import sword from './assets/img/sword.png';

function App() {
  const BASE_URL = 'http://localhost:4040';
  const tableUrl = BASE_URL + '/get-table-hand';
  const playerUrl = BASE_URL + '/get-hand/2';

  return (
    <div className="App">
      <div className="play-area">
        <h1 className="app-title">Ye Olde Poker Game</h1>
        <Hand title="Thy mighty Table" url={tableUrl} isTable />
        <Hand title="Thy brave Player" url={playerUrl} />
      </div>
      <div className="sword-container">
        <img src={sword} alt="sword" />
      </div>
    </div>
  );
}

export default App;
