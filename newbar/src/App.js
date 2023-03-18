/*import logo from './logo.svg';*/
import './App.css';

function App() {
  return (
    <div id="root">
    <div>
      <div class="container">
        <div class="item-1-header"> <h1>Miguel's Bar</h1></div>
      </div>
      <div class="search-bar-container">
        <input class="search-bar" placeholder="search..." type="text"></input>
      </div>
      <div class="container-2">
          <div class="card">
              <h3>About</h3>
              <p>bonk...</p>
          </div>
          <div class="card"> 
              <h3>Check-out</h3>
              <p>bonk...</p>
          </div>
          <div class="card">
              <h3>Wines</h3>
              <p>bonk...</p>
          </div>
          <div class="card"> 
              <h3>Spirits</h3>
              <p>bonk...</p>
          </div>
          <div class="card"> 
              <h3>Beers & Seltzers</h3>
              <p>bonk...</p>
          </div>
          <div class="card"> 
              <h3>Mixers & Misc</h3>
              <p>bonk...</p>
          </div>
      </div>
    </div>
    </div>
  );
}

export default App;
