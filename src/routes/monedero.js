const { Router } = require('express');
const router = Router();
const responseFile = require('./../resources/response.json');


router.get('/:id', (req, res) => {
    const { id } = req.params;
    let monedero = {};

    for (let i = 0; i < responseFile.monederos.length; i++) {
        if (responseFile.monederos[i].id == id) {
            monedero = responseFile.monederos[i];
            break;
        }
    }
    res.status(200).json(monedero);
});

module.exports = router;