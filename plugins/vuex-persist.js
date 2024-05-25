import VuexPersistence from "vuex-persist";

export default ({ store, $config: { APP_DB } }) => {
  new VuexPersistence({
    key: APP_DB,
    storage: window.localStorage,
  }).plugin(store);
};
