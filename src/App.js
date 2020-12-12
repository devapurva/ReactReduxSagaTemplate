import React from 'react';

import { Provider } from "react-redux";
import { Router } from 'react-router-dom';

import Routes from './app/routes';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './app/store/store';
import history from './app/service/history'

import './App.css';


function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes />
                <ToastContainer autoClose={3000} />
            </Router>
        </Provider>
    );
}

export default App;

// export default function App({ store, persistor, basename }) {
//   return (
//     /* Provide Redux store */
//     <Provider store={store}>
// 		{/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
// 		<PersistGate persistor={persistor} loading={<div>Loading... stuck at persisgate</div>}>
// 			{/* Add high level `Suspense` in case if was not handled inside the React tree. */}
// 			<React.Suspense fallback={<Spinner animation="border" />}>
// 			{/* Override `basename` (e.g: `homepage` in `package.json`) */}
// 				<BrowserRouter basename={basename}>
// 					{/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
// 					<LastLocationProvider>
// 						<div style={{color:'black'}}>INSIDE</div>
// 						{console.log('inside')}
// 						<ToastContainer />
// 					</LastLocationProvider>
// 				</BrowserRouter>
// 			</React.Suspense>
// 		</PersistGate>
//     </Provider>
//   );
// }

// export default App;
