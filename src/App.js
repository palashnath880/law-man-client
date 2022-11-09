import React, { useContext } from 'react';
import { UserContext } from './contexts/UserContextProvider/UserContextProvider';
import Routes from './router/Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "react-awesome-lightbox/build/style.css";

const App = () => {

  const { loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className='h-screen w-full top-0 right-0 fixed'>
        <div className='h-full w-full flex justify-center items-center'>
          <div className='text-center'>
            <span className='w-12 h-12 mx-auto border-4 border-gray-700 border-t-transparent mb-2 animate-spin block rounded-full'></span>
            <p>Loading....</p>
          </div>
        </div>
      </div>
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

