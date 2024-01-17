const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost:27017/surveydb');

const admin = new User({
  username: 'admin',
  password: 'securePwd123$'
});

admin.save()
  .then(() => {
    console.log('Admin user seeded');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error seeding admin user:', error);
  });