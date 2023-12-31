import { isFileValid, isContentValid } from './Validation';

export function validateDataBeforeSubmit(comment, file, setError) {
    if (!isContentValid(comment)) { setError("Please enter a valid comment."); return }

    if (file && !isFileValid(file)) {
      setError('Please upload a valid image (JPG, GIF, PNG) (max 320x240) or text (TXT) file (max 100kb).');
      return;
    }
  }

export function insertTag(e, tag, textAreaRef, comment, setComment) {
  e.preventDefault();
  const startPos = textAreaRef.current.selectionStart;
  const endPos = textAreaRef.current.selectionEnd;
  const newText = comment.slice(0, startPos) + tag + comment.slice(endPos);
  setComment(newText);
  textAreaRef.current.focus();
};

export function findParentElementForNewComment(comments, newComment, replyTo) {
  return comments.map(item => {
    if (item.id === replyTo) {
      item.replies = [...(item.replies || []), newComment];
    } else {
      item.replies = findParentElementForNewComment(item.replies || [], newComment);
    }
    return item;
  });
}

export const saveNewCommentInState = (newComment, replyTo, comments, setComments) => {
  const commentsToSave = replyTo !== null ?
    findParentElementForNewComment(comments, newComment)
    : [newComment, ...comments];

  setComments(commentsToSave);
}