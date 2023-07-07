import { useEffect, useState } from "react";
import api from "../api";

export function useFormConfig() {
    const [formConfig, setFormConfig] = useState([]);
    useEffect(() => {
        getFormConfig();
    }, []);

    const getFormConfig = async () => {
        try {
            const result = await api.formConfigurationApi();
            setFormConfig(result);
        } catch (err) {
            console.error(err);
        }
    };
    return formConfig;
}
