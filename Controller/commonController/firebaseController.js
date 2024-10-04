const bucket = require('../../DB_Config/fireBaseConfig');


const UploadFile = async (req, res) => {
  console.log(req.file.originalname);
  
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
    return { message: 'File uploaded successfully', fileUrl };
  } catch (err) {
    console.error('Error uploading file:', err);
    if (err.code === 400) {
      console.error('Invalid JWT Signature error:', err);
      // Handle invalid JWT signature error specifically
      return { error: 'Invalid JWT signature' };
    } else {
      return { error: err.message };
    }
  }
};



const DownloadFile = async (req, res) => {
  try {
    const { fileName } = req.body; // Get the file name from the request parameters
    console.log(fileName);
    
    const file = bucket.file(fileName);

    // Create a read stream for the file
    const readStream = file.createReadStream();

    // Set the appropriate headers for download
    res.set({
      'Content-Disposition': `attachment; filename=${fileName}`,
      'Content-Type': 'application/octet-stream',
    });

    // Pipe the read stream to the response
    readStream.pipe(res);

    readStream.on('error', (err) => {
      res.status(500).json({ error: err.message });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const DeleteFile = async (req, res) => {
  try {
    const { fileName } = req.params; // Get the file name from the request parameters
    const file = bucket.file(fileName);

    // Delete the file
    await file.delete();

    return { message: 'File deleted successfully' };
  } catch (err) {
    return { error: err.message };
  }
};



const DeleteFileByBody = async (req, res) => {
  try {
    const { fileName } = req.body; // Get the file name from the request parameters
    const file = bucket.file(fileName);

    // Delete the file
    await file.delete();

    return { message: 'File deleted successfully' };
  } catch (err) {
    return { error: err.message };
  }
};


const UpdateFile = async (req, res) => {
  try {
    const { fileName } = req.body; // Get the file name from the request parameters
    console.log('Updating file:', fileName);


    
    const file = bucket.file(fileName);

    // Upload the new file data
    await file.save(req.file.buffer, {
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    // Make the file publicly accessible (optional)
    await file.makePublic();

    const fileUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
    return { message: 'File updated successfully', fileUrl };
  } catch (err) {
    console.error('Error updating file:', err);
    return { error: err.message };
  }
};

module.exports = { UploadFile, DownloadFile, DeleteFile ,UpdateFile,DeleteFileByBody};


