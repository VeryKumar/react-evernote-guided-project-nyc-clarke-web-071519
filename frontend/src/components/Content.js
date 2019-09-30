import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  state = {
    editClicked: false
  };
  // renderContent = () => {
  //   if (false) {
  //     return <NoteEditor />;
  //   } else if (false) {
  //     return (
  //       <NoteViewer
  //         displayNote={this.props.displayNote}
  //         title={this.props.title}
  //       />
  //     );
  //   } else {
  //     return <Instructions />;
  //   }
  // };
  //GET THIS WORKING EVENTUALLY!!! :)

  editClicked = () => {
    // console.log("DIDIT!");
    this.setState({
      editClicked: true
    });
  };
  //if this function is run, value will be equal to true

  renderContent = () => {
    if (this.state.editClicked === true) {
      return (
        <NoteEditor
          title={this.props.title}
          caption={this.props.caption}
          handleSubmit={this.props.handleSubmit}
          handleChangeBody={this.props.handleChangeBody}
        />
      );
    } else {
      return (
        <NoteViewer
          title={this.props.title}
          caption={this.props.caption}
          setStateNoteItem={this.props.setStateNoteItem}
          editClicked={this.editClicked}
        />
      );
    }
  };

  render() {
    // console.log("TITLE:", this.props.title);
    return (
      <div className="master-detail-element detail">{this.renderContent()}</div>
    );
  }
}

export default Content;
