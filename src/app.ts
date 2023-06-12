import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';


const port = process.env.PORT || 3000

const app = express();

app.use(express.json()); // Add this line to parse JSON request bodies

app.post('/public', (req: Request, res: Response) => {
  const fileName = req.body.filePath; // Get the file name from the request body
  const fileData = req.body.fileData; // Get the file data from the request body
console.log('directoryPath', fileName);
  // Specify the file path
  const filePath = path.join(__dirname, 'public', fileName);
  const directoryPath = path.dirname(filePath);

  // Create the directory if it doesn't exist
  fs.mkdirSync(directoryPath, { recursive: true });

  // Write the file to the specified path
  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      res.status(500).send('An error occurred while writing the file.');
    } else {
      console.log(`File "${fileName}" written successfully.`);
      res.status(200).send(`File "${fileName}" written successfully.`);
    }
  });
});


app.get('/directory-contents/:dirname', (req, res) => {
    const { dirname } = req.params;
  
    const result:any = [];
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
          const fileData = fs.readFileSync(filePath, 'utf8');

          result.push({ filename: file, 
        //    content: fileData 
        });
        }
      });
    }
  
    res.json(result);
  });


app.listen(port, () => {
  console.log('Server is running on port 3000');
});
