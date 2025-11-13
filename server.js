const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./backend/config/db');
const {errorHandler} = require('./backend/middleware/errorMiddleware');
const port = process.env.PORT || 5000;
const cors = require('cors');
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tareas', require('./backend/routes/tareasRoutes'));
app.use('/api/users', require('./backend/routes/usersRoutes'));

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`.yellow.bold));

