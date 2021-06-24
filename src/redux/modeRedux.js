/* selectors*/
export const getMode = ({ mode }) => mode;

// action name creator
const reducerName = 'modeReducer';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE_MODE = createActionName('CHANGE_MODE');

// action creators
export const createActionChangeMode = payload => ({
  payload: { tablet: 'tablet', mobile: 'mobile', desktop: 'desktop' },
  type: CHANGE_MODE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_MODE:
      if (window.innerWidth < 768) {
        return action.payload.mobile;
      } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        return action.payload.tablet;
      } else if (window.innerWidth >= 992) {
        return action.payload.desktop;
      }
      break;
    default:
      return statePart;
  }
}
