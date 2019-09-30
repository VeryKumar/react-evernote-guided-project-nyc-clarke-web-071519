import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

class NoteContainer extends Component {
  state = {
    title: "",
    caption: "",
    notes: []
  };

  // constructor(props) {
  //   super(props);
  //   this.componentDidMount = this.componentDidMount.bind(this);
  // }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(resp => resp.json())
      .then(userData =>
        userData.forEach(user => {
          this.setState({
            notes: user.notes
          });
        })
      );
  }

  findNoteObjToDisplay = event => {
    let obj = this.state.notes.find(
      obj => obj.title === event.target.innerText
    );
    // console.log(obj);
    // console.log("FINDTHEOBJ", event.target);
    return obj;
  };

  setStateNoteItem = event => {
    let obj = this.findNoteObjToDisplay(event);
    console.log(obj.body);
    this.setState({
      title: event.target.innerText,
      // NEEDS UPDATING
      caption: obj.body
    });
    // console.log(event.target.innerText);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.value);

    // this.setState({
    //   title: event.target.value
    // });

    // fetch('http://localhost:3000/api/v1/notes',{
    //   headers: {"Content-Type": "application/json;"},
    //   method: "PATCH",
    //   body: JSON.stringify({

    //   })
    // })
  };

  handleChangeBody = event => {
    console.log(event);
  };

  render() {
    return (
      <Fragment>
        <Search />
        <div className="container">
          <Sidebar
            notes={this.state.notes}
            findNoteObjToDisplay={this.findNoteObjToDisplay.bind(this)}
            setStateNoteItem={this.setStateNoteItem.bind(this)}
          />
          <Content
            handleSubmit={this.handleSubmit}
            title={this.state.title}
            caption={this.state.caption}
            setStateNoteItem={this.setStateNoteItem.bind(this)}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
