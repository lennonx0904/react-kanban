export const addNewCard = cardData => {
  return {
    type: "ADD_NEW_CARD",
    payload: cardData
  };
};

export const updateCardStatus = (cardIndex, prevStatus, nextStatus) => {
  return {
    type: "UPDATE_CARD_STATUS",
    payload: { cardIndex, prevStatus, nextStatus }
  };
};
