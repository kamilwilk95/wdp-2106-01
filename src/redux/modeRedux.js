/* selectors*/
export const getMode = ({ mode }) => mode;
export const mobile = 'mobile';
export const tablet = 'tablet';
export const desktop = 'desktop';

// action name creator
const reducerName = 'modeReducer';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE_MODE = createActionName('CHANGE_MODE');

// action creators
export const createActionChangeMode = () => ({
  type: CHANGE_MODE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_MODE:
      if (window.innerWidth < 540) {
        return mobile;
      } else if (window.innerWidth >= 540 && window.innerWidth < 992) {
        return tablet;
      } else if (window.innerWidth >= 992) {
        return desktop;
      }
      break;
    default:
      if (window.innerWidth < 540) {
        return mobile;
      } else if (window.innerWidth >= 540 && window.innerWidth < 992) {
        return tablet;
      } else if (window.innerWidth >= 992) {
        return desktop;
      }
  }
}
