import PlanResultStore from "./store/plan-result";
import SessionStore from "./store/session";
import AuthStore from "./store/auth";
import PreferenceStore from "./store/preference";
import HomeStore from "./store/home";
import PlaceDetailStore from "./store/place-detail"
import ProfileStore from "./store/profile"
import TravelPlanStore from "./store/travel-plan"
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    planResult: PlanResultStore,
    session: SessionStore,
    auth: AuthStore,
    preference: PreferenceStore,
    home: HomeStore,
    placeDetail: PlaceDetailStore,
    profileStore: ProfileStore,
    travelPlanStore: TravelPlanStore
  }
});

export default store;