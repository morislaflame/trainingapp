// src/http/exercises.js
import axiosInstance from './index';

export const getExercisesByEquipmentId = (trainerId) => {
  return axiosInstance.get(`/trainers/${trainerId}/exercises`);
};

export const getExerciseById = (id) => {
  return axiosInstance.get(`/exercises/${id}`);
};

