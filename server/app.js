const express = require('express');
const app = express();
app.use(express.json());
const userRouter = require('./router/userRouter');
const PORT = process.env.PORT ||5000;

require('./db/connection');

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = userRouter;
