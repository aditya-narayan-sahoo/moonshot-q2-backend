const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";

exports.shareChart = (req, res) => {
  const { dateRange, filters } = req.body;

  if (!dateRange || !filters) {
    return res
      .status(400)
      .json({ message: "Date range and filters are required" });
  }

  const chartToken = jwt.sign({ dateRange, filters }, SECRET_KEY, {
    expiresIn: "7d",
  });

  const sharableURL = `${req.protocol}://${req.get(
    "host"
  )}/api/charts/access/${chartToken}`;
  res.status(200).json({ sharableURL });
};

exports.accessChart = (req, res) => {
  const { token } = req.params;

  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "You need to log in to view this chart." });
  }

  try {
    const chartData = jwt.verify(token, SECRET_KEY);
    res.status(200).json({ chartData });
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired chart link" });
  }
};
