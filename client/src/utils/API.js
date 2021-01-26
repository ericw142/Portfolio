import axios from "axios";

const API = {
    send : function(data) {
        return axios.post("/api/send", data);
    }
}

export default API;