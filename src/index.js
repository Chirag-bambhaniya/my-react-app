import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import FunctionComponent from './practice/Function';
// import ClassComponent from './practice/Class';
// import Home from './practice/'
import { BrowserRouter, HashRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './content/Dashboard';
import StyleComponent from './practice/style/StyleComponent';
import Home from './practice/Router/Home';
import Route1 from './practice/Router/Route1';
import Route2 from './practice/Router/Route2';
import store from './practice/redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/route-1',
//     element: <Route1/>
//   },
//   {
//     path: '/route-2',
//     element: <Route2/>
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route index element={<Dashboard />} />
//       <Route path='style' element={<StyleComponent />} />
//     </Route>
//   )
// )

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    {/* <ClassComponent/>
    <FunctionComponent/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
