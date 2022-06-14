import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

const PROTOCOL = "http";
const BASE_URL = "127.0.0.1";
const PORT = "8080";

export const useBackendStore = defineStore({
  id: "backendStore",
  state: () => ({
    isAuthenticated: false,
    isLogoutVisible: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async authenticate(username, password) {
      let result = axios
        .post(`${PROTOCOL}://${BASE_URL}:${PORT}/api/auth`, {
          username: username,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            this.isAuthenticated = true;

            localStorage.setItem("JWT", response.data.token);

            router.push("/");

            return true;
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            return false;
          }
        });

      return result;
    },
  },
});
