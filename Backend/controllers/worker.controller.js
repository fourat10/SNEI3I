const Worker = require('../models/worker.model');

// Create a new worker
const createWorker = async (req, res) => {
  try {
    const newWorker = new Worker(req.body);
    const savedWorker = await newWorker.save();
    res.status(201).json(savedWorker);
  } catch (error) {
    res.status(500).json({ message: `Error creating worker: ${error.message}` });
  }
};

// Get a single worker by ID
const getWorkerById = async (req, res) => {
  try {
    const { id } = req.params;
    const worker = await Worker.findById(id);
    if (!worker) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    res.status(200).json(worker);
  } catch (error) {
    res.status(500).json({ message: `Error fetching worker by ID: ${error.message}` });
  }
};

// Get all workers
const getAllWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ message: `Error fetching workers: ${error.message}` });
  }
};

// Update a worker by ID
const updateWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedWorker = await Worker.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedWorker) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    res.status(200).json(updatedWorker);
  } catch (error) {
    res.status(500).json({ message: `Error updating worker: ${error.message}` });
  }
};

// Delete a worker by ID
const deleteWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWorker = await Worker.findByIdAndDelete(id);
    if (!deletedWorker) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    res.status(200).json({ message: 'Worker deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: `Error deleting worker: ${error.message}` });
  }
};

module.exports = {
  createWorker,
  getWorkerById,
  getAllWorkers,
  updateWorker,
  deleteWorker,
};