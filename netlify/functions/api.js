const moment = require("moment-timezone");
const ct = require("countries-and-timezones");
const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router=express.Router();

/* ---------------- Middleware ---------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------- Test Route ---------------- */
router.get("/test", (req, res) => {
  res.status(200).json({ Output: "Success" });
});

/* ---------------- From-To Date ---------------- */
router.post("/from-to-date", (req, res) => {
  const { fromDate, toDate } = req.body;

  if (!fromDate || !toDate) {
    return res.status(400).json({ error: "fromDate and toDate are required" });
  }

  const from = moment(fromDate);
  const to = moment(toDate);

  if (!from.isValid() || !to.isValid()) {
    return res.status(400).json({ error: "Invalid date format" });
  }

  if (from.isAfter(to)) {
    return res
      .status(400)
      .json({ error: "Start date must be before end date" });
  }

  const temp = from.clone();

  const years = to.diff(temp, "years");
  temp.add(years, "years");

  const months = to.diff(temp, "months");
  temp.add(months, "months");

  const days = to.diff(temp, "days");

  res.json({ years, months, days });
});

/* ---------------- Country Timezones ---------------- */
router.post("/country-timeZ", (req, res) => {
  const { country } = req.body;

  if (!country) {
    return res.status(400).json({ error: "country is required" });
  }

  const countryData = ct.getCountry(country);

  if (!countryData || !countryData.timezones) {
    return res.status(404).json({ error: "Country not found" });
  }

  res.json(countryData.timezones);
});

/* ---------------- Time by Timezone ---------------- */
router.post("/get-tz-time", (req, res) => {
  const { timezone } = req.body;

  if (!timezone) {
    return res.status(400).json({ error: "timezone is required" });
  }

  if (!moment.tz.zone(timezone)) {
    return res.status(400).json({ error: "Invalid timezone" });
  }

  const time = moment.tz(timezone);

  res.json({
    time: time.format("HH:mm:ss"),
    hour: time.hour(),
    minute: time.minute(),
    second: time.second(),
    millisecond: time.millisecond(),
    fullDate: time.format("DD:MM:YYYY"),
    year: time.year(),
    month: time.month() + 1,
    day: time.date(),
    weekday: time.format("dddd"),
  });
});

app.use("/api", router);

/* ---------------- Export Handler ---------------- */
module.exports.handler = serverless(app);
