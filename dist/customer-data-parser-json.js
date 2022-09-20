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
exports.CustomerDataParserJson = void 0;
const fs_1 = require("fs");
const customer_data_parser_1 = require("./customer-data-parser");
class CustomerDataParserJson extends customer_data_parser_1.CustomerDataParser {
    parseData() {
        return __awaiter(this, void 0, void 0, function* () {
            const rawData = yield fs_1.promises.readFile(this.filePath);
            const data = JSON.parse(rawData.toString());
            const customerData = [];
            for (const customer of data) {
                const { name, age, cpf } = customer;
                customerData.push({ name, age, cpf });
            }
            return customerData;
        });
    }
    hook() {
        console.log("O Hook foi executado!");
    }
}
exports.CustomerDataParserJson = CustomerDataParserJson;
