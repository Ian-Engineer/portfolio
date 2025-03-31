import {
  createBrowserRouter,
} from "react-router";
import Template from "../../main/template";
import Routes from './routes'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Routes.Root,
    children: [
        {
            path: '/',
            Component: Routes.Template
        }
    ]
  },
]);

export default router;