import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter basename="/goit-react-hw-07-phonebook">
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
