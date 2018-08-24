import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

// import axios from 'axios';
import './Blog.css';
import Posts from './Posts';
// import NewPost from './NewPost';
// import FullPost from "./FullPost";

import asyncComponent from '../../hoc/asyncComponent';

const asyncNewPost = asyncComponent(() => {
  return import ('./NewPost');
});

class Blog extends Component {
  render () {
    return (
      
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink exact to="/posts">Posts</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                // search   : '?quick-submit=true',
                // hash     : '#submit',
              }}>New post</NavLink></li>
            </ul>
          </nav>
        </header>
        
        {/*<Route exact path="/" render={() => <h1>Home</h1>} />*/}
        <Switch>
          <Route path='/new-post' component={asyncNewPost} />
          <Route path='/posts' component={Posts} />
          <Redirect from='/' to='/posts' />
        </Switch>
      </div>
    )
      ;
  }
}

export default Blog;
