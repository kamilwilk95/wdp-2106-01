/* selectors */
export const getAll = ({ gallery }) => gallery;

// action name creator
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_ACTIVE = createActionName('SET_ACTIVE');

// action creators
export const createAction_setActive = (id, payload, category) => ({
  payload,
  id,
  category,
  type: SET_ACTIVE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_ACTIVE: {
      const categoryIndex = statePart.findIndex(
        element => element.sectionName == action.category
      );
      const newArray = [...statePart];
      const elementIndex = newArray[categoryIndex].advImgs.findIndex(
        element => element.id == action.id
      );
      newArray[categoryIndex] = {
        ...newArray[categoryIndex],
        advImgs: [...newArray[categoryIndex].advImgs],
      };
      for (let element of newArray[categoryIndex].advImgs) {
        element.active = false;
      }
      newArray[categoryIndex].advImgs[elementIndex] = {
        ...newArray[categoryIndex].advImgs[elementIndex],
        active: action.payload,
      };
      return newArray;
    }
    default:
      return statePart;
  }
}
