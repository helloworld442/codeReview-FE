import api from "./instance";

const getReviews = async () => {
  const response = await api.get("/codeReview?page=1&size=10");
  return response.data;
};

const getReview = async (req) => {
  const response = await api.get("/codeReview/" + req);
  return response.data;
};

const createReview = async (req) => {
  const response = await api.post("/codeReview", req);
  return response.data;
};

const updateReview = async ({ postId, req }) => {
  const response = await api.put("/codeReview/" + postId, req);
  return response.data;
};

const deleteReview = async (req) => {
  const response = await api.delete("/codeReview/" + req);
  return response.data;
};

const createHeart = async (req) => {
  const response = await api.post("/heart/codeReview/" + req);

  return response.data;
};

export {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
  createHeart,
};
