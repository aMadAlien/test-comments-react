import { createRef, useState } from 'react';
import { EditorContainer, ButtonContainer, SubmitButton, Label, TextArea, ErrorMessage } from '../../styles/CommentFormStyles';
import axiosInstance from '../../config/axios';
import { validateDataBeforeSubmit, insertTag } from '../../utils/CommentHelper';

function CommentForm({ replyTo }) {
  const [comment, setComment] = useState('');
  const [homePage, setHomePage] = useState('');
  const [error, setError] = useState('');

  const textAreaRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target.file.files[0];

    validateDataBeforeSubmit(comment, file, setError)

    const formData = new FormData();
    const user = JSON.parse(localStorage.getItem("user"));

    formData.append('userId', user.id);
    formData.append('homePage', homePage);
    formData.append('text', comment);
    replyTo && formData.append('replyTo', replyTo);
    file && formData.append('file', file);

    setError('');
    axiosInstance.post('/comments', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((res) => { console.log(res) })
      .catch((e) => console.error(e));
  };

  const insertCustomTag = (e, tag) => insertTag(e, tag, textAreaRef, comment, setComment);

  return (
    <EditorContainer onSubmit={e => handleSubmit(e)}>
      <Label htmlFor="comment">Comment</Label>
      <ButtonContainer>
        <button onClick={(e) => insertCustomTag(e, '<a href="" title=""></a>')}>Insert Link</button>
        <button onClick={(e) => insertCustomTag(e, '<code></code>')}>Insert Code</button>
        <button onClick={(e) => insertCustomTag(e, '<i></i>')}>Insert Italic</button>
        <button onClick={(e) => insertCustomTag(e, '<strong></strong>')}>Insert Bold</button>
      </ButtonContainer>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <TextArea
        ref={textAreaRef}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment here..."
        required
        rows={6}
      />

      <Label htmlFor="file">Home page link</Label>
      <input type="text" onChange={e => setHomePage(e.target.value)} />

      <Label htmlFor="file">Upload Image or Text File</Label>
      <input type="file" id="file" />

      <SubmitButton type="submit">Submit</SubmitButton>
    </EditorContainer>
  );
}

export default CommentForm;