import React, { Fragment } from "react";

const NoteViewer = props => {
  return (
    <Fragment>
      <h2>{props.title}</h2>
      <p>{props.caption}</p>
      <button onClick={() => props.editClicked()}>Edit</button>
    </Fragment>
  );
};

export default NoteViewer;
