const user = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log(action.text);
      return [
        ...state,
        {
          name: action.name,
          age: action.age
        }
      ];
    default:
      return state;
  }
};

export default user;
