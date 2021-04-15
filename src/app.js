import React from 'react'
import 'regenerator-runtime/runtime'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Detail from './components/Detail'
import Profile from './components/Profile'
import { SourceProvider } from './context/SourceContext'
import { MainProvider } from './context/MainContext'
import { ProfileProvider } from './context/ProfileContext'
import { DetailProvider } from './context/DetailContext'
import './App.scss'

const App = () => {
    return (
        <Router>
            <div className="app">
                <SourceProvider>
                    <MainProvider>    
                        <ProfileProvider>
                            <DetailProvider>
                                <Header></Header>
                                <div className="content">
                                    <Switch>
                                        <Route exact path="/">
                                            <Main />
                                        </Route>
                                        <Route path="/profile">
                                            <Profile />
                                        </Route>
                                        <Route path="/detail">
                                            <Detail />
                                        </Route>
                                    </Switch>
                                </div>
                            </DetailProvider>
                        </ProfileProvider>
                    </MainProvider>
                </SourceProvider>
            </div>
        </Router>
    )
}

export default App;