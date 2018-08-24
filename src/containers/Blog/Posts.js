import React, {Component} from 'react';
import axios from "../../axios";
import Post from "../../components/Posts/Post";
import './Posts.css';
import {Route} from "react-router-dom";
import FullPost from "./FullPost";

// import {Link} from 'react-router-dom';

class Posts extends Component {
  state = {
    posts         : [],
    selectedPostId: null,
    error         : false,
  };
  
  selectPost = (id) => {
    // this.setState({selectedPostId: id});
    // this.props.history.push('/posts/' + id);
    this.props.history.push({pathname: this.props.match.url + '/' + id});
  };
  
  
  componentDidMount () {
    console.log(this.props);
    axios.get('posts/')
         .then(response => {
           const posts = response.data.slice(0, 4);
           const updatedPosts = posts.map(post => {
             return {...post, author: "Max"};
           });
           this.setState({posts: updatedPosts});
           //console.log(response.data);
         })
         .catch(error => {this.setState({error: true});})
    ;
  }
  
  render () {
    let posts = <p style={{textAlign: 'center'}}>Error!!!</p>;
    
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={'/' + post.id} key={post.id}>
          <Post key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.selectPost(post.id)} />
          // </Link>
        );
      });
    }
    
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} component={FullPost} />
      </div>
    );
  }
}

export default Posts;