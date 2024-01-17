const express = require('express');
const cors = require('cors');

const { dotenv } = require('./constants');
const { PORT, DB_DIALECT } = dotenv;

const app = express();

app.use(express.json());
app.use(cors());

const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`The server is running at http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(`Error: ${error?.message || "Something went wrong"}`);
    }
}

appStart();
