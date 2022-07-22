import jwt from 'jsonwebtoken';
export default function (unverifiedJWT: any, secretJWTKey: string): string | jwt.JwtPayload;
