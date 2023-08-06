import {createBrowserRouter,Navigate} from 'react-router-dom'
import {App} from "../App.tsx";
import {SingUp} from "../components/ui/singUp/SingUp.tsx";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Navigate to="/404" />,
        children: [
            {
                path: '/login',
                element: (
                    <SingUp />
                )
            },      {
                path: '/404',
                element: (
                    <h2>404: СТРАНИЦА НЕ НАЙДЕНА...ОШИБКА!</h2>
                )
            }
        ]
    }
])

