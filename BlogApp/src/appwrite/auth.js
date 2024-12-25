import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";
import { useNavigate } from "react-router-dom";
export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password
      );
      if (userAccount) {
        return this.login({ email, password });
      } else return userAccount;
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      console.log("Fetched user:", user);
      return user;
    } catch (error) {
      const navigate = useNavigate();
      navigate("/login");
    }
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Services :: logout", error);
    }
    return null;
  }
}
const authService = new AuthService();
export default authService;
