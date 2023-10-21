const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const blog = {
        id: 1,
        title: 'My First Blog',
        description: 'This is my first blog'
    };

  res.send(blog);
});

const port = 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));