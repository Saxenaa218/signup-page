import axios from "axios";
import { BASE_URL } from "../utils";

async function bluePrintApi() {
    try {
        return (await axios.get(BASE_URL + "/blueprint")).data;
    } catch (error) {
        return {
            error: "Unknown error"
        };
    }
}

async function formConfigurationApi() {
    try {
        return (await axios.get(BASE_URL + "/formConfiguration")).data;
    } catch (error) {
        return {
            error: "Unknown error"
        };
    }
}

async function formDataApi() {
    try {
        const result = (await axios.get(BASE_URL + "/formData")).data;
        return result;
    } catch (error) {
        return {
            error: "Unknown error"
        };
    }
}

export default { bluePrintApi, formConfigurationApi, formDataApi };
