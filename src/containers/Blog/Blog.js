import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';

// import axios from 'axios';
import './Blog.css';
import Posts from './Posts';
import NewPost from './NewPost';
import FullPost from "./FullPost";

// const POSTS_PATH = 'https://jsonplaceholder.typicode.com/posts/';

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
          <Route path="/new-post" component={NewPost} />
          <Route path='/posts' component={Posts} />
        </Switch>
      </div>
    )
      ;
  }
}

export default Blog;
