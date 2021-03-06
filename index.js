const throttle = require('lodash/fp/throttle');

const SET_DEVICE_TYPE = 'SET_DEVICE_TYPE';

export const IPHONE_RETINA = 0;
export const EXTRA_SMALL = 1;
export const SMALL = 2;
export const MEDIUM = 3;
export const LARGE = 4;

export function initReduxDeviceType({ dispatch }, customWidths = {}) {
  if (typeof window !== 'object') return;

  let lastDeviceType = null;

  const setDeviceType = () => {
    let deviceType = IPHONE_RETINA;
    if (window.innerWidth >= (customWidths.large || 1200)) deviceType = LARGE;
    else if (window.innerWidth >= (customWidths.medium || 992)) deviceType = MEDIUM;
    else if (window.innerWidth >= (customWidths.small || 768)) deviceType = SMALL;
    else if (window.innerWidth >= (customWidths.extraSmall || 480)) deviceType = EXTRA_SMALL;

    if (lastDeviceType === deviceType) return;
    lastDeviceType = deviceType;
    dispatch({ type: SET_DEVICE_TYPE, deviceType });
  };

  setDeviceType(); //initial value
  window.onresize = throttle(100)(setDeviceType);
}

export const deviceTypeReducer = (state = null, action) => {
  switch (action.type) {
    case SET_DEVICE_TYPE:
      return action.deviceType;
    default:
      return state;
  }
};
