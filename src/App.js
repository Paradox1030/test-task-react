import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {createBrowserHistory} from 'history'

import SignIn from './Pages/SignIn';
import SignUp from './Pages/SingUp';
import ResetPassword from './Pages/ResetPassword';
import ConfirmEmail from './Pages/ConfirmEmail';
import DidntEmail from './Pages/DidntEmail';

import logo from './assets/images/logo.svg';
import './assets/css/index.css';

const history = createBrowserHistory()


function App() {
    return (
        <Router history={history}>
            <div>
                <header className="header">
                    <div className="header__left">
                        <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
                    </div>
                    <div className="header__right">
                        <Switch>
                            <Route path="/signup">
                                <span>Уже есть аккаунт?</span>
                                <Link className="btn btn__signup" to="/">Вход</Link>
                            </Route>

                            <Route path="/confirm-email">
                                <a href='#'>Выйти</a>
                            </Route>

                            <Route path="/didnt-email">
                                <a href='#'>Выйти</a>
                            </Route>

                            <Route path="/reset-password">
                            </Route>

                            <Route path="/">
                                <span>У вас нет аккаунта?</span>
                                <Link className="btn btn__signup" to="/signup">Регистрация</Link>
                            </Route>

                        </Switch>
                    </div>
                </header>

                <Switch>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/reset-password">
                        <ResetPassword/>
                    </Route>
                    <Route path="/confirm-email">
                        <ConfirmEmail/>
                    </Route>
                    <Route path="/didnt-email">
                        <DidntEmail/>
                    </Route>
                    <Route path="/">
                        <SignIn/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
