import {createPool} from 'mysql2/promise'
import {DB_USER,DB_PORT,DB_HOST,DB_DATABASE,DB_PASSWORD} from './config.js'
export const pool = createPool({
    host:"monorail.proxy.rlwy.net",
    user:"root",
    password:"ef5fDaHfgDEgebh3EFgeEDbDaea2-c2g",
    port:44517,
    database:"railway"
})