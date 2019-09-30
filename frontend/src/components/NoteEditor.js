import React, { Component } from "react";

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor">
        <input
          id="titlearea"
          type="text"
          name="title"
          value={this.props.title}
          // onChange={e => {
          //   this.setState({ inputVal: e.target.value });
          // }}
        />
        <textarea name="body" onChange={this.props.handleChangeBody}>
          {this.props.caption}
        </textarea>
        <div className="button-row">
          <input
            className="button"
            type="submit"
            value="Save"
            onClick={this.props.handleSubmit}
          />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
