import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Posts from './component/Posts';
import Comments from './component/Comments';
import Albums from './component/Albums';
import Photos from './component/Photos';
import Todos from './component/Todos';
import Users from './component/Users';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Posts" component={Posts}/>
        <Route path="/Comments" component={Comments}/>
        <Route path="/Albums" component={Albums}/>
        <Route path="/Photos" component={Photos}/>
        <Route path="/Todos" component={Todos}/>
        <Route path="/Users" component={Users}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
