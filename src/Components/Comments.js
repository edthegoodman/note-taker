import React, { Component } from 'react';

class Comments extends Component {
  
    constructor(props) {
        super(props);
        this.state = {editing: false};
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    edit() {
        this.setState({editing: true});
    }

    remove() {
        alert('Removing comment');
    }

    save() {
        this.setState({editing: false});
    }
    // 2 Different functions to render a Normal State (editing=false and editing=true)
    renderNormal() {
        return (
          <div className="commentContainer">
              <div className="commentText">{this.props.children}</div>
              <button onClick={this.edit} className="button-primary">Edit</button>
              <button onClick={this.remove} className="button-danger">Remove</button>
          </div>
        );}

    renderForm() {
        return (
        <div className="commentContainer">
            <textarea name="commentArea" defaultValue={this.props.children}></textarea>
            <button onClick={this.save} className="button-save">Save</button>
        </div>
    );}
    render() {
        if(this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }
}

export default Comments;
