// utils/convertHtmlToRichText.js
import { EditorState, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";

export default function convertHtmlToRichText(html) {
  const contentBlock = htmlToDraft(html);
  if (contentBlock) {
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  } else {
    return EditorState.createEmpty();
  }
}
