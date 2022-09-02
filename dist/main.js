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
const system_user_proxy_1 = require("./system user/system-user-proxy");
function clientCode() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = new system_user_proxy_1.SystemUserProxy("John", "john.doe");
        console.log(user);
        console.log("Isso vai levar 2 segundos...");
        console.log(yield user.getAddresses());
        console.log("Isso vai se repetir (CACHE)");
        //
    });
}
clientCode();
