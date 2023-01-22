const reducer = (state, action) => {
  if (action.type === "WELCOME_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  }

  if (action.type === "ORGANIZING_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  }

  if (action.type === "GET_REGISTER") {
    return {
      ...state,
      register: action.payload,
    };
  }

  return state;
};

export default reducer;
