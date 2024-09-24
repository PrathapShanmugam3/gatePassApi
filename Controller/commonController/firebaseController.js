const bucket = require('../../DB_Config/fireBaseConfig');

const UploadFile = async (req, res) => {
  try {
    const firebaseFileName = Date.now() + '-' + req.file.originalname;
    const file = bucket.file(firebaseFileName);

    // Upload the file
    await file.save(req.file.buffer, {
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    // Make the file publicly accessible
    await file.makePublic();

    const fileUrl = `https://storage.googleapis.com/${bucket.name}/${firebaseFileName}`;
    res.json({ message: 'File uploaded successfully', fileUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { UploadFile };
