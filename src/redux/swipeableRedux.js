export const getSwipeableArrayFromState = ({ swipeable }) => swipeable;

// action name creator
const reducerName = 'swipeable';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_ARRAY = createActionName('CHANGE_ARRAY');

export const createAction_changeArray = payload => ({ payload, type: CHANGE_ARRAY });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_ARRAY:
      statePart = action.payload;
      return statePart;
    default:
      return statePart;
  }
}
