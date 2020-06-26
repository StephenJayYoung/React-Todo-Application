import React, { Component } from 'react';
import Note from './components/Note'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [],
      amountLeft: 0,
    } 
  }
  updateNoteText(noteText) {
    this.setState({noteText: noteText.target.value})
  }

  addNote() {
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: "" });
    this.textInput.focus();
    if(this.state.noteText === "") {return false}
  }

  addCounter() {
    let counter = this.state.amountLeft;
    counter +=1;
    // this.setState({counter ++ 1})
  }

  handleKeyPress = (event) => {
    if (event.key ==="Enter"){
      console.log('enter pressed');
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({ noteText: "" });
      this.textInput.focus();
    }

  }

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({notes : notesArr })
  } 

render() {

let notes = this.state.notes.map((val, key) =>{
  return <Note key={key} text={val}
    deleteMethod={ () => this.deleteNote(key) } />


})

  return (
    <div className="app">
      <div className = "header">
        <h1>React TODO Application</h1>
      </div>
      <div className = "remaining">
        <h3 onClick={this.addCounter.bind(this)}>{this.state.amountLeft} tasks remaining</h3>
      </div>      
      {notes}

      <div className = "btn" onClick={this.addNote.bind(this)}>+</div>

      <input type="text"
        ref={((input) => {this.textInput = input})} 
        className="textInput"
        value={this.state.noteText}
        onChange={noteText => this.updateNoteText(noteText)}
        onKeyPress={this.handleKeyPress.bind(this)}
        />

    </div>
  );
}
}
export default App;
