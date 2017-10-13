import React, { Component } from 'react';
import Comments from './Components/Comments';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {numChildren: 0, comments: [], newCommentValue:''};
        this.eachComment = this.eachComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.addComment = this.addComment.bind(this);
        this.handleNewComment = this.handleNewComment.bind(this);
  }

  removeComment(i) {
    console.log('Removing comments: ' + i);
    var arr = this.state.comments;
    arr.splice(i, 1); // remove the ith comment, the 1 stands for removing just the ith comment
    this.setState({comments: arr}); // set the new array in the state
  }

  updateComment(newText, i) {
    console.log('Updating comments: ' + i);
    var arr = this.state.comments;
    arr[i] = newText;
    this.setState({comments: arr});
  }

  addComment(text) {
    var arr = this.state.comments;
    arr.push(text);
    this.setState({comments: arr});
    this.setState({newCommentValue: ""})
  }

  eachComment(text, i) {
    return (
      <Comments key={i} index={i} updateCommentText={this.updateComment.bind(this)} deleteComment={this.removeComment.bind(this)} >
        {text}
      </Comments>
    );
  }

  handleNewComment(event) {
    this.setState({newCommentValue: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>Let's start taking notes!</h1>
        <input className="new-comment-input" type="text" value={this.state.newCommentValue} onChange={this.handleNewComment}/>
        <button onClick={this.addComment.bind(null, this.state.newCommentValue)} className="button-info create">Add New Comment</button>
        {this.state.comments.map(this.eachComment)}
      </div>
    );
  }
}

export default App;
