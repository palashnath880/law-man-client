import React, { useContext } from 'react';
import { UserContext } from './contexts/UserContextProvider/UserContextProvider';
import Routes from './router/Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </>
  );
}

export default App;

