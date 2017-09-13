const SET_DEVICE_TYPE = 'SET_DEVICE_TYPE';

export const IPHONE_RETINA = 0;
export const EXTRA_SMALL = 1;
export const SMALL = 2;
export const MEDIUM = 3;
export const LARGE = 4;

export function initReduxDeviceType({ dispatch }, customWidths = {}) {

  const setDeviceType = () => {
    let deviceType = IPHONE_RETINA;
    if (window.innerWidth >= 1200) deviceType = LARGE;
    else if (window.innerWidth >= 992) deviceType = MEDIUM;
    else if (window.innerWidth >= 768) deviceType = SMALL;
    else if (window.innerWidth >= 480) deviceType = EXTRA_SMALL;

    dispatch({ type: SET_DEVICE_TYPE, deviceType });
  };

  setDeviceType(); //initial value
  window.onresize = setDeviceType;
}

export const deviceTypeReducer = (state = null, action) => {
  switch (action.type) {
    case SET_DEVICE_TYPE:
      return action.deviceType
    default:
      return state;
  }
};