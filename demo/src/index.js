import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { deviceTypeReducer, initReduxDeviceType, EXTRA_SMALL, SMALL, MEDIUM, LARGE } from '../../index.js';


const reducers = combineReducers({
  deviceType: deviceTypeReducer
});

const store = createStore(reducers);


initReduxDeviceType(store);


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = ({ deviceType }) => (
  <div style={styles}>
    { deviceType <= SMALL && <div>SMALL AND LESS </div> }
    { deviceType < EXTRA_SMALL && <div>SMALLER THAN EXTRA_SMALL</div>}
    { deviceType === MEDIUM && <div>MEDIUM</div>}
    { deviceType >= LARGE && <div>AT LEAST LARGE</div>}
  </div>
);

const AppWithDeviceType = connect(
  ({ deviceType }) => ({ deviceType }),
  null
)(App);

render(<Provider store={store} >
        <AppWithDeviceType />
      </Provider>
, document.getElementById('root'));
