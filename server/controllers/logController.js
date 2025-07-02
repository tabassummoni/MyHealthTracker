const Log = require('../models/Log');

// GET all logs
const getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (err) {
    console.error('Error fetching logs:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// POST new log
const createLog = async (req, res) => {
  try {
    const newLog = new Log(req.body);
    await newLog.save();
    res.status(201).json(newLog);
  } catch (err) {
    console.error('Error creating log:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// DELETE log by ID
const deleteLog = async (req, res) => {
  try {
    await Log.findByIdAndDelete(req.params.id);
    res.json({ message: 'Log deleted' });
  } catch (err) {
    console.error('Error deleting log:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getLogs, createLog, deleteLog };
