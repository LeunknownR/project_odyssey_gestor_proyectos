import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { TokenPayload } from "./types";
import { GenerateResponseBody } from "./response/generateResponseBody";
import { DBRoles } from "../db/enums";
import { JwtPayload } from "jsonwebtoken";
import { Socket } from "socket.io";

export default abstract class Authentication {
    // 10 segundos
    // private static TOKEN_EXPIRATION_TIME: number = 10; 
    // 2 días de expiración
    // private static TOKEN_EXPIRATION_TIME: number = 2*24*60*60; 
    // 3 meses de expiración
    private static TOKEN_EXPIRATION_TIME: number = 3*30*24*60*60; 
    static createToken = ({ username: user, roleId }: TokenPayload): string => {
        const token = jwt.sign(
            { user, roleId }, 
            process.env.SECRET_TOKEN_KEY, 
            { expiresIn: Authentication.TOKEN_EXPIRATION_TIME });
        return token;
    }
    static decodeTokenInRequest = (header: any) => {
        // Obteniendo el nuevo token del header de autorización
        const token = header as string || "";
        // Revisando que el token haya sido proporcionado
        return token ? token.split("Bearer ")[1] : "";
    }
    static checkTokenInEndpoints = (role: DBRoles) => (
        req: Request,
        res: Response, 
        next: NextFunction): void => {
        const token: string = this.decodeTokenInRequest(req.headers["authorization"]);
        if (!token) return;
        // Verificando el token
        jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err: any, decoded: JwtPayload) => {
            if (err || decoded.roleId !== role) {
                GenerateResponseBody.sendUnauthorizedResponse(res);
                return;
            }
            // Autorizando endpoint
            next();
        });
    }
    static checkTokenInWSService = (role: DBRoles) => (socket: Socket): Promise<boolean> => {
        return new Promise<boolean>((res, rej) => {
            const token = this.decodeTokenInRequest(socket.handshake.auth.token);
            // Revisando que el token haya sido proporcionado
            if (!token) {
                rej(false);
                return;
            }
            // Verificando el token
            jwt.verify(
                token, 
                process.env.SECRET_TOKEN_KEY, 
                (err: any, decoded: JwtPayload) => {
                    if (err || decoded.roleId !== role) {
                        rej(false);
                        return;
                    }
                    res(true);
                });
        });
    }
}