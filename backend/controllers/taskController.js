const Task=require('../models/Task');
const asyncHandler=require('express-async-handler');
const getTasks=asyncHandler(async(req,res)=>{

const tasks=awaitTask.find({
    
  });res.json(tasks);
});
const getTaskById=asyncHandler(async(req,res)=>{
  consttask=awaitTask.findById(req.params.id);if(task){
    res.json(task);
  }else{
    res.status(404);thrownewError('Task not found');
  }
});
const createTask=asyncHandler(async(req,res)=>{
  const{
    title,
    description
  }=req.body;if(!title){
    res.status(400);thrownewError('Please add a title');
  }consttask=newTask({
    title,
    description,
    
  });
  const createdTask=awaittask.save();
  res.status(201).json(createdTask);
});
const updateTask=asyncHandler(async(req,res)=>{
  const{
    title,
    description,
    completed
  }=req.body;consttask=awaitTask.findById(req.params.id);if(task){
    task.title=title||task.title;task.description=description||task.description;task.completed=completed!==undefined?completed: task.completed;constupdatedTask=awaittask.save();res.json(updatedTask);
  }else{
    res.status(404);thrownewError('Task not found');
  }
});
const deleteTask=asyncHandler(async(req,
res)=>{
  consttask=awaitTask.findById(req.params.id);if(task){
    awaitTask.deleteOne({
      _id: task._id
    });res.json({
      message: 'Task removed'
    });
  }else{
    res.status(404);thrownewError('Task not found');
  }
});
module.exports={
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  
};