import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// GET data
app.get('/api/messages', (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'public/data/data.json'), 'utf8');
        res.json(JSON.parse(data || '[]'));
    } catch (error) {
        res.json([]);
    }
});

// POST data
app.post('/api/messages', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'public/data/data.json');
        let existingData = [];

        try {
            existingData = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
        } catch (error) {
            existingData = [];
        }

        const newData = [...existingData, req.body];
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));

        res.json({ success: true });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ success: false, error: 'Failed to save message' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});