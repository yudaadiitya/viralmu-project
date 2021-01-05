const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/viralmudb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected to mongoose!")
});

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/category')
const videoRouter = require('./routes/video')
const commentRouter = require('./routes/comment')


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/video', videoRouter);
app.use('/api/comment', commentRouter);



module.exports = app;

