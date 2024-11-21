const path = require("path");
const fs = require("fs");
const csv = require("csv-parser");
const moment = require("moment");
const dataFilePath = path.join(__dirname, "../Sheet3.csv");

const parseCSVData = () => {
  return new Promise((resolve, reject) => {
    const data = [];
    fs.createReadStream(dataFilePath)
      .pipe(csv())
      .on("data", (row) => {
        // Converting day string to a date object
        row.day = moment(row.Day, "DD/MM/YYYY", true).isValid()
          ? moment(row.Day, "DD/MM/YYYY").startOf("day").toDate()
          : null;

        row.age = row.Age;
        row.gender = row.Gender;
        row.A = parseInt(row.A, 10);
        row.B = parseInt(row.B, 10);
        row.C = parseInt(row.C, 10);
        row.D = parseInt(row.D, 10);
        row.E = parseInt(row.E, 10);
        row.F = parseInt(row.F, 10);
        data.push(row);
      })
      .on("end", () => {
        resolve(data);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
};

const filterData = async (req, res) => {
  try {
    const { startDate, endDate, ageGroup, gender } = req.query;

    const data = await parseCSVData();

    const filteredData = data.filter((row) => {
      let dateInRange = true;
      let ageMatches = true;
      let genderMatches = true;

      if (startDate && endDate) {
        const rowDate = moment(row.day);
        dateInRange = rowDate.isBetween(
          moment(startDate),
          moment(endDate),
          null,
          "[]"
        );
      }

      if (ageGroup) {
        ageMatches = row.age === ageGroup;
      }
      if (gender) {
        genderMatches = row.gender.toLowerCase() === gender.toLowerCase();
      }
      return dateInRange && ageMatches && genderMatches;
    });

    res.status(200).json(filteredData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching data" });
  }
};

module.exports = {
  filterData,
};
