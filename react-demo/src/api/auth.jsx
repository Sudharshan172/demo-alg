import axios from "axios";

const API_URL = "https://demo-backend-gn7p.onrender.com/auth"; // Update this with your actual Render backend URL

export const registerUser = async (username, password) => {
    return axios.post(`${API_URL}/signup/`, { username, password });
};

export const loginUser = async (username, password) => {
    return axios.post(`${API_URL}/signin/`, { username, password });
};
