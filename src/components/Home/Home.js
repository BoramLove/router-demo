import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Link to='/'>首页</Link>
        <Link to='/about'>关于</Link>
        <a href='/'>首页</a>
        <a href='/about'>关于</a>
      </div>
    );
  }
}

export default Home;
