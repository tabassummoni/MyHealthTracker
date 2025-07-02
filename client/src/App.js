import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogForm from './components/LogForm';
import LogTable from './components/LogTable';
import LogChart from './components/LogChart';
function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await axios.get('http://localhost:5000/api/logs');
      setLogs(res.data);
    };
    fetchLogs();
  }, []);

  const addLog = (log) => setLogs([log, ...logs]);
  const deleteLog = async (id) => {
    await axios.delete(`http://localhost:5000/api/logs/${id}`);
    setLogs(logs.filter(log => log._id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🩺 MyHealth Tracker</h1>
      <LogForm onAdd={addLog} />
      <LogChart logs={logs} />
      <LogTable logs={logs} onDelete={deleteLog} />
    </div>
  );
}

export default App;
