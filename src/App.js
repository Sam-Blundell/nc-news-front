import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TopicsList from './components/TopicsList';
import ArticleList from './components/ArticleList';
import FullArticle from './components/FullArticle';
import UserPage from './components/UserPage';
import ErrorPage from './components/ErrorPage';

class App extends React.Component {
  state = {
    currentUser: 'guest'
  }

  componentDidMount() {
    this.setState({ currentUser: localStorage.getItem('currentUser') })
  }

  render() {
    const { currentUser } = this.state
    return (
      <div className="App">
        <Header />
        <Navbar getUser={this.getUser} currentUser={currentUser} />
        <Router className='ContentView'>
          <ArticleList path='/' currentUser={currentUser} />
          <ArticleList path='/topic/:topic' currentUser={currentUser} />
          <TopicsList path='/topics' />
          <FullArticle path='/article/:articleid' currentUser={currentUser} />
          <UserPage path='/user/:username' currentUser={currentUser} />
          <ErrorPage default error={{ status: '404', data: { msg: 'page not found' } }} />
        </Router>
      </div>
    );
  }

  getUser = (user) => {
    this.setState({ currentUser: user })
    localStorage.setItem('currentUser', user)
  }
}

export default App;