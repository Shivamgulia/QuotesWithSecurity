// import { useContext } from 'react';
// import AuthContext from '../../store/auth-context';

// const FIREBASE_DOMAIN = 'https://quotes-33a21-default-rtdb.firebaseio.com';

export async function getAllQuotes(props) {
  // const authCtx = useContext(AuthContext);
  console.log({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + props,
  });
  const response = await fetch('http://localhost:8080/quotes', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + props,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    console.log(response);
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function getSingleQuote(props) {
  const response = await fetch(`http://localhost:8080/quotes/${props.id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${props.token}`,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    id: props.id,
    ...data,
  };

  return loadedQuote;
}

export async function addQuote(props) {
  const response = await fetch('http://localhost:8080/quotes/', {
    method: 'POST',
    body: JSON.stringify(props.quoteData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${props.token}`,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

// export async function deleteQuote(quoteId) {
//   console.log('a' + quoteId);
//   const response = await fetch(`http://localhost:8080/quotes/${quoteId}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not create quote.');
//   }
//   console.log('well');

//   return null;
// }

export async function addComment(props) {
  console.log('fuck');
  console.log(`Bearer ${props.token}`);
  const response = await fetch('http://localhost:8080/comments', {
    method: 'POST',
    body: JSON.stringify(props.commentData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${props.token}`,
    },
  });
  const data = await response.json();
  console.log(response);

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

// export async function getAllComments(quoteId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not get comments.');
//   }

//   const transformedComments = [];

//   for (const key in data) {
//     const commentObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedComments.push(commentObj);
//   }

//   return transformedComments;
// }
