require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
const blogRoutes = require('./routes/blogRoutes')
const tokenRoutes = require('./routes/tokenRoutes')
const commentRoutes = require('./routes/commentRoutes')
const db = require('./config/dbconnect')

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
      console.log("That is been correctly connected with frontend.")
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

db.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database at:', res.rows[0].now);

    app.use('/', authRoutes);
    app.use('/', blogRoutes);
    app.use('/', tokenRoutes);
    app.use('/', commentRoutes);

    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});

