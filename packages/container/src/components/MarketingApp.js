import React, { useRef, useEffect } from 'react'
import { mount as mountMarketingApp } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom'

const MarketingApp = () => {

    const marketRef = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mountMarketingApp(marketRef.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location
                if (pathname !== nextPathname) {
                    history.push(nextPathname)
                }
            }
        })
        history.listen(onParentNavigate)
    }, [])

    return (
        <div ref={marketRef} />
    )
}

export default MarketingApp