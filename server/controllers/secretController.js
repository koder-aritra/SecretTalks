const Secret = require("../models/secretModels");

exports.addSecret = async (req, res) => {
  const { secret } = req.body;
  const { email } = req.user;

  try {
    const existingSecret = await Secret.findOne({ email });

    if (existingSecret)
      return res.status(404).json({ message: "You can add only one secret." });

    await Secret.create({ secret, email });

    res.status(201).json({
      status: "success",
      message: "Secret added successfully.",
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.getSecrets = async (req, res) => {
  try {
    const secrets = await Secret.find();

    res.status(201).json({
      status: "success",
      length: secrets.length,
      data: secrets,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
