import { Fragment, useState } from 'react';
import {
  CommentWrapper,
  CommentText,
  RepliesWrapper,
  OpenTextFileButton
} from '../../styles/CommentListStyles'
import TextModal from '../TextModal';

function CommentItem({ comment }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!comment) return;
  return (
    <CommentWrapper>
      <div>
        <div>{comment.user?.name} {comment.created_at}</div>
        <CommentText dangerouslySetInnerHTML={{ __html: comment.text }} />

        {
          comment.file && (comment.file.extension === 'txt'
          ?
          <Fragment>
            <OpenTextFileButton  onClick={e => setIsModalOpen(true)}>Open Text File</OpenTextFileButton>
            <TextModal
              isOpen={isModalOpen}
              closeModal={e => setIsModalOpen(false)}
              content={comment.file.content} />
          </Fragment>
          :
          <img with="100px" height="100px" src={comment.file.content} />)
        }
      </div>

      {comment.replies && (
        <RepliesWrapper>
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} />
          ))}
        </RepliesWrapper>
      )}
    </CommentWrapper>
  )
}

export default CommentItem