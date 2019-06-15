export const addNewCard = card => {
  return {
    type: "ADD_NEW_CARD",
    payload: card
  };
};

export const updateCardStatus = (cardIndex, prevStatus, nextStatus) => {
  return {
    type: "UPDATE_CARD_STATUS",
    payload: { cardIndex, prevStatus, nextStatus }
  };
};
