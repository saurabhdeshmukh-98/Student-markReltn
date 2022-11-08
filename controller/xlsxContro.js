const Sequelize = require("sequelize");
const Student = require("../entity/students");
const Mark = require("../entity/marks");
const appConst = require("../constant");
const XLSX = require("xlsx");
const path = require("path");

const addData = async (req, res) => {
  try {
    const resp = await Student.create(req.body, {
      include: [
        {
          model: Mark,
        },
      ],
    });

    res.status(200).json({
      status: appConst.status.success,
      response: resp,
      message: "creating successfully..",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: "sorry it is not creating..",
    });
  }
};
const createExcel = async (req, res) => {
  try {
    const fileName = "FILE_NAME";
    const filePath = "./FILE_NAME.xlsx";

    let workbook = XLSX.utils.book_new();

    var dataForSheet = [{}];

    dataForSheet = await Student.findAll({
      include: {
        model: Mark,
      },
    });

    console.log(dataForSheet);

    const data = dataForSheet.map((user) => {
      return [user.name, user.Mark.marks1, user.Mark.marks2];
    });

    console.log(data);

    let sheetData = XLSX.utils.json_to_sheet(data);
    console.log("sheet data");
    console.log(sheetData);

    XLSX.utils.book_append_sheet(workbook, sheetData, "Sheet 1", fileName);

    XLSX.writeFile(workbook, path.resolve(filePath));
    res.status(200).json({
      Response: dataForSheet,
      message: "Successfully stored in excel file",
    });
  } catch (error) {
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: "error",
    });
  }
};

module.exports = {
  addData,
  createExcel
};
