import { createStore} from 'vuex';
import state from './state';
import * as getters from './getters';

import * as mutations from './mutations';
import * as actions from './actions';

const store = createStore({
  state,
  actions,
  mutations,
  getters,

})

export default store;