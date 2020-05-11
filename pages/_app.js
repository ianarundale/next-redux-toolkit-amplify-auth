import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { getCurrentUser } from '../amplify'


class MyApp extends Component {

  componentDidMount() {
    //this.unsubscribeStore = store.subscribe(this.storeListener);

    // Auth handler in here...?
    console.log("MyApp - did mount")
    getCurrentUser().then(user => {
      console.log("Current User:", user)
      
      //TODO: Store in redux  
    })
      .catch(e => {
        console.info("User not logged in")
      })
  }

  componentWillUnmount() {
    //this.unsubscribeStore();

    console.log("MyApp - will unmount")
  }


  render() {
    const { Component, pageProps } = this.props

    console.log("MyApp")

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp
