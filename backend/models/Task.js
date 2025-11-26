const mongoose = require('mongoose');
const TaskSchema = mongoose.Schema( 
    {    title: {type: String,required: [true, 'Please add a title'],    },  
         description: { type: String,    },    completed: {      type: Boolean,      default: false,    },  },  {    timestamps: true,  });module.exports = mongoose.model('Task', TaskSchema);