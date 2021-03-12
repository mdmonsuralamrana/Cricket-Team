
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetailsContainer from './components/TeamDetailsContainer/TeamDetailsContainer';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/details/:leagueId">
          <TeamDetailsContainer></TeamDetailsContainer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
