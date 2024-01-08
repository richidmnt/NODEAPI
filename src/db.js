import {createPool} from 'mysql2/promise'
import {DB_USER,DB_PORT,DB_HOST,DB_DATABASE,DB_PASSWORD} from './config.js'
export const pool = createPool({
    host:"monorail.proxy.rlwy.net",
    user:"root",
    password:"d4h2ABgG-6bFbb5hB2aA-4hcH-FD5b-F",
    port:49639,
    database:"railway"
})