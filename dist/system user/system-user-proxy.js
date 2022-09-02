"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemUserProxy = void 0;
const admin_user_1 = require("./admin-user");
class SystemUserProxy {
    constructor(firstName, userName) {
        this.firstName = firstName;
        this.userName = userName;
        this.realUser = null;
        this.realUserAddresses = null;
    }
    createUser() {
        if (this.realUser === null) {
            this.realUser = new admin_user_1.AdminUser(this.firstName, this.userName);
        }
        return this.realUser;
    }
    getAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            this.realUser = this.createUser();
            if (this.realUserAddresses === null) {
                this.realUserAddresses = yield this.realUser.getAddresses();
            }
            return this.realUserAddresses;
        });
    }
}
exports.SystemUserProxy = SystemUserProxy;
