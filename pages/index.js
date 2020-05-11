import React from 'react'
import { createAction } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import useInterval from '../lib/useInterval'
import Clock from '../components/clock'
import Counter from '../components/counter'
import Layout from '../components/Layout'

const tick = createAction('TICK', light => {
  return {
    payload: {
      light: light,
      lastUpdate: Date.now(),
    },
  }
})

const IndexPage = ({ dispatch }) => {
  // Use state or dispatch here

  // Tick the time every second
  useInterval(() => {
    dispatch(tick(true))
  }, 1000)
  return (
    <Layout>
      <Clock />
      <Counter />
    </Layout>
  )
}

export default connect(state => state)(IndexPage)
