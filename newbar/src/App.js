/*import logo from './logo.svg';*/
import './App.css';

function App() {
  return (
    <div id="root">
    <div>
      <div className="container">
        <div class="item-1-header"> <h1>Miguel's Bar</h1></div>
      </div>
      <div className="search-bar-container">
        <input class="search-bar" placeholder="Search..." type="text"></input>
      </div>
      <Card/>
    </div>
    </div>
  );
}

function Card(){
  return(
    <div id="root">
<div className="container-2">
          <div className="card">
              <h3 className= "card__title">Rewards</h3>
              <p className="card_description">This page contains sign information for our rewards program</p>
              <button className="card__btn"> View Rewards</button>
          </div>
         
          <div className="card"> 
              <h3 className= "card__title">Shopping Cart</h3>
              <p className="card_description">This pages features your checkout information</p>
              <button className="card__btn"> View Shopping Cart</button>
          </div>
          <div className="card">
              <h3 className= "card__title"> Wines</h3>
              <p className="card_description">This page contains all information about Wines</p>
              <button className="card__btn"> View Wines</button>
          </div>
          <div className="card"> 
              <h3 className= "card__title">Spirits</h3>
              <p className="card_description" >This page contains all information about Spirits</p>
              <button className="card__btn"> View Spirits</button>
          </div>
          <div className="card"> 
              <h3 className= "card__title">Beers & Seltzers</h3>
              <p className="card_description">This page contains all information about Beers & Seltzers</p>
              <button className="card__btn"> View Beers & Seltzers</button>
          </div>
          <div className="card"> 
              <h3 className= "card__title">Mixers & Misc</h3>
              <p className="card_description">This page contains information about Mixers & all other Misc products</p>
              <button className="card__btn"> View Rewards</button>
              </div>
      </div>
    </div>
  )
}

export default App;



