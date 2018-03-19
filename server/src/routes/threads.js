const express = require('express');
const router = express.Router();

/* GET threads listing. */
router.get('/', (req, res) => {

  res.json({
    data: [
      {
        title: 'El sistema de matricula esta dañado',
      },
      {
        title: 'El problema de transporte en Panama',
      },
    ],
});
});
module.exports = router;
