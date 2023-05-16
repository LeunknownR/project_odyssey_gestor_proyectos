import mysql, { Connection } from "mysql2/promise";

export default abstract class DBConnection {
    private static connection: Connection;
    public static async connect() {
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
            console.log(err);
            process.exit(1);
        }
    }
    public static async query(sql: string, params: any[]): Promise<any | any[]> {
        const [res] =  await this.connection.query(sql, params);
        return res;
    }
}