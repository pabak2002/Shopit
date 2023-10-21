const cart = [];

const handleCart = (state = cart, action) => {
  switch (action.type) {
    case "ADDITEM":
      const productToAdd = action.payload; // Define product from action.payload
      const exist = state.find((x) => x.id === productToAdd.id); // Use productToAdd.id
      if (exist) {
        // Increase quantity
        return state.map((x) =>
          x.id === productToAdd.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...productToAdd,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const productToDelete = action.payload; // Define product from action.payload
      const exist1 = state.find((x) => x.id === productToDelete.id); // Use productToDelete.id
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === productToDelete.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default handleCart;
