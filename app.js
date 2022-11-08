const express = require ('express')
const app = express();
const student= require ('./entity/students')
const mark=require('./entity/marks')
const sequelize = require ('./config/dataBase')
require ('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const XLSX = require('xlsx');
// var workbook = XLSX.readFile('Master.xlsx');
// var sheet_name_list = workbook.SheetNames;
// var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

const router = require ('./router/router')    
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
sequelize.sync({alter:true}).then(function() {
    console.log('connected to database')
  }).catch(function(err) {
    console.log(err)
  })
async function run(){
    try {
        await sequelize.authenticate()
        console.log('connected to the database')
        app.use('/',router)
        app.listen(process.env.port,()=>{
            console.log(`serveris running on port no:${process.env.port}`)
        })
    } catch (error) {
        console.log('server is not running at port 8000'+error)
    }
    }
run();