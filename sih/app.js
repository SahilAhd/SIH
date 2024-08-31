import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import Profile from './schema.js'; 

const app = express();
const PORT = process.env.PORT || 5500;
app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index (3).html')); 
  });

app.get('/login',(req,res) => {
   res.sendFile(path.join(__dirname,'Profile.html' ))
})

async function database() {
  try {
      await mongoose.connect('mongodb://localhost:27017/LecturaX', {
          
      });
      console.log('Mongodb connected successfully');
  } catch (error) {
      console.log('Mongodb connection error', error);
  }
}
database();

//for data collection
app.post('/profile-update', async (req, res) => {
  try {
      const FormData = req.body;
      const result = await Profile.create(FormData);
      res.status(201).json(result);
  } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
