import { useRef, useState, Fragment } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const quoteInputRef = useRef();
  const [focusState, setFocusState] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredQuote = quoteInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({
      author: enteredAuthor,
      quote: enteredQuote,
    });
  }

  const finishEnteringHandler = () => {
    setFocusState(false);
  };

  const formFocusHandler = () => {
    setFocusState(true);
    console.log(focusState);
  };
  return (
    <Fragment>
      <Prompt
        when={focusState}
        message={(location) =>
          'Are you sure you want to leave this page. All your data will be lost'
        }
      />
      <Card>
        <form
          onFocus={formFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="quote">Text</label>
            <textarea id="quote" rows="5" ref={quoteInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
