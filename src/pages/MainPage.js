// src/components/MainPage.js
import React, { useEffect, useState } from 'react';
import { getAllEquipment } from '../http/equipmentAPI';
import { Link } from 'react-router-dom';

function MainPage() {
  const [equipmentList, setEquipmentList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllEquipment()
      .then(response => {
        console.log('Данные получены:', response.data);
        setEquipmentList(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
        setError('Не удалось загрузить список тренажёров.');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Все тренажёры</h1>
      <ul>
        {equipmentList.map(equipment => (
          <li key={equipment.id}>
            <Link to={`/equipment/${equipment.id}`}>{equipment.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;





