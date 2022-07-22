import { createHmac } from 'crypto';
export default function (value, salt) {
    return createHmac(`sha256`, salt)
        .update(value)
        .digest(`hex`);
}
