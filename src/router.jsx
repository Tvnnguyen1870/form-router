import { createBrowserRouter } from 'react-router-dom'
// import Layout from './pages/Layout';
// import About from './pages/About'
// import AboutMe from './pages/AboutMe'
// import AboutUs from './pages/AboutUs'
// import NotFound from './pages/Notfound';
// import PrivateGroup from './components/PrivateGroup';
// import ProtectedGroup from './components/ProtectedGroup ';
// import UserProfile from './components/UserProfile';
// // import SearchParams from './components/SearchParams';
// import Computer from './pages/Computer';
// import Phone from './pages/Phone';
// import Member from './components/Member';
// import CheckMember from './components/CheckMember';
// import Admin from './pages/Admin';
// import ProductDetail from './pages/ProductDetail';
// import Home from './pages/Home';
// import Login from './pages/Login';
import FormRegister from './forms/FormRegister';
import Formik from './forms/Formik';
import FormContact from './forms/FormContact';
import FormHealth from './forms/FormHealth';
import FormEmail from './forms/FormEmail';

const router = createBrowserRouter([
  // bài tập thực hành 1
  // {
  //   path: '/',
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: '/about',
  //       element: <About />
  //     },
  //     {
  //       path: '/about/me',
  //       element: <AboutMe />
  //     },
  //     {
  //       path: '/about/us',
  //       element: <AboutUs />
  //     },
  //     {
  //       path: '/member',
  //       element: <Member />,
  //       children: [
  //         {
  //           path: '/member/check',
  //           element: <CheckMember />,
  //           children: [
  //             {
  //               path: '/member/check/computer',
  //               element: <Computer />
  //             },
  //             {
  //               path: '/member/check/phone',
  //               element: <Phone />
  //             },
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       path: '/404',
  //       element: <NotFound />
  //     },
  //     {
  //       path: '*',
  //       element: <Navigate to='/404' />
  //     },
  //   ]
  // },
  // {
  //   path: '/',
  //   element: <Home />
  // },
  // {
  //   path: '/product/:productId',
  //   element: <ProductDetail />
  // }, 
  // {
  //   path: '/login',
  //   element: <Login />
  // }, 
  // {
  //   path: '/admin',
  //   element: <Admin isAdmin={false}/>
  // },


  // bài tập về Form
  // {
  //   path: '/',
  //   element: <FormRegister />
  // }
  // {
  //   path: '/',
  //   element: <Formik />
  // }
  // {
  //   path: '/',
  //   element: <FormContact />
  // }
  // {
  //   path: '/',
  //   element: <FormHealth />
  // }
  {
    path: '/',
    element: <FormEmail />
  }

  

  // {
  //   path: '/computer',
  //   element: <Computer />
  // },
  // {
  //   path: '/phone',
  //   element: <Phone />
  // },
  //------------------------------------------------

  // bài tập thực hành 2 
  // {
  //   path: '/private-group',
  //   element: <ProtectedGroup isMember={true}><PrivateGroup /></ProtectedGroup>
  // },
  // {
  //   path: "/user/:userId",
  //   element: <UserProfile />
  // },
  // //-----------------------------------------------

  // // bài tập thực hành 3
  // {
  //   path: '/param',
  //   element: <SearchParams />
  // },
  //-------------------------------------------------

]);


export { router }