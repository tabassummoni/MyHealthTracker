import React from 'react';

function LogTable({ logs, onDelete }) {
  return (
    <table border="1" cellPadding="8" style={{ width: '100%', marginTop: '20px' }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Meal</th>
          <th>Exercise</th>
          <th>Mood</th>
          <th>Water (ml)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {logs.map(log => (
          <tr key={log._id}>
            <td>{new Date(log.date).toLocaleDateString()}</td>
            <td>{log.meal}</td>
            <td>{log.exercise}</td>
            <td>{log.mood}</td>
            <td>{log.water}</td>
            <td>
              <button onClick={() => onDelete(log._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LogTable;
