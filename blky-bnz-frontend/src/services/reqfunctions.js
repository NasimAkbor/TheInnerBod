import api from "./apiConfig";

export const updateOrgan = async (organ, info) => {
  try {
    const response = await api.put(`/organs/${organ}`, info);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateFood = async (food, info) => {
  try {
    const response = await api.put(`/foods/${food}`, info);
    return response.data;
  } catch (error) {
    throw error;
  }
};
