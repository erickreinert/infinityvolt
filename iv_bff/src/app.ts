import express from 'express';
import router from './router';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));

app.use(express.json())
app.use("/api", router)
app.use(bodyParser.json({limit: '20mb'}))

export default app

// app.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`);
// });