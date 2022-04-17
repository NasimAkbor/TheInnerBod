import api from "./apiConfig";


export const updateOrgan = async (id, info) => {
  try {
    const response = await api.put(`/organs/${id}`, info);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateFood = async (organ, info) => {
  try {
    const response = await api.put(`/foods/${organ}`, info);
    return response.data;
  } catch (error) {
    throw error;
  }
};
