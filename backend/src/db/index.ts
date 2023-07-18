import mysql, { Pool, PoolOptions } from "mysql2/promise";

export default abstract class DBConnection {
    private static pool: Pool;
    public static async connect() {
        try {
            const poolOptions: PoolOptions = {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD || "",
                database: process.env.DB_NAME,
                multipleStatements: true,
                supportBigNumbers: true,
                decimalNumbers: true,
                connectionLimit: 50
            };
            this.pool = mysql.createPool(poolOptions);
        }
        catch (err) {
            process.exit(1);
        }
    }
    public static async query(sql: string, params: any[]): Promise<any | any[]> {
        const [res] =  await this.pool.query(sql, params);
        return res;
    }
}