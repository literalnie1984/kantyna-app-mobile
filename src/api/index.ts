import Menu from "./menu";
import User from "./user";
import Orders from "./orders";
import Wallet from "./wallet";

export const { getWeeklyMenu, getTodaysMenu, getMenuByDay, getLastMenuUpdate } = Menu;
export const { registerUser, loginUser, getUserData, changeUsersPassword, verifyUser } = User;
export const { createOrders, getPendingUserOrders, getCompletedUserOrders } = Orders;
export const { getClientData, getBalance, setWallet, addBalance } = Wallet;
