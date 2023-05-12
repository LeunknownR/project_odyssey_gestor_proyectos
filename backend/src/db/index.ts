import mysql, { Connection } from "mysql2/promise";

class DBConnection {
    private connection: Connection;
    public async connect() {
        try {
            this.connection = await mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD || "",
                database: process.env.DB_NAME,
                multipleStatements: true,
                supportBigNumbers: true,
                decimalNumbers: true
            });
        }
        catch (err) {
            process.exit(1);
        }
    }
    public async query(sql: string, params: any[]): Promise<any | any[]> {
        try {
            const [res] =  await this.connection.query(sql, params);
            return res;
        }
        catch (err) {
            console.log(err);    
        }
    }
}
let db: DBConnection;
export async function initDBConnection() {
    db = new DBConnection();
    await db.connect();
}
export default db;