import axios from "axios";

export default {
    login: function (data) {
        return axios.post("/api/login", data);
    },

    signup: function (data) {
        return axios.post("/api/user", data);
    },

    listBy: function (data) {
        return axios.get("/api/listBy", data);
    },

    list: function (data) {
        return axios.get("/api/list", data);
    }
};