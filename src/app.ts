import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
// import multer from "multer";

const port = process.env.PORT || 3001;

const app = express();
// const upload = multer();
app.use(express.json()); // Add this line to parse JSON request bodies



const publicDirectoryPath = path.join(__dirname, "public");

// Default route for all other paths
app.get("/", (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, "index.html"));
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

  const result: any = [];
  const stack = [dirname];

  while (stack.length) {
    const currentDir: any = stack.pop();
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        stack.push(filePath);
      } else {
        const fileData = fs.readFileSync(filePath, "utf8");

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
