import api from "./apiConfig";

export const getCharacters = async () => {
  try {
    const response = await api.get("/characters");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await api.get(`/characters/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCharacter = async (character) => {
  try {
    const response = await api.post("/characters", character);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCharacter = async (id, character) => {
  try {
    const response = await api.put(`/characters/${id}`, character);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCharacter = async (id) => {
  try {
    const response = await api.delete(`/characters/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
