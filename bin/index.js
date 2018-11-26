require('dotenv').config();

if(process.env.NODE_ENV === 'production' )
    require('./dist/index');
else 
    require('../src/index');