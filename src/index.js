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

const root = ReactDOM.createRoot(document.getElementById('root'));

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
      <App />
    </BrowserRouter>
    {/* <ClassComponent/>
    <FunctionComponent/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
