import { combineReducers } from "redux";

const initState = {
  todo: [
    // { id: "1", title: "issue 1", status: "todo" },
    // { id: "2", title: "issue 2", status: "todo" },
    // { id: "3", title: "issue 3", status: "todo" },
    // { id: "4", title: "issue 4", status: "todo" }
  ],
  doing: [
    // { id: "5", title: "issue 5", status: "doing" },
    // { id: "6", title: "issue 6", status: "doing" },
    // { id: "7", title: "issue 7", status: "doing" },
    // { id: "8", title: "issue 8", status: "doing" }
  ],
  completed: [
    { id: "9", title: "issue 9", status: "completed" },
    { id: "10", title: "issue 10", status: "completed" },
    { id: "11", title: "issue 11", status: "completed" }
  ],
  qa: [
    { id: "12", title: "issue 12", status: "qa" },
    { id: "13", title: "issue 13", status: "qa" }
  ],
  closed: [
    { id: "14", title: "issue 14", status: "closed" },
    { id: "15", title: "issue 104", status: "closed" },
    { id: "16", title: "issue 9527", status: "closed" }
  ],
  backlog: [
    { id: "17", title: "issue 1111", status: "backlog" },
    { id: "18", title: "issue 104", status: "backlog" },
    { id: "19", title: "issue 9527", status: "backlog" },
    { id: "20", title: "issue 5278", status: "backlog" }
  ]
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

export default combineReducers({
  cards: CardsReducer
});
