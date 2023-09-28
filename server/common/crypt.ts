import crypto from "crypto";

const key = (secret_key: any) => crypto.createHash('sha512').update(secret_key).digest('hex').substring(0, 32);

const iv = (secret_iv: any) => crypto.createHash('sha512').update(secret_iv).digest('hex').substring(0, 16);

const encrypt_data = (data: string, key: string, iv: string, method: any) => {
    const cipher = crypto.createCipheriv(method, key, iv);
    return Buffer.from(
        cipher.update(data, 'utf-8', 'hex') + cipher.final('hex')
    ).toString('base64');
};

const decrypt_data = (data: string, key: string, iv: string, method: any) => {
    const buff = Buffer.from(data, 'base64');
    const decipher = crypto.createDecipheriv(method, key, iv);
    return (decipher.update(buff.toString('utf-8'), 'hex', 'utf-8') + decipher.final('utf-8'));
};

export default { key, iv, encrypt_data, decrypt_data };