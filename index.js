const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Node.js API is running smoothly inside Docker!'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});