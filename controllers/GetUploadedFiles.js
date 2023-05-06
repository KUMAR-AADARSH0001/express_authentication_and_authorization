const GetURlofImage = (req, res) => {
  const filename = req.params.filename;
  const maindir = process.cwd();
  res.sendFile(`${maindir}/uploads/${filename}`);
};

module.exports = { GetURlofImage };

// wrrape with createserver()
