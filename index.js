const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()); 

// GET API with query and path parameters
app.get('/api/data/:id', (req, res) => {
  const pathParam = req.params.id;
  const queryParam = req.query.value;

  res.json({
    title:"Here is the json response",
    pathParam: pathParam,
    queryParam: queryParam,
    details: "Assigment2, Step 2 completed"
  });
});

// POST API accepting JSON data
app.post('/api/data', (req, res) => {
  const inputData = req.body;
  res.json([inputData]);
});

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});

