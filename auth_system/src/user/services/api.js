import { axiosInstance } from "../../utils/axiosInstance";

export const loginApi = async (data) => {
  try {
    const response = await axiosInstance.post("token/", data);
    return response.data;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export const register = async (data) => {
  try {
    const response = await axiosInstance.post("register/", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const profileFetch = async (token) => {
  try {
    const response = await axiosInstance.get("user/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
