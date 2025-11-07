import api from './api';

export const uploadMeal = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  
  const response = await api.post('/meal/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
};

export const getMeals = async (date) => {
  const response = await api.get(`/meal/logs${date ? `?date=${date}` : ''}`);
  return response.data;
};
export const getTodayStats = async () => {
  const response = await api.get('/meal/stats/today');
  return response.data;
};


