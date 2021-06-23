import Hand from './components/Hand';
import sword from './assets/img/sword.png';

function App() {
  const BASE_URL = 'http://localhost:4040';
  const tableUrl = BASE_URL + '/get-table-hand';
  const playerUrl = BASE_URL + '/get-hand/2';

  const generateTitle = () => {
    const adjectives = [
      'Thy legendary ',
      'Thy mighty ',
      'Thy powerful ',
      'Thy heroic ',
      'Thy one and only ',
      'Thy dragon-slayer ',
      'Thy larger-than-life ',
      'Thy not-so-great ',
      'Thy unlucky ',
      'Thy magnificent bastard ',
    ];
    const index = parseInt(Math.random() * adjectives.length);
    return adjectives[index];
  };

  const tableName = generateTitle() + 'Table';
  const playerName = generateTitle() + 'Player';

  return (
    <div className="App">
      <div className="play-area">
        <h1 className="app-title">Ye Olde Poker Game</h1>
        <Hand title={tableName} url={tableUrl} isTable />
        <Hand title={playerName} url={playerUrl} />
      </div>
      <div className="sword-container">
        <img src={sword} alt="sword" />
      </div>
    </div>
  );
}

export default App;
