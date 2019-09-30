import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

const NoteItem = ({ note, setStateNoteItem, findNoteObjToDisplay }) => {
  return (
    // <li onClick={() => displayNote}>
    <li
      onClick={e => {
        setStateNoteItem(e);
        findNoteObjToDisplay(e);
      }}
    >
      <h2>{note && note.title}</h2>
      <p>
        <LinesEllipsis
          text={note && note.body}
          maxLine="1"
          elipsis="..."
          trimRight
          basedOn="letters"
        />
      </p>
      {/* {console.log(props.notes[0] && props.notes[0].title)} */}
      {/* {this.state.notes.title != '' && this.state.notes.body != ? } */}
      {/* <h2>{props.notes[0].title}</h2> */}
      {/* <p>{props.notes[0].body}</p> */}
    </li>
  );
};

export default NoteItem;
