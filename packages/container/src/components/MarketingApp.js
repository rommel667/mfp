import React, { useRef, useEffect } from 'react'
import { mount as mountMarketingApp } from 'marketing/MarketingApp'

const MarketingApp = () => {

    const marketRef = useRef(null)

    useEffect(() => [
        mountMarketingApp(marketRef.current)
    ], [])

    return (
        <div ref={marketRef} />
    )
}

export default MarketingApp