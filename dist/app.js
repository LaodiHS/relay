"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Add this line to parse JSON request bodies
app.post('/public', (req, res) => {
    const fileName = req.body.filePath; // Get the file name from the request body
    const fileData = req.body.fileData; // Get the file data from the request body
    console.log('directoryPath', fileName);
    // Specify the file path
    const filePath = path_1.default.join(__dirname, 'public', fileName);
    const directoryPath = path_1.default.dirname(filePath);
    // Create the directory if it doesn't exist
    fs_1.default.mkdirSync(directoryPath, { recursive: true });
    // Write the file to the specified path
    fs_1.default.writeFile(filePath, fileData, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.status(500).send('An error occurred while writing the file.');
        }
        else {
            console.log(`File "${fileName}" written successfully.`);
            res.status(200).send(`File "${fileName}" written successfully.`);
        }
    });
});
app.listen(port, () => {
    console.log('Server is running on port 3000');
});
