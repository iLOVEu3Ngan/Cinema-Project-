import * as Types from "../constants/ActionTypes";

const stateDefault = {
  users: [],
  registerUser: [],
  account: [],
  updateUser: [],
};

const findIndex = (account, id) => {
    let result = -1;
    account.forEach((account,index) => {
      if(account.id === id) {
        result = index
      }
    });
    return result;
}


function reducerUsers(state = stateDefault, action) {
  var index = -1;
  var { id } = action;
  let newState = { ...state } ;
  switch (action.type) {
    case Types.REGISTER_USER: {
      newState.registerUser.push(action.user);
      return newState;
    }

    case Types.FETCH_DATA_USERS: {
      newState.users = action.users;
      return newState;
    }

    case Types.FETCH_DATA_ACCOUNT: {
      newState.account = action.account;
      return newState;
    }

    case Types.SAVE_ACCOUNT: {
      newState.account.push(action.account);
      return newState;
    }
    
    case Types.DELETE_ACCOUNT: {
      index = findIndex(state.account,id);
      state.account.splice(index,1);

      return newState;
    }
    case Types.ADD_USER: {
      newState.users.push(action.user);
      return newState;
    }

    case Types.DELETE_USER: {
      index = findIndex(newState.users,id);
      console.log(index);
      state.users.splice(index,1);

      return newState;
    }
    case Types.UPDATE_USER: {
      index = findIndex(newState.users,action.user.id);
      newState.users[index] = action.user;
      
      return newState;
    }

    case Types.UPDATE_ACCOUNT: {
      index = findIndex(newState.account,action.account.id);
      newState.account[index] = action.account;
      
      return newState;
    }

    default: {
      return state;
    }
  }
}

export default reducerUsers;