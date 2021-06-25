/* selectors */
export const getPromo = ({ promo }) => promo;
export const getDeals = ({ deals }) => deals;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
