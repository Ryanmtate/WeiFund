import store from 'store';
import moment from 'moment';

export function Save(State){
  const lastSaved = moment().unix();
  const savedState = {
    ...State,
    LocalStore : {
      lastSaved : lastSaved
    }
  };

  store.set('state', savedState);

  return {
    type : 'UPDATE_LOCAL_STORE',
    lastSaved : lastSaved
  }
}

export function Get(){
  let State = store.get('state');

  return {
    type : 'GET_LOCAL_STORE',
    state : State
  }
}
