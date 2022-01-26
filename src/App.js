
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './page/LoginPage'
import RegisterPage from './page/registerPage'
import HomePage from './page/HomePage'
function App() {
  return (
  
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/homepage" component={HomePage} />
       
      </Switch>
    </Router>
 
  );
}

export default App;
