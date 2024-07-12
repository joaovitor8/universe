// components/RandomPoints.js
"use client"

import React, { useState, useEffect } from 'react';

const RandomPoints = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // Gere pontos aleatórios (x, y) dentro da área da tela
    const generateRandomPoints = () => {
      const newPoints = [];
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        newPoints.push({ x, y });
      }
      setPoints(newPoints);
    };

    generateRandomPoints();

    // Atualize os pontos a cada 5 segundos (ou o intervalo desejado)
    const interval = setInterval(generateRandomPoints, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=''>
      {points.map((point, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: point.y,
            left: point.x,
            width: '1px',
            height: '1px',
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

export default RandomPoints;

// className="absolute inset-0 -z-10 animate-fade-in