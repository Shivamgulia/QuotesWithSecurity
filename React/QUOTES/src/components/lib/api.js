const url = 'http://ec2-13-233-232-148.ap-south-1.compute.amazonaws.com:8080/';

export async function getAllQuotes(props) {
  // console.log({
  //   'Content-Type': 'application/json',
  //   Authorization: 'Bearer ' + props,
  // });
  const response = await fetch(url + 'quotes', {
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
  const response = await fetch(`${url}quotes/${props.id}`, {
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
  const response = await fetch(url + 'quotes/', {
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
  const response = await fetch(url + 'comments', {
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
