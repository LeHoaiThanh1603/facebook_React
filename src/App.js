import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { publicRoutes } from './routes/routes'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Fragment, useEffect } from 'react';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter';
import Auth from './layouts/Auth/Auth';
import { setHeadersRequests } from './layouts/Auth/components/setHeadersRequests/SetHeadersRequests';
import { LoginApi } from './requestApi/LoginApi';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './layouts/Auth/AuthSlice';
import ProfileLayout from './layouts/ProfileLayout/ProfileLayout';
function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const checkLogin = async () => {
      setHeadersRequests(localStorage['token'])
      console.log(localStorage['token'])
      try {
        const userData = await LoginApi.checkLoginByToken('/check')
        dispatch(loginSuccess(userData.data))
        navigate('/')
      } catch (error) {

      }
    }
    checkLogin()

  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRouter HomeLayout={HomeLayout} />} />
        <Route path="/profile" element={<ProfileLayout />} />
        <Route path="/login" element={<Auth />} />

        {/* {publicRoutes.map((route, index) => {

            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }


            const Page = route.component
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })} */}
      </Routes>
    </div>
  );
}

export default App;
