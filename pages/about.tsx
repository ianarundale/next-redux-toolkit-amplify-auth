import React, { Component } from 'react'
import { getCurrentUser } from '../amplify'
import Layout from '../components/Layout'
import { withAuthenticator } from 'aws-amplify-react'

class AboutPage extends Component<any> {

  constructor(props: any) {
    super(props);
    console.log("About props", props)
  }

  state = {
    user: { username: '' }
  }

  componentDidMount = () => {
    getCurrentUser().then(user => {
      this.setState({ user })
    })
      .catch(e => {
        console.log("error:", e)
      })
  }

  render() {

    let user = this.props.oAuthUser

    return (
      <Layout title="About | Next.js + TypeScript Example">
        {user && <h2>Logged in</h2>}
        <h1>hello user: {this.state.user?.username}</h1>
        <br />
        <h2>{this.props.oAuthUser}</h2>
        <button onClick={this.props.OAuthSignIn}>
          Sign in
      </button>
      </Layout>
    )
  }
}

export default AboutPage