import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, setStateNoteItem, findNoteObjToDisplay }) => {
  // console.log(props.notes[0]);
  // generateNoteItems = () => {
  //   return props.notes.map((note, idx) => <NoteItem key={idx} {...note} />);
  // };
  // return <ul id="note-list">{this.generateNoteItems()}</ul>;

  // const handleClick = e => {
  //   this.props.displayNote;
  // };

  return (
    <ul id="note-list">
      {notes.map(note => (
        <NoteItem
          note={note}
          setStateNoteItem={setStateNoteItem}
          findNoteObjToDisplay={findNoteObjToDisplay}
        />
      ))}
    </ul>
  );
};

export default NoteList;
