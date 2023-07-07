import { useEffect, useState } from "react";
import api from "../api";

export function useFormData() {
    const [formData, setFormData] = useState({});
    useEffect(() => {
        getFormData();
    }, []);

    const getFormData = async () => {
        try {
            const result = await api.formDataApi();
            setFormData(result);
        } catch (err) {
            console.error(err);
        }
    };
    return formData;
}
