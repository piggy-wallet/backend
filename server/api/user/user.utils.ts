import bcrypt from "bcrypt";
import crypt from "../../common/crypt";
import { env } from "../../config/index";

const { encrypt_env } = env;

export const encrpt = (data: string) => {
    const key: string = crypt.key(encrypt_env.secret_key);
    const iv: string = crypt.iv(encrypt_env.secret_iv);
    const encrypt = crypt.encrypt_data(data, key, iv, encrypt_env.ecnryption_method);
    return encrypt;
};

export const decrpt = (data: string) => {
    const key: string = crypt.key(encrypt_env.secret_key);
    const iv: string = crypt.iv(encrypt_env.secret_iv);
    const decrypt = crypt.decrypt_data(data, key, iv, encrypt_env.ecnryption_method);
    return decrypt;
};

export const hashPassword = async (password: string, rounds: number) => {
    try {
        const salt = await bcrypt.genSalt(rounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (err) {
        console.error(err);
        throw new Error(`Hashing password error. ${err}`);
    }
};

export const compareHash = async (password: string, userPass: string) => await bcrypt.compare(password, userPass);
