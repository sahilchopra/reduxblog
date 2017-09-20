import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { postList, deletePost } from '../actions';


class PostsShow extends Component {

  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.postList(id);
  }

  onDeleteClick(){
    const {id} = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const {post} = this.props;
    if(!post){
      return(
        <div>Loading...</div>
      )
    }
    return (
      <div>
        <button type="button" className="btn btn-danger" onClick={this.onDeleteClick.bind(this)}>
          Delete
        </button>
        <h3> {post.title} </h3>
        <p> {post.categories} </p>
        <p> {post.content} </p>
        <Link to="/" className="btn btn-primary"> Back </Link>
      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps){
  return { post: posts[ownProps.match.params.id] };
}
export default connect(mapStateToProps, {postList, deletePost})(PostsShow);
