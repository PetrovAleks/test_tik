import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './header/header'
import Footer from './footer/footer'
import { DiscoverPage } from '../pages/discover'
import Main from '../pages/main'

import { videoService } from '../services/VideoService'

class App extends Component {
  state = {
    listLikedVideo: [],
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/main" render={(props) => <Main />} />
          <Route path="/discover" render={() => <DiscoverPage />} />

          <Redirect to="/main" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export { App, videoService }
