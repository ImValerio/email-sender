const express = require('express');
require('dotenv').config();

const sendEmail = require('./emailConfig')

const app = express();

app.get('/send-email/:recipient', async (req, res) => {
    try {
        const { recipient } = req.params;
        await sendEmail(recipient);
        res.status(200).json({ msg: 'Email sent' })

    } catch (err) {

        res.status(400).json({ error: err })
    }
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, console.log(`Listening on port ${PORT}`))