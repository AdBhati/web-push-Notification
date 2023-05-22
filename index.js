const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json())

const publicVapidKey = 'BNMtiGrL7c_2HWuuPeDhirmzKf-FtnDXVSAVtmPc73JGybnJuDWAf2tF3VwF_AD-FXq3Y7XjibQ9vRg-wVaJz4M';
const privateVapidKey = 'gHF3JFAGaVLyfUoSmbsBsl3NzXNKtnKQxeHkoT-2y2I';

webpush.setVapidDetails('mailto:dbhati1021@gmail.com', publicVapidKey, privateVapidKey)

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    console.log("Subscription", subscription)
    console.log("Hello from jaipur")
    res.status(201).json({});

    const payload = JSON.stringify({ title: 'PUSH TEST' })

    webpush.sendNotification(subscription, payload).catch(err => console.error(err))
})


// app.post('/create', (req, res) => {
//     const create = req.body;
//     res.status(201).json({ message: "Application Created!!" })
// })

const port = 5500;

app.listen(port, () => console.log(`server is running on ${port} `))
