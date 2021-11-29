import React, { useRef, useEffect } from 'react'
import { mount as mountAuthApp } from 'auth/AuthApp'
import { useHistory } from 'react-router-dom'

const AuthApp = () => {

    const authRef = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mountAuthApp(authRef.current, {
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
        <div ref={authRef} />
    )
}

export default AuthApp