// src/components/EquipmentPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEquipmentById } from '../http/equipmentAPI';
import { getExercisesByEquipmentId } from '../http/exercisesAPI';

function EquipmentPage() {
  const { id } = useParams();
  const [equipmentData, setEquipmentData] = useState(null);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // Получение данных о тренажёре
    getEquipmentById(id)
      .then(response => setEquipmentData(response.data))
      .catch(error => console.error(error));

    // Получение упражнений для тренажёра
    getExercisesByEquipmentId(id)
      .then(response => setExercises(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!equipmentData) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>{equipmentData.name}</h1>
      <p>{equipmentData.description}</p>
      <h2>Упражнения:</h2>
      <ul>
        {exercises.map(ex => (
          <li key={ex.id}>{ex.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EquipmentPage;




