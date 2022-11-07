import React, { useContext } from 'react';
import { UserContext } from './contexts/UserContextProvider/UserContextProvider';
import Routes from './router/Routes/Routes';

const App = () => {

  const { loading, user } = useContext(UserContext);

  if (loading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  return (
    <>
      <Routes />
    </>
  );
}

export default App;

