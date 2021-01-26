import axios from "axios";

const API = {
    send : function(data) {
        return axios.post("/send", data);
    }
}

export default API;