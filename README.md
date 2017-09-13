# redux-device-type
A reducer to keep track of your current device size

## install

```
npm install --save redux-device-type
```

## usage

first add the `deviceTypeReducer` to your reducer list

```javascript
import { deviceTypeReducer } from 'redux-device-type';

const reducers = combineReducers({
  ...otherReducers,
  deviceType: deviceTypeReducer
});
```

next you need to initialize the redux-device-type by passing your redux store into the `initReduxDeviceType` method

```javascript
import { initReduxDeviceType } from 'redux-device-type';

const store = createStore(reducers);

initReduxDeviceType(store);
```

now you can access the device type via the deviceType key from the store. This way you can build logic for rendering certain components according to the width of the device.

```javascript
import { EXTRA_SMALL, SMALL, MEDIUM, LARGE } from 'redux-device-type';

const Component = ({ deviceType }) =>
  <div>
    { deviceType <= SMALL && <div>SMALL AND LESS </div> }
    { deviceType < EXTRA_SMALL && <div>SMALLER THAN EXTRA_SMALL</div> }
    { deviceType === MEDIUM && <div>MEDIUM</div> }
    { deviceType >= LARGE && <div>AT LEAST LARGE</div> }
  </div>;

const ComponentWithDeviceType = connect(
  ({ deviceType }) => ({ deviceType }),
  null
)(Component);
```
