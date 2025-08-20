import { query } from './model/db_connection.ts';
import express from 'express'; 

const app = express();
app.use(express.json());

query('SELECT NOW()', [])
  .then(res => console.log(res.rows))
  .catch(err => console.error('Error executing query', err.stack));