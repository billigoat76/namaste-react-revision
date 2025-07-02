import Header from './components/Header'
import { lazy, Suspense } from 'react';
import Body from './components/Body'
import Footer from './components/Footer'
import {createBrowserRouter, Outlet} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs'
import ErrorPage from './components/ErrorPage';
import RestaurantMenu from './components/RestaurantMenu'
import ShimmerUI from './components/ShimmerUI';
import GroceryFallback from './components/GroceryFallback';
//import Grocery from './components/Grocery';

//chinking (code-splitting) - (Lazy loading) - (Dynamic bundling)

const Grocery = lazy(()=> import('./components/Grocery'));

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className='flex-grow '>
      <Outlet/>
      </main>
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
      },
      {
        path : '/grocery',
        element : <Suspense fallback={<GroceryFallback/>}><Grocery/></Suspense>
      },
      {
        path : '/restaurants/:resId',
        element : <RestaurantMenu/>
      },
    ],
  },
])

export default App