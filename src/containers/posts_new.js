import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import {createPost} from '../actions';

class PostsNew extends Component {

  renderField(field){
    console.log(field);
    const {meta : {touched, error}} = field;
    console.log(touched);
    console.log(error);
    const formClass = `form-group ${touched && error ? 'has-danger' : ''} `;
    return(
        <div className={formClass}>
          <label> {field.label} </label>
          <input className="form-control"
            type="text"
            {...field.input}
          />
          <div className="text-help">
            {touched ? error : ''}
          </div>
        </div>
    );
  }

  onSubmit(values){
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
    console.log(values);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field 
          name="title"
          label="Title"
          component={this.renderField}
        />
        <Field 
          name="categories"
          label="categories"
          component={this.renderField}
        />
        <Field 
          name="content"
          label="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
        <Link to="/" className="btn btn-danger"> Cancel </Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  if(!values.title){
    errors.title = "Title can't be blank"
  }
  if(!values.categories){
    errors.categories = "categories can't be blank"
  }
  if(!values.content){
    errors.content = "content can't be blank"
  }
  return errors;
}

// export default reduxForm({
//   // a unique name for the form
//   validate,
//   form: 'NewPostForm'
// })(PostsNew);
export default reduxForm({
  validate,
  form: 'NewPostForm'
})(connect(null, {createPost})(PostsNew));
