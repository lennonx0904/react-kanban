export const showNewCard = boolean=>{
  return {
    type: "SHOW_NEW_CARD",
    payload: boolean
  };
}

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

export const deleteCard = (index, status) => {
  return {
    type: "DELETE_CARD",
    payload: { index, status }
  };
};


