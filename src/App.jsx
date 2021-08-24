import { Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'
import './App.scss'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Watch from './pages/Watch'

function App() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/watch" exact component={Watch} />
    </Switch>
  )
}

export default App
