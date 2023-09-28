import { User } from "../User";
import { AppDataSource } from "../../../database/db";
import { encrpt, decrpt, hashPassword, compareHash } from "../user.utils";
import eth_lib from "../../../common/ethereum_lib";
import { sign } from "../../../common/jwt";

interface UserRegister {
    email: string;
    username: string;
    password: string;
    dni: string;
};

interface UserLogin {
    email: string;
    password: string;
}

const userRepository = AppDataSource.getRepository(User);

const registerUser = async (userData: UserRegister) => {
    try {
        const wallet = eth_lib.createWallet();
        const user = new User();
        user.email = userData.email;
        user.password = await hashPassword(userData.password, 10);
        user.dni = userData.dni;
        user.username = userData.username;
        user.balance = 0.0;
        user.role = 'user';
        user.wallet = wallet.address;
        user.privKey = encrpt(wallet.privateKey);
        await userRepository.save(user);
        return user;
    } catch (err) {
        console.error(err);
        throw new Error(`Error to register a new user. ${err}`);
    }
};

const login = async (userData: UserLogin) => {
    const { email, password } = userData;
    const user = await userRepository.findOneBy({email});
    if (!user) throw {status: 404, message: `Email not found`};
    const match = await compareHash(password, user.password);
    if (!match) throw {status: 401, message: `Invalid Password`};
    return sign({email: user.email, username: user.username});
}
    

export default { registerUser, login }