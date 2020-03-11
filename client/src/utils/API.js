import axios from "axios";

export default {
    login: function (data) {
        return axios.post("/api/login", data);
    },

    listAll: function (data) {
        return axios.post("/api/", data);
    }
};