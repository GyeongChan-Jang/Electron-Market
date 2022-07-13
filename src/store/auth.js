import axios from "axios";
const { VITE_API_KEY, VITE_USERNAME } = import.meta.env;

const END_POINT =
  "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth";

const headers = {
  "content-type": "application/json",
  apikey: VITE_API_KEY,
  username: VITE_USERNAME,
};

export default {
  namespaced: true,
  state() {
    return {
      user: {},
      token: null,
      logined: null,

      img: "",
    };
  },
  mutations: {
    setUser(state, payload) {
      console.log("payload122: ", payload);
      state.user = payload.user;
      state.token = payload.token;
      state.logined = payload.logined;
      state.img = payload.img;
    },
  },
  getters: {
    userId(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
  },
  actions: {
    async login(context, payload) {
      const { email, password } = payload;
      const response = await axios({
        url: `${END_POINT}/login`,
        method: "POST",
        headers: {
          ...headers,
        },
        data: {
          email,
          password,
        },
      }).catch((error) => {
        console.log("Error: ", error.message);
        alert(error.response.data);
      });

      window.localStorage.setItem("token", response.data.accessToken);
      window.localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log("response: ", response);
      alert(response);

      context.commit("setUser", {
        user: response.data.user,
        token: response.data.accessToken,

        img: response.data.user.profileImg,
      });
    },
    async signup(context, payload) {
      // const profileImg = JSON.parse(
      //   window.localStorage.getItem("user")
      // ).profileImg;
      // console.log("pi: ", profileImg);
      const { email, password, displayName, profileImgBase64 } = payload;
      const response = await axios({
        url: `${END_POINT}/signup`,
        method: "POST",
        headers: {
          ...headers,
        },
        data: {
          email,
          password,
          displayName,
          profileImgBase64,
        },
      }).catch((error) => {
        console.log("Error: ", error.message);
        alert(error.response.data);
      });

      alert(response);
      console.log("response: ", response);
      context.commit("setUser", {
        user: response.data.user,
        token: response.data.accessToken,

        img: response.data.user.profileImg,
      });
    },
    async logOut() {
      const accessToken = window.localStorage.getItem("token");
      const response = await axios({
        url: `${END_POINT}/logout`,
        method: "POST",
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
      }).catch((error) => {
        console.log("Error: ", error.message);
        // alert(error.response.data);
      });

      window.localStorage.clear();
    },
    async changeProfile(context, payload) {
      const accessToken = window.localStorage.getItem("token");

      const { displayName, oldPassword, newPassword, profileImgBase64 } =
        payload;

      const response = await axios({
        url: `${END_POINT}/user`,
        method: "POST",
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          displayName,
          oldPassword,
          newPassword,
          profileImgBase64,
        },
      }).catch((error) => {
        console.log("Error: ", error.message);
        alert(error.response.data);
      });
      console.log("response@@: ", response);
      window.localStorage.setItem("user", JSON.stringify(response.data.user));
      alert(response);
      context.commit("setUser", {
        img: response.data.user.profileImg,
      });
    },
    findLocalStorageUser(context, payload) {
      const accessToken = window.localStorage.getItem("token");
      console.log("findpayload: ", payload);
      if (accessToken == null) {
        context.commit("setUser", {
          logined: false,
        });
      } else {
        context.commit("setUser", {
          logined: true,
          // img: response.data.user.profileImg,
        });
      }
    },
    async authenticationCheck({ commit }) {
      const accessToken = window.localStorage.getItem("token");
      const { data } = await axios({
        url: `${END_POINT}/me`,
        method: "POST",
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
      });
      commit("setUser", { user: data });
    },
  },
};
