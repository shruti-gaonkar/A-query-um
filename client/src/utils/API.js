import axios from "axios";

export default {
    login: function (data) {
        return axios.post("/api/user/login", data);
    },

    logout: function () {
        return axios.get("/api/user/logout");
    },

    signup: function (data) {
        return axios.post("/api/user", data);
    },

    isAuthenticated: function () {
        return axios.get("/api/user/isAuthenticated");
    },

    search: function (data) {
        return axios.get("/api/search/" + data);
    },

    list: function () {
        return axios.get("/api/list");
    },

    searchById: function (data) {
        return axios.get("/api/searchById/" + data);
    },

    scrape: function (data) {
        return axios.get("/api/scrape");
    },

    createFish: function (data) {
        return axios.post("/api/create", data);
    },

    saveAqueryum: function (data) {
        return axios.post("/api/aqueryum/save", data);
    },

    listAqueryum: function () {
        return axios.get("/api/aqueryum/list");
    },

    deleteAqueryum: function (data) {
        return axios.delete("/api/aqueryum/delete/" + data['id']);
    },

    updateUser: function (data) {
        return axios.post('/api/user/changeUser', data);
    },

    updatepic: function (data) {
        console.log(data);
        return axios.post('/api/user/changepic', data);
    }
};