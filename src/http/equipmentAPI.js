// src/http/equipmentAPI.js
import axiosInstance from './index';

export const getEquipmentById = (id) => {
  return axiosInstance.get(`/trainers/${id}`);
};

export const getAllEquipment = () => {
  return axiosInstance.get('/trainers');
  
};

