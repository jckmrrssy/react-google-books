import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const MAX = "&maxResults=10";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + MAX);
    }
};