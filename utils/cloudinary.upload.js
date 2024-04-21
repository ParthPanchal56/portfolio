// bulkUpload.js
const fs = require("fs");
const path = require("path");
const cloudinary = require("./cloudinaryConfig");

// Function to upload a single file
const uploadFile = async (filePath, folderPath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folderPath,
    });
    console.log(`Uploaded ${filePath} to ${result.url}`);
  } catch (err) {
    console.error(`Failed to upload ${filePath}: ${err.message}`);
  }
};

// Recursive function to read directory contents
const uploadDirectory = async (dirPath, folderPath) => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (let entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const cloudinaryFolder = path
      .join(folderPath, entry.name)
      .replace(/\\/g, "/");

    if (entry.isDirectory()) {
      await uploadDirectory(fullPath, cloudinaryFolder); // Recurse into subdirectories
    } else {
      await uploadFile(fullPath, folderPath); // Upload files
    }
  }
};

// Start uploading from a target directory
const startUpload = async () => {
  const targetDirectory = "../../client/public/"; // Set your directory path
  await uploadDirectory(targetDirectory, "target-folder-on-cloudinary");
};

startUpload().catch(console.error);
