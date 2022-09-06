import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
      <button className={classes.button} onClick={props.deletionHandler}>
        Delete
      </button>
    </figure>
  );
};

export default HighlightedQuote;
