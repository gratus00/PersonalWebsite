const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Define the directories
const imagesDir = path.join(__dirname, 'public/images');
const thumbnailsDir = path.join(__dirname, 'public/thumbnails');

// Create thumbnails directory if it doesn't exist
if (!fs.existsSync(thumbnailsDir)) {
    fs.mkdirSync(thumbnailsDir);
}

// Read the images directory
fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    // Filter out non-JPG files
    const jpgFiles = files.filter(file => /\.jpg$/i.test(file));

    // Process each image file
    jpgFiles.forEach(async (file) => {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(thumbnailsDir, file);

        try {
            const metadata = await sharp(inputPath).metadata();
            const newWidth = Math.floor(metadata.width / 2);

            await sharp(inputPath)
                .resize({ width: newWidth })
                .toFile(outputPath);

            console.log('Thumbnail created for', file);
        } catch (err) {
            console.error('Error processing file', file, err);
        }
    });
});
