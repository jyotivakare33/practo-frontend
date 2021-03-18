import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Reviews from './pages/Reviews';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/reviews" exact component={Reviews} />
            </Switch>
        </Router>
    );
}

export default App;
