// src/AppRouter.js
import { Routes, Route } from 'react-router-dom';
import EquipmentPage from '../pages/EquipmentPage';
import MainPage from '../pages/MainPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/trainers/:id" element={<EquipmentPage />} />
      {/* Другие маршруты, если есть */}
    </Routes>
  );
}

export default AppRouter;
