import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home'

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default AppRouter;
