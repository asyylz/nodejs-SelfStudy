const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config({ path: './config.env' });
console.log(process.env.NODE_ENV);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});