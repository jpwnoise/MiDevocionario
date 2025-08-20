import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mi_devocionario',
  password: 'Wavnoi2017', 
  port: 5432,
});

export const query = (text: string, params: any[]) => {
  return pool.query(text, params);
};