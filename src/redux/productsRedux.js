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
export const SET_ADD_TO_COMPARE = createActionName('SET_ADD_TO_COMPARE');

// action creators
export const createAction_changeFavouriteValue = (id, payload) => ({
  payload,
  id,
  type: SET_FAVOURITE,
});

export const createAction_changeAddToCompareValue = (id, payload) => ({
  payload,
  id,
  type: SET_ADD_TO_COMPARE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_FAVOURITE: {
      const elementsIndex = statePart.findIndex(element => element.id === action.id);
      const newArray = [...statePart];
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        favourite: action.payload,
      };
      return newArray;
    }
    case SET_ADD_TO_COMPARE:
      {
        const elementsIndex = statePart.findIndex(element => element.id === action.id);
        const newArray = [...statePart];
        newArray[elementsIndex] = {
          ...newArray[elementsIndex],
          addToCompare: action.payload,
        };
        const e = newArray.filter(element => element.addToCompare === true);
        if (e.length <= 4) {
          return newArray;
        } else if (e.length >= 5) {
          return statePart;
        }
      }
      break;
    default:
      return statePart;
  }
}
