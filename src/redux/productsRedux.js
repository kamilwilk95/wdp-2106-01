/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

// action name creator
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_FAVOURITE = createActionName('SET_FAVOURITE');

// action creators
export const createAction_changeFavouriteValue = payload => ({
  payload,
  type: SET_FAVOURITE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_FAVOURITE:
      return action.payload;
      break;
    default:
      return statePart;
  }
}
