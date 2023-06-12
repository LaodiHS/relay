"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var path_1 = require("path");
var multer_1 = require("multer");
var port = process.env.PORT || 3001;
var app = express_1["default"]();
var upload = multer_1["default"]();
app.use(express_1["default"].json()); // Add this line to parse JSON request bodies
app.post("/public", upload.single("file"), function (req, res) {
    var fileName = req.body.fileName; // Get the file name from the request body
    var fileData = req.body.file; // Get the file data from the request body
    var filePath = path_1["default"].join(__dirname, "public", fileName);
    // Create a writable stream to write the file
    var writeStream = fs_1["default"].createWriteStream(filePath);
    writeStream.on("finish", function () {
        console.log("File \"" + fileName + "\" written successfully.");
        res.status(200).send("File \"" + fileName + "\" written successfully.");
    });
    writeStream.on("error", function (err) {
        console.error("Error writing file:", err);
        res.status(500).send("An error occurred while writing the file.");
    });
    // Write the file data to the writable stream
    if (fileData) {
        writeStream.write(fileData, "utf8");
    }
    // Pipe the file buffer into the writable stream
    if (req.file && req.file.buffer) {
        writeStream.write(req.file.buffer);
    }
    // End the writable stream
    writeStream.end();
});
app.get('/directory-contents/:dirname', function (req, res) {
    var dirname = req.params.dirname;
    var result = [];
    var stack = [dirname];
    var _loop_1 = function () {
        var currentDir = stack.pop();
        var files = fs_1["default"].readdirSync(currentDir);
        files.forEach(function (file) {
            var filePath = path_1["default"].join(currentDir, file);
            var stat = fs_1["default"].statSync(filePath);
            if (stat.isDirectory()) {
                stack.push(filePath);
            }
            else {
                var fileData = fs_1["default"].readFileSync(filePath, 'utf8');
                result.push({ filename: file
                });
            }
        });
    };
    while (stack.length) {
        _loop_1();
    }
    res.json(result);
});
app.listen(port, function () {
    console.log('Server is running on port 3001');
});
