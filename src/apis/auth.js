import api from "./instance";

const loginUser = async (req) => {
  const response = await api.post("/login", req);
  return response.data;
};

export { loginUser };
