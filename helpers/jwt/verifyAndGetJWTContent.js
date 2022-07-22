import jwt from 'jsonwebtoken';
export default function (unverifiedJWT, secretJWTKey) {
    return jwt.verify(unverifiedJWT, secretJWTKey);
}
