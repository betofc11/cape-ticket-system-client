export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ALL_SUCCESS':
      return { ...state, data: action.payload };
    case 'FETCH_ONE_SUCCESS':
      return { ...state, singleData: action.payload };
    case 'ERROR':
      return { ...state, error: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};