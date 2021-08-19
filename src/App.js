import './App.css';

import Header from './Header/Header';
import Goods from './Goods';
import Main from './Main';
import Users from './Users';
import About from './About';
import Error from './Error';

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

const headerData = {
  site_name: 'About React',

  nav:[
    {"index":"link1", "link" : "/", "text":"Main"},
    {"index":"link2", "link" : "/about", "text":"About"},
    {"index":"link3", "link" : "/users", "text":"Users"},
  ]
};

const goods = [
  { "title" : "dollar", "cost": 27.01, "image": "https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/us_dollar-256.png"},
  { "title" : "euro", "cost": 32.01, "image": "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_euro_symbol_48px-256.png"}
];


function App() {
  return (
    <div className="App">
      <Header data={headerData}/>
      
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/users" component={Users}/>
          <Route path="/about" component={About}/>
          <Route component={Error}/>
        </Switch>
      </Router>
      
      <select>
      <option value="1">{goods[0].title}</option>
      <option value="2">{goods[1].title}</option>
      </select>
      <br/>
      {goods.map(item => <Goods title={item.title} cost={item.cost} image={item.image}/>)}
    </div>
  );
}

export default App;
