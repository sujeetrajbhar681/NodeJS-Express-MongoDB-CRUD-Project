const Student = require("../models/Student");

exports.getStudents = async (req,res) => {

  try {

    const students =
      await Student.find();

    res.json(students);

  } catch(error){

    res.status(500).json(error);

  }

};

exports.addStudent = async (req,res)=>{

  try{

    const student =
      new Student(req.body);

    const result =
      await student.save();

    res.json(result);

  }catch(error){

    res.status(500).json(error);

  }
};

exports.updateStudent =
async (req,res)=>{

  try{

    const result =
      await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
      );

    res.json(result);

  }catch(error){

    res.status(500).json(error);

  }

};

exports.deleteStudent =
async (req,res)=>{

  try{

    const result =
      await Student.findByIdAndDelete(
        req.params.id
      );

    res.json(result);

  }catch(error){

    res.status(500).json(error);

  }

};