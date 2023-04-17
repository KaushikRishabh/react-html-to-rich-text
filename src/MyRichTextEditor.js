// components/MyRichTextEditor.js
import React, { useState } from "react";
import { Editor } from "draft-js";
import convertHtmlToRichText from "./convertHtmlToRichText";
// import convertHtmlToRichText from '../utils/convertHtmlToRichText';

function MyRichTextEditor({ initialHtml }) {
  const [editorState, setEditorState] = useState(() =>
    convertHtmlToRichText(initialHtml)
  );

  return (
    <Editor
      editorState={editorState}
      onChange={(newEditorState) => setEditorState(newEditorState)}
    />
  );
}

export default MyRichTextEditor;
