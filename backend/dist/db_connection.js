import { Pool } from 'pg';
const pool = new Pool({
    user: 'postgres', // Cambia a tu nombre de usuario de PostgreSQL
    host: 'localhost',
    database: 'mi_base_de_datos', // Cambia a tu base de datos
    password: 'tu_password', // Cambia a tu contraseña
    port: 5432,
});
export const query = (text, params) => {
    return pool.query(text, params);
};
//# sourceMappingURL=db_connection.js.map