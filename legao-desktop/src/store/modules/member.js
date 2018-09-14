/**
 * 会员管理
 */
const member = {
  state: {
    queryVisible: false, //显示查询状态
    manageVisible: false //显示主页管理状态
  },
  mutations: {
    ["SET_QUERY_VISIBLE"](state, value) {
      state.queryVisible = value;
    },
    ["SET_MANAGE_VISIBLE"](state, value) {
      state.manageVisible = value;
    }
  },
  actions: {
    /**
     * 打开会员查询
     */
    ["MemberQueryOpen"]({ commit }) {
      commit("SET_QUERY_VISIBLE", true);
    },
    /**
     * 关闭会员查询状态
     */
    ["MemberQueryClose"]({ commit }) {
      commit("SET_QUERY_VISIBLE", false);
    },

    /**
     * 打开个人主页
     */
    ["MemberManageOpen"]({ commit }) {
      commit("SET_MANAGE_VISIBLE", true);
    },
    ["MemberManageClose"]({ commit }) {
      commit("SET_MANAGE_VISIBLE", false);
    }
  }
};

export default member;