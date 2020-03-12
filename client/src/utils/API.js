import axios from "axios";

export default {
    login: function (data) {
        return axios.post("/api/login", data);
    },

    list: function (data) {
        return axios.post("/api/list", data);
    }
};