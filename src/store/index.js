import Vue from "vue";
import Vuex, { Store } from "vuex";
import Pathify, { make } from "vuex-pathify";

import { kyApi } from "../config/api";

Vue.use(Vuex);

const state = () => {
  return {
    posts: [],
    myPosts: [],
    params: {
      total: 0,
      currentPage: 1,
      limit: 10,
    },
  };
};

const getters = {
  ...make.getters(state),
  getMyPostById(state, postId) {
    const post = state.myPosts.find((p) => p.id === postId);
    return post;
  },
};

const mutations = {
  ...make.mutations(state),
};

const actions = {
  SET_TOTAL({ commit, state }, payload) {
    const newParams = { ...state.params, total: payload };
    commit("SET_PARAMS", newParams);
  },

  SET_PAGE({ commit, state }, payload) {
    const newParams = { ...state.params, currentPage: payload };
    commit("SET_PARAMS", newParams);
  },

  ADD_POST({ commit, state }, payload) {
    const listMyPostLength = state.myPosts.length;
    const newPostId = listMyPostLength + 1;
    const newPosts = [...state.myPosts, { id: newPostId, ...payload }];
    commit("SET_MY_POSTS", newPosts);
  },

  async SET_INITIAL_STATE({ dispatch, commit, state }, payload) {
    try {
      const response = await kyApi.get("posts", {
        searchParams: {
          _page: payload?.page ?? state.params.currentPage,
          _limit: payload?.limit ?? state.params.limit,
        },
      });

      const resTotal = response.headers.get("x-total-count");
      dispatch("SET_TOTAL", Number(resTotal));

      const result = await response.json();
      commit("SET_POSTS", result);
    } catch (error) {
      console.error(error);
    }
  },
};

export const store = new Store({
  plugins: [Pathify.plugin],
  state,
  getters,
  mutations,
  actions,
});