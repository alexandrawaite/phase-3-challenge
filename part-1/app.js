const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const daysOfWeek = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
}

app.get('/api/days/:day', (req, res) => {
  const day = req.params.day;

  if (!daysOfWeek[day]) {
    res.status(400).send(`'${day}' is not a valid day!`);
  } else {
    res.send(`${daysOfWeek[day]}`);
  }
});

app.post('/api/array/concat', (req, res) => {
  const array1 = req.body.array1;
  const array2 = req.body.array2;

  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    res.status(400).send({"error": "Input data should be of type Array."});
  } else {
    const concatArray = [...array1, ...array2];
    res.send({"result": `${concatArray}`});
  }
});

app.listen(3000, () => {
  console.log('The app is running on localhost:3000');
});