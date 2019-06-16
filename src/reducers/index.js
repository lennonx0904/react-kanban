import { combineReducers } from "redux";

const initState = {
  todo: [
    { title: "issue 1", status: "todo" },
    { title: "issue 2", status: "todo" },
    { title: "issue 3", status: "todo" },
    { title: "issue 4", status: "todo" }
  ],
  doing: [],
  completed: [],
  qa: [],
  closed: [],
  backlog: []
};

const CardsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_NEW_CARD":
      return { ...state, backlog: [...state.backlog, action.payload] };
    case "UPDATE_CARD_STATUS": {
      const { cardIndex, prevStatus, nextStatus } = action.payload;
      const card = state[prevStatus][cardIndex];
      card.status = nextStatus;
      state[prevStatus].splice(cardIndex, 1);
      state[nextStatus].push(card);
      return { ...state };
    }
    case "DELETE_CARD": {
      const { index, status } = action.payload;
      state[status].splice(index, 1);
      return { ...state };
    }
    default:
      return state;
  }
};

const showNewCardReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_NEW_CARD":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  cards: CardsReducer,
  showNewCard: showNewCardReducer
});
