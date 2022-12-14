// import { useContext } from 'react';
// import AuthContext from '../../store/auth-context';
const DeleteQuote = async (props) => {
  const responce = await fetch(
    `http://ec2-13-233-232-148.ap-south-1.compute.amazonaws.com:8080/quotes/${props.id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.token}`,
      },
    }
  );

  if (!responce.ok) {
    throw new Error('Could not detele quote.');
  }
  return true;
};

export default DeleteQuote;
