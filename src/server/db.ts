import mysql from 'mysql2/promise';
import { dbConfig } from '../config/database';

const pool = mysql.createPool(dbConfig);

export default pool;