import React, { Component } from 'react';

class Comments extends Component {
  
    constructor(props) {
        super(props);
        this.state = {editing: false, complete: false};
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.complete = this.complete.bind(this);
    }

    edit() {
        this.setState({editing: true});
    }

    remove() {
        this.props.deleteComment(this.props.index);
    }

    save() {
        this.props.updateCommentText(this.refs.newText.value, this.props.index)
        this.setState({editing: false});
    }

    complete() {
        alert('This task has now been completed');
        this.setState({complete: true});
    }

    // 2 Different functions to render a Normal State (editing=false and editing=true)
    renderNormal() {
        return (
          <div className="commentContainer">
              <div className="commentText">{this.props.children}</div>
              <button onClick={this.edit} className="button-primary">Edit</button>
              <button onClick={this.remove} className="button-danger">Remove</button>
              <button onClick={this.complete} className="button-complete">Complete</button>
          </div>
    );}

    renderForm() {
        return (
        <div className="commentContainer">
            <textarea ref="newText" name="commentArea" defaultValue={this.props.children}></textarea>
            <button onClick={this.save} className="button-save">Save</button>
        </div>
    );}

    renderComplete() {
        return (
          <div className="commentContainer">
              <div className="commentText">{this.props.children}</div>
          </div>
    );}

    render() {
        if(this.state.editing) {
            return this.renderForm();
        } else {
            if(this.state.complete) {
                return this.renderComplete();
            } else {
                return this.renderNormal();
            }
        }
    }
}

export default Comments;
