import express, { Request, Response } from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import path from "path";
import fs from "fs";
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port: number = 3000;

app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req: Request, res: Response) => {
  
      res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.post("/public", (req: Request, res: Response) => {
  const files = req.body.files; // Assuming you receive an array of files in the request body

  // Iterate over the files array
  for (const file of files) {
    const fileName = file.name; // Get the file name
    const fileData = file.data; // Get the file data (e.g., Buffer or base64 encoded string)

    const filePath = path.join(__dirname, "public", fileName); // Specify the file path

    // Write the file to the specified path
    fs.writeFile(filePath, fileData, (err) => {
      if (err) {
        console.error("Error writing file:", err);
      }
    });
  }

  res.status(200).send("Files written successfully.");
});



io.on("connection", (socket: Socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("chat message", (message: string) => {
    console.log("Received message:", message);
    // You can emit events to other clients or perform additional actions here
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
