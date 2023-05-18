// FINDING EXISTING FILE

const FindFile = (req, res) => {
  try {
    // GET THE FILENAME FROM THE REQUEST URL
    const filename = req.file.filename;
    res.status(200).json({ success: true, filename: filename });
  } catch (error) {
    res.status(404).send("File not found");
  }
};

module.exports = { FindFile };
