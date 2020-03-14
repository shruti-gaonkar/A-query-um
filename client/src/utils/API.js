import axios from "axios";

export default {
    login: function (data) {
        return axios.post("/api/login", data);
    },

    signup: function (data) {
        return axios.post("/api/user", data);
    },

    search: function (data) {
        return axios.get("/api/search/" + data);
    },

    list: function () {
        return axios.get("/api/list");
    }
};