const FindFile = (req, res) => {
  try {
    // GET THE FILENAME FROM THE REQUEST URL
    const filename = req.file.filename;
    console.log(filename);
    res.status(200).json({ success: true, filename: filename });
    console.log("object file name getting done..");
  } catch (error) {
    console.error(err);
    res.status(404).send("File not found");
  }
};

module.exports = { FindFile };
