import React, { useState } from 'react';
import axios from 'axios';

function LogForm({ onAdd }) {
  const [form, setForm] = useState({
    meal: '',
    exercise: '',
    mood: '',
    water: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/logs', form);
    onAdd(res.data);
    setForm({ meal: '', exercise: '', mood: '', water: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input name="meal" placeholder="Meal" value={form.meal} onChange={handleChange} required />
      <input name="exercise" placeholder="Exercise" value={form.exercise} onChange={handleChange} required />
      <input name="mood" placeholder="Mood" value={form.mood} onChange={handleChange} required />
      <input name="water" placeholder="Water (ml)" value={form.water} onChange={handleChange} type="number" required />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default LogForm;
