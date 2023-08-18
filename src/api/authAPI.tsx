import axios from "axios";

const frontendConnect = "http://localhost:2000/api";

export const registerAPI = async (data: any) => {
  try {
    const config = {
      "content-type": "multipart/formdata",
    };
    return await axios
      .post(`${frontendConnect}/register`, data, config)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const signinAPI = async (data: any) => {
  try {
    return await axios
      .post(`${frontendConnect}/sign-in`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
