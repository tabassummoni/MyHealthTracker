const express = require('express');
const { getLogs, createLog, deleteLog } = require('../controllers/logController');
const router = express.Router();

router.get('/', getLogs);
router.post('/', createLog);
router.delete('/:id', deleteLog);

module.exports = router;
