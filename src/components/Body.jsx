
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter , RouterProvider,} from 'react-router-dom'
import ProtectedRoute from '../utils/Projectedroute';
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            element:<ProtectedRoute/>,
            children:[
                {
            path: "/browse",
            element: <Browse/>
        },

            ]
        }
        
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
} ;

export default Body