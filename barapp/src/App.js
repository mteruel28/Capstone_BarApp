import'./App.css';

function App () {
  return (
    <div>
      <div className="container">
        <div className="item-1 header"> Miguel's Bar</div>
      </div>

      <div className="search-bar-container">
        <input className="search-bar" placeholder="search..." type="text"></input>
      </div>

      <div className="container-2">
          <div className="card">
              <h3>About</h3>
              <p>bonk...</p>
          </div>
          
          <div className="card"> 
              <h3>Check-out</h3>
              <p>bonk...</p>
          </div>
          <div className="card">
              <h3>Wines</h3>
              <p>bonk...</p>
          </div>

          <div className="card"> 
              <h3>Spirits</h3>
              <p>bonk...</p>
          </div>

          <div className="card"> 
              <h3>Beers & Seltzers</h3>
              <p>bonk...</p>
          </div>

          <div className="card"> 
              <h3>Mixers & Misc</h3>
              <p>bonk...</p>
          </div>
      </div>
    </div>
  );
}

export default App;
