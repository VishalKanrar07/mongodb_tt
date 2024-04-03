const mongoose = require("mongoose");

// const uri = "mongodb://127.0.0.1/students-api";
const uri = "mongodb+srv://beast1708:17081999@cluster0.sxoehgk.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri);

// we need to create a schema.
const teacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String
});

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String
});

// we need to now create a model.
const Teacher = new mongoose.model('Teacher', teacherSchema);
const Student = new mongoose.model('Student', studentSchema);

const data1 = {
    name: 't',
    email: 't@gmail.com',
    phone: 8,
    address: 'bengaluru',
}

const data2 = {
    name: 'r',
    email: 'r@gmail.com',
    phone: 9,
    address: 'bengaluru',
}

const main = async () => {
    try {
        //await Teacher.insertMany(data1);
        // await Student.insertMany(data2);

        //const data = await Teacher.find({ address: "bengaluru" });
        //const data2 = await Student.find({ address: "bengaluru" });

        const update = await Student.findOneAndUpdate(
            { name: "r", phone: 9 },
            { $set: { phone: 100 } }
        );
        const data2 = await Student.find({ name: "r" });

        //console.log(data);
        console.log(data2);
    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
}

main();