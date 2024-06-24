export const state = () => ({
  user: {},
  loggedIn: true,
  token: null,
  navShow: false,
  pageTitle: "Home",
});

export const getters = {
  getUser(state) {
    return state.user;
  },
};

export const mutations = {
  setUser(state, userD) {
    state.user = { ...state.user, ...userD };
  },
  setValue(state, { key, val }) {
    state[key] = val ? val : state[key];
  },
  clear(state) {
    state.loggedIn = false;

    // clear state
    Object.keys(state).forEach((key) => {
      if (Array.isArray(state[key])) {
        state[key] = [];
      } else {
        state[key] = false;
      }
    });

    localStorage.removeItem(process.env.APP_DB);
    localStorage.clear();
  },
};

export const actions = {
  async logout({ commit }) {
    // commit("staff/clear", null, { root: true });
    // commit("admin/clear", null, { root: true });
    commit("clear");
  },
};
