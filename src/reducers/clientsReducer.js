const INITIAL_STATE = [
    {
        name: 'Иван2',
        surname: 'Иванов',
        age: 25,
        fathername: 'Иванович',
        phonenumber: '+7-900-123-45-67',
        cardnumber: 100500,
        naruki: 0,
        isBlocked: false,
      },
      {
        name: 'Сергей',
        surname: 'Сидоров',
        age: 45,
        isBlocked: true,
      },
      {
        name: 'Измаил',
        surname: 'Игнатов',
        age: 50,
        isBlocked: false,
      },
];

export const clientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "addClient":
     return [...state, action.payload];
    default:
      return state
  }
};