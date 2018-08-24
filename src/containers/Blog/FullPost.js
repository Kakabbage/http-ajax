import React, {Component} from 'react';
import axios from 'axios';
// import axios from '../../axios';
import './FullPost.css';

// const POSTS_PATH = 'https://jsonplaceholder.typicode.com/posts/';

// const USERS_PATH = 'https://jsonplaceholder.typicode.com/users/';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };
  
  componentDidMount () {
    console.log(this.props);
    this.loadData();
  }
  
  componentDidUpdate (prevProps, prevState) {
    this.loadData();
  }
  
  loadData = () => {
    if (this.props.match.params.id) {
      if (!this.state.loadedPost
          // eslint-disable-next-line
          || (this.state.loadedPost.id != this.props.match.params.id
              && this.state.loadedPost))
      {
        axios.get('posts/' + this.props.match.params.id)
             .then(response => {
               // console.log(response);
               this.setState({loadedPost: response.data});
             });
      }
    }
    
  };
  
  deletePost = () => {
    axios.delete('posts/' + this.props.match.params.id)
         .then(response => {
           console.log(response);
         });
  };
  
  render () {
    let
      post = <p style={{textAlign: 'center'}}> Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{textAlign: 'center'}}> Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePost}
                    className="Delete">Delete
            </button>
          </div>
        </div>
      );
    }
    
    return post;
  }
}

export default FullPost;