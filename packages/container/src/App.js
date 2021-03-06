import React, { lazy, Suspense, useState } from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Progress from './components/Progress';

// import MarketingApp from './components/MarketingApp'
// import AuthApp from './components/AuthApp';

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

const generatedClassName = createGenerateClassName({
    productionPrefix: "co"
})

export default () => {

    const [ isSignedIn, setIsSignedIn ] = useState(false)

    return (
        <StylesProvider generateClassName={generatedClassName}>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path='/auth'><AuthLazy onSignIn = {() => setIsSignedIn(true)} /></Route>
                        <Route path='/'><MarketingLazy  /></Route>
                    </Switch>
                </Suspense>
         
        </StylesProvider>
    )
}