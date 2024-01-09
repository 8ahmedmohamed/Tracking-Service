import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React Router
import { BrowserRouter } from 'react-router-dom';

// React Toastify
import { ToastContainer } from 'react-toastify';

//loading
import Loading from './Components/Loading/Loading';

// Translation
import './Services/Translations/Translation';

// Vendors Styles
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.Fragment>
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <App />
                <ToastContainer />
            </BrowserRouter>
        </Suspense>
    </React.Fragment>
);