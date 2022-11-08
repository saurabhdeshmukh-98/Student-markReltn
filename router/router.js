const xlsx_contro = require ('../controller/xlsxContro')
const router = require('express').Router()
router.post('/saveData',xlsx_contro.addData);

router.get('/fetch',xlsx_contro.createExcel);

module.exports= router