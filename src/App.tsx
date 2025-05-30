import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './config/router/index'


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
