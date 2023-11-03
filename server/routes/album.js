import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { createAlbum, getAllAlbums, getAlbumByName } from '../controller/albumController.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname + '../../../public/uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExt = file.originalname.split('.').pop(); // Dateierweiterung extrahieren
    const newFilename = uniqueSuffix + '.' + fileExt; // Eindeutigen Dateinamen erstellen
    cb(null, newFilename);
  },
});

const upload = multer({ storage: storage });

router.post('/albums', upload.single('coverImage'), createAlbum);
router.get('/albums', getAllAlbums);
router.get('/albums/:albumName', getAlbumByName);

export default router;
