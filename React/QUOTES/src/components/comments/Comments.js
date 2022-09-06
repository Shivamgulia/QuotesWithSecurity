import { useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
// import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';
// import useHttp from '../../components/hooks/use-http';
// import { addComment } from '../lib/api';
// import { getAllComments } from '../lib/api';

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  // const { sendRequest } = useHttp(addComment);

  // const quoteId = params.quoteId;

  // useEffect(() => {
  //   sendRequest(quoteId);
  // }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  // const addedCommentsHandler = useCallback(() => {
  //   sendRequest(quoteId);
  // }, [quoteId, sendRequest]);

  let comments = props.quote.comments;
  // if (status === 'pending') {
  //   comments = (
  //     <div className="centered">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }
  // if (status === 'completed') {
  // comments = <CommentsList comments={loadedComments} />;
  // }
  // if (
  //   status === 'completed' &&
  //   (!loadedComments || loadedComments.length === 0)
  // ) {
  //   comments = <p className="centered">No Comments Found.</p>;
  // }

  comments = <CommentsList comments={comments} />;

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onAddComment={props.onAddComment}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
