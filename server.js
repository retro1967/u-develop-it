const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/database');
function log(placeholder) { console.log(placeholder) };

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes file
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

//For route not found
app.use((req, res) => {
    res.status(404).end();
});

db.on('open', () => {
    app.listen(PORT, () => {
        log(`Server running on port ${PORT}`);
    });
});
