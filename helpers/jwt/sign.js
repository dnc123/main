import jwt from 'jsonwebtoken';
import { addDays } from "date-fns";
export default function (ID, secretJWTKey) {
    return jwt.sign({
        ID,
        exp: addDays(new Date(), 365).getTime(),
    }, secretJWTKey);
}
