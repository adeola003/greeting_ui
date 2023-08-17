import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGreeting } from '../redux/greetings/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingData = useSelector((store) => store.greeting.data);
  const isLoading = useSelector((store) => store.greeting.isLoading);
  const error = useSelector((store) => store.greeting.error);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <div>
      <h2>Random Greeting</h2>
      <p>{greetingData}</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Greeting;
