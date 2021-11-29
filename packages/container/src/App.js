import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Header from './components/Header';
import MarketingApp from './components/MarketingApp'
import AuthApp from './components/AuthApp';

const generatedClassName = createGenerateClassName({
    productionPrefix: "co"
})

export default () => {
    return (
        <StylesProvider generateClassName={generatedClassName}>
            <Header />
            <AuthApp />
            <MarketingApp />
        </StylesProvider>
    )
}