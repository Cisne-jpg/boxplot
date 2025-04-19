import express from 'express';
import studentsRoutes from './src/routes/students';

const app = express();
app.use(express.json());

app.use('/api/student', studentsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'));
