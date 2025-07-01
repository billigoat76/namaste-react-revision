import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import {createBrowserRouter, Outlet} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs'
import ErrorPage from './components/ErrorPage';


const App = () => {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

// creating the routing configuration 

export const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path : '/',
        element : <Body/>
      },
      {
        path : '/contact',
        element : <ContactUs/>

      },
      {
        path : '/about',
        element : <AboutUs/>
      }
    ],
  },
])

export default App