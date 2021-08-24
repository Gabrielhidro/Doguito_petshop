import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Post from './paginas/Post'
import Pagina404 from './paginas/Pagina404'
import Header from  './components/Header'
import Categoria from './paginas/Categoria'



function App() {

  return (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sobre">
        <Sobre />
      </Route>
      <Route path="/categoria/:id">
        <Categoria />
      </Route>
      <Route path="/posts/:id">
        <Post />
      </Route>
      <Route>
        <Pagina404 />
      </Route>
    </Switch>
  </Router>
  )
}

export default App
