import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TopicsList from './components/TopicsList';
import ArticleList from './components/ArticleList';
import FullArticle from './components/FullArticle';
import UserPage from './components/UserPage';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <ArticleList path='/' />
        <ArticleList path='/topic/:topic' />
        <TopicsList path='/topics' />
        <FullArticle path='/article/:articleid' />
        <UserPage path='/user/:username' />
        <ErrorPage default />
      </Router>
    </div>
  );
}

export default App;
