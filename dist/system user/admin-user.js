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
exports.AdminUser = void 0;
class AdminUser {
    constructor(firstName, userName) {
        (this.firstName = firstName), (this.userName = userName);
    }
    getAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                return setTimeout(() => {
                    return resolve([
                        { street: "Av. Brasil", number: 50 },
                        { street: "Rua 15 de Novembro", number: 116 },
                    ]);
                }, 2000);
            });
        });
    }
}
exports.AdminUser = AdminUser;
