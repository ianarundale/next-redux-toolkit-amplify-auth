import React from 'react'
import { Auth, Hub } from 'aws-amplify'
import { getCurrentUser } from '../amplify'
import Layout from '../components/Layout'
import Router from 'next/router';



export default class Callback extends React.Component {
    constructor() {
        super()
        this.state = {}

        Hub.listen("auth", ({ payload: { event, data } }) => {
            console.log("AuthEvent:", event, data)
            switch (event) {
                case "signIn":
                    this.setState({ user: data });
                    window.location.href = "/";           
                    break;
                case "signOut":
                    this.setState({ user: null });
                    break;
                case "customOAuthState":
                    this.setState({ customState: data });
            }
        });
    }

    onAuthEvent(payload) {
        // ... your implementation
    }

    render() {
        return (
            <h1>Loading...</h1>
        )
    }
}