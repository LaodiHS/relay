"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// import multer from "multer";
const port = process.env.PORT || 3001;
const app = (0, express_1.default)();
// const upload = multer();
app.use(express_1.default.json()); // Add this line to parse JSON request bodies
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
const publicDirectoryPath = path_1.default.join(__dirname, "public");
// Default route for all other paths
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(publicDirectoryPath, "index.html"));
});
// app.post("/public", upload.single("file"), (req, res) => {
//   const fileName = req.body.fileName; // Get the file name from the request body
//   const fileData = req.body.file; // Get the file data from the request body
//   const filePath = path.join(__dirname, "public", fileName);
//   const directoryPath = path.dirname(filePath);
//   fs.mkdirSync(directoryPath, { recursive: true });
//   const writeStream = fs.createWriteStream(filePath);
//   writeStream.on("finish", () => {
//     console.log(`File "${fileName}" written successfully.`);
//     res.status(200).send(`File "${fileName}" written successfully.`);
//   });
//   writeStream.on("error", (err) => {
//     console.error("Error writing file:", err);
//     res.status(500).send("An error occurred while writing the file.");
//   });
//   // Write the file data to the writable stream
//   if (fileData) {
//     writeStream.write(fileData, "utf8");
//   }
//   // Pipe the file buffer into the writable stream
//   if (req.file && req.file.buffer) {
//     writeStream.write(req.file.buffer);
//   }
//   // End the writable stream
//   writeStream.end();
// });
app.get("/directory-contents/:dirname", (req, res) => {
    const { dirname } = req.params;
    const result = [];
    const stack = [dirname];
    while (stack.length) {
        const currentDir = stack.pop();
        const files = fs_1.default.readdirSync(currentDir);
        files.forEach((file) => {
            const filePath = path_1.default.join(currentDir, file);
            const stat = fs_1.default.statSync(filePath);
            if (stat.isDirectory()) {
                stack.push(filePath);
            }
            else {
                const fileData = fs_1.default.readFileSync(filePath, "utf8");
                result.push({
                    filename: file,
                    //    content: fileData
                });
            }
        });
    }
    res.json(result);
});
app.get("/");
app.listen(port, () => {
    console.log("Server is running on port 3001");
});
