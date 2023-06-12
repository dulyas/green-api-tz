import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { Context } from './main'
import { useContext, useEffect } from 'react';
import Login from './routes/Login/Login';

import Home from './routes/Home/Home';
import Chat from './routes/Chat/Chat';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/chat',
    element: <Chat />
  }
])

function App() {

  const {store} = useContext(Context)

  
  

  const checkAuth = async (): Promise<void> => {
    // if (localStorage.getItem('token')) {
      // await store.checkAuth()
    // } else {
      // store.setLoading(false)
    // }

    // if (!store.idInstance) {
      store.isLoading = false
      // navigate('/login')
    // }

  }

  useEffect(() => {
    checkAuth()
  }, [])

  if (store.isLoading) {
    return (
      <>
        {<div>Loading...</div>}
      </>
    )
  } else {
    return (
      <>
        <RouterProvider router={router}/>
      </>
    )
  }



}

export default observer(App)
