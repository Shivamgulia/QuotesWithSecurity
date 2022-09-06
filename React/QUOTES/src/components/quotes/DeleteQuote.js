import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
const DeleteQuote = async (props) => {
  const authCtx = useContext(AuthContext);
  const responce = await fetch(`http://localhost:8080/quotes/${props}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authCtx.token}`,
    },
  });

  if (!responce.ok) {
    throw new Error('Could not detele quote.');
  }
  return true;
};

export default DeleteQuote;
