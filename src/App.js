import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Axios from './components/Axios'
import Fetch from './components/Fetch'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          {/* <Route path='/axios' Component={Axios} /> */}
          {/* Be careful with the VS Code extension, it automatically captitalizes the 'c' of component="" */}

          <Route exact path='/home' component={Home} />
          <Route exact path='/axios' component={Axios} />
          <Route exact path='/fetch' component={Fetch} />

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
