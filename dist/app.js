"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
});
app.post("/public", (req, res) => {
    const files = req.body.files; // Assuming you receive an array of files in the request body
    // Iterate over the files array
    for (const file of files) {
        const fileName = file.name; // Get the file name
        const fileData = file.data; // Get the file data (e.g., Buffer or base64 encoded string)
        const filePath = path_1.default.join(__dirname, "public", fileName); // Specify the file path
        // Write the file to the specified path
        fs_1.default.writeFile(filePath, fileData, (err) => {
            if (err) {
                console.error("Error writing file:", err);
            }
        });
    }
    res.status(200).send("Files written successfully.");
});
io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
    socket.on("chat message", (message) => {
        console.log("Received message:", message);
        // You can emit events to other clients or perform additional actions here
    });
});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
