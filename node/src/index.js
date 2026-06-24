const express = require('express');
const { PORT } = require('./config/server');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
