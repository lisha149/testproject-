import Login from "./pages/Login";
import Menu from "./pages/Menu";
import {Route, BrowserRouter, Redirect} from 'react-router-dom';
import {Switch} from 'react-router-dom'; 
function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/menu' component={Menu} />
      </Switch>  
    </BrowserRouter>
    </div>
  );
}
export default App;
