const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://neerajgartia21:21102002n@N@cluster0.qtcrp.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => {
    console.log('Mongoose connected to ' + 'mongodb+srv://neerajgartia21:21102002n@N@cluster0.qtcrp.mongodb.net/?retryWrites=true&w=majority');
}).catch((err) => {
    console.log('Mongoose connection error: ' + err);
});

const db = mongoose.connection;

db.on('error', () => {
    console.log('Error connecting to Database');
});

db.once('open', () => {
    console.log('Connected to Database');
});
