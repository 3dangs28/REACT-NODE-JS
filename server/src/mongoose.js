const mongoose =require('mongoose');

// TODO: Refactor

const mongoURL =process.env.NODE_ENV === 'test'
? 'mongodb://localhost:27017/REACT-NODE-JS-test'
: 'mongodb://localhost:27017/REACT-NODE-JS'

mongoose.connect(mongoURL);

module.exports =mongoose;

