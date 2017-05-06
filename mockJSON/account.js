exports.createAccount = function (req, res, next) {
  res.set({"Content-Type": "application/json"});
  res.status(201).json({"error": "null"});
}
