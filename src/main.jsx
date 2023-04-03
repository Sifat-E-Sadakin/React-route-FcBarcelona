import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Players from './Players/Players';
import Info from './Info/Info';
import Achievements from './Achievements/Achievements';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/players",
        element: <Players></Players>,
        loader: ()=> fetch('/players.json')
      },
      {
        path: '/info/:id',
        element: <Info></Info>,
        loader: ({params})=> fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${params.id}`),
      },
      {
        path: '/achievements/:id',
        element: <Achievements></Achievements>,
        loader: ({params})=> fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuphonours.php?id=${params.id}`)
      },
      
      {
        path: '/*',
        element: <div>404</div>,
      }
  
 
  ],
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
