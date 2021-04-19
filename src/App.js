import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import UseState from './pages/useState'
import UseEffect from './pages/useEffect'
import UseRef from './pages/useRef'

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/useState">useState</Link></li>
        <li><Link to="/useEffect">UseEffect</Link></li>
        <li><Link to="/useRef">UseRef</Link></li>
      </ul>
      <Route path="/" component={App}>
        <Route path="/useState">
          <UseState></UseState>
        </Route>
        <Route path="/useEffect">
          <UseEffect></UseEffect>
        </Route>
        <Route path="/useRef">
          <UseRef></UseRef>
        </Route>
      </Route>
    </Router>
  );
}

export default App;
