import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Header } from './header';
import { ROUTES } from '../routes';

export function App() {
    return (
        <>
            <Router>
                <Header></Header>
                <Switch>    
                    {
                        ROUTES.map((route, index) => <Route key={index} { ...route } />)
                    }
                </Switch>
            </Router>
        </>
    );
}
