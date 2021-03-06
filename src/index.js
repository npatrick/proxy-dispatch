if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const PORT = process.env.PORT || 8080;
const app = require('./server');

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});