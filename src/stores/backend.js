import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import { useQuasar } from "quasar";

const $q = useQuasar();

const PROTOCOL = "http";
const BASE_URL = "127.0.0.1";
const PORT = "8080";

export const useBackendStore = defineStore({
  id: "backendStore",
  state: () => ({
    isAuthenticated: false,
    isLogoutVisible: false,
    isActionsDialogVisible: false,
    isTableLoading: false,
    clickedRow: {},
    actionDialogBarInfo: "",
    implants: [],
    countryCoordinates: {},
    nodes: {},
    layouts: {},
  }),
  getters: {
    getImplants: (state) => state.implants,
    getCountryCoordinates: (state) => state.countryCoordinates,
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
    async fetchImplants() {
      let jwtToken = localStorage.getItem("JWT");

      if (jwtToken === null) {
        return false;
      }

      this.isTableLoading = true;

      let result = axios({
        method: "get",
        url: `${PROTOCOL}://${BASE_URL}:${PORT}/api/web/implants`,
        headers: { Authorization: `Bearer ${jwtToken}` },
      })
        .then((response) => {
          this.isTableLoading = false;
          this.implants = response.data.implants;

          return true;
        })
        .catch((error) => {
          // Means that user's JWT token expired
          // Show user info that his JWT token is expired
          // Delete JWT token
          // Redirect to login page
          if (error.response.status === 401) {
            return false;
          }
        });

      return result;
    },
    async fetchCountryCoordinates(country) {
      let jwtToken = localStorage.getItem("JWT");

      if (jwtToken === null) {
        return false;
      }

      let result = axios({
        method: "get",
        url: `${PROTOCOL}://${BASE_URL}:${PORT}/api/web/coordinates/${country}`,
        headers: { Authorization: `Bearer ${jwtToken}` },
      })
        .then((response) => {
          console.log(response);
          this.countryCoordinates = response.data;

          return true;
        })
        .catch((error) => {
          // Means that user's JWT token expired
          // Show user info that his JWT token is expired
          // Delete JWT token
          // Redirect to login page
          if (error.response.status === 401) {
            return false;
          }
        });

      return result;
    },
    async ipInfoLookup(ip) {
      let result = axios({
        method: "get",
        url: `http://ip-api.com/json/${ip}`,
      })
        .then((response) => {
          console.log(response);
          return response.data.country;
        })
        .catch((error) => {
          console.log(error);
        });

      return result;
    },
    async populateNodes() {
      if (this.implants.length !== 0) {
        this.implants.forEach(async (implant, index) => {
          // Exit function if implant is on target
          // but info is missing, because get info is not yet send
          if (implant.external_ip_address === null) {
            return;
          }

          this.nodes[`node${index + 1}`] = {};

          let key = `node${index + 1}`;

          let country = await this.ipInfoLookup(implant.external_ip_address);

          let result = await this.fetchCountryCoordinates(country);

          if (!result) {
            $q.notify({
              message: "Your JWT expired. Redirecting...",
              color: "red",
              position: "top",
            });

            setTimeout(() => {
              localStorage.removeItem("JWT");
              this.isAuthenticated = false;
              router.push({ path: "/login", replace: true });
            }, 5000);
          }

          this.layouts["nodes"] = {
            [key]: {
              x: this.countryCoordinates.x,
              y: this.countryCoordinates.y,
            },
          };
        });
      }
    },
    async addTask(task) {
      let jwtToken = localStorage.getItem("JWT");

      if (jwtToken === null) {
        return false;
      }

      let reqBody = {
        implant_id: this.clickedRow.implant_id,
        task: task,
      };

      axios({
        method: "post",
        url: `${PROTOCOL}://${BASE_URL}:${PORT}/api/web/tasks`,
        headers: { Authorization: `Bearer ${jwtToken}` },
        data: reqBody,
      })
        .then((response) => {
          if (response.status === 200) {
            $q.notify({
              message:
                "Task send successfully. You can check status in tasks page.",
              color: "green",
              position: "top",
            });
          }
        })
        .catch((error) => {
          if (error.response.status >= 400) {
            $q.notify({
              message: "Something went wrong. Please try again later.",
              color: "red",
              position: "top",
            });
          }
        });
    },
  },
});
