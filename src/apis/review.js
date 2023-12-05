import api from "./instance";

const getReviews = async () => {
  const response = await api.get("/codeReview?page=1&size=10");
  return response.data;
};

const createReview = async (req) => {
  const response = await api.post("/codeReview", req);
  return response.data;
};

export { getReviews, createReview };
