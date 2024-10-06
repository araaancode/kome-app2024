import React,  { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import userStore from './landing/app/store'

import store from './admin/app/store'

import { Provider } from 'react-redux'
import SuspenseContent from './admin/containers/SuspenseContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseContent />}>
        <Provider store={store}>
            <App />
        </Provider>
    </Suspense>
  </React.StrictMode>

  // <React.StrictMode>
  //   <Provider store={userStore}>
  //     <App />
  //   </Provider>
  // </React.StrictMode>
);

reportWebVitals();
