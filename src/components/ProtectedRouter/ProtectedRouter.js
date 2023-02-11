import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LoginApi } from '../../requestApi/LoginApi';


function ProtectedRouter({ HomeLayout }) {
    const isLogin = useSelector((state) => state.auth.isLogin)

    if (isLogin) {
        return <HomeLayout />
    } else {
        return <Navigate to='login'></Navigate>
    }
}

export default ProtectedRouter;