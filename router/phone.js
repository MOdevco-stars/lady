const express = require('express');
const router = express.Router();
const { Phone } = require('../models/phone');


router.post('/new', async (req, res) => {
    const { phone } = req.body;


    const validat = await Phone.findOne({ phone })
    if (validat)
        return res.json({
            massage: "Bunday ma'lumot bor"
        })
    if (!phone)
        return res.status(400).json({
            status: false,
            massage: "Ma'lumot to'liq emas"
        })
    const data = await Phone.create({
        phone,
    })
    await data.save();
    res.status(201).json({
        status: true,
        massage: "Telefon qo'shildi"
    })
})


router.get('/get', async (req, res) => {
    const data = await Phone.find()
        .select({ __v: 0 })

    res.json({
        status: true,
        data
    })
})


module.exports = router