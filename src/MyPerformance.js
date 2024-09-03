import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

function MyPerformance() {
  const [marks, setMarks] = useState([]);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
   
    axios.get('http://localhost:5000/students/1/marks')
      .then(response => setMarks(response.data))
      .catch(error => console.error('Error fetching marks:', error));

    
    axios.get('http://localhost:5000/students/1/streams')
      .then(response => setStreams(response.data))
      .catch(error => console.error('Error fetching streams:', error));
  }, []);
  
  const marksData = {
    labels: marks.map(m => m.subject),
    datasets: [
      {
        label: 'Marks',
        data: marks.map(m => m.marks),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const streamsData = {
    labels: streams.map(s => s.stream),
    datasets: [
      {
        label: 'Subjects',
        data: streams.map(s => s.subjects.length),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mb-2" style={{fontFamily: "'Roboto', sans-serif"}}>
      <h2>My Performance</h2>
      <div className='mb-2'>
        <h3 >Subject-wise Marks</h3>
        <Pie data={marksData} />
      </div>
      <div>
        <h3>Study Streams & Subjects</h3>
        <Bar data={streamsData} />
      </div>
    </div>
  );
}

export default MyPerformance;
