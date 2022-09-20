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
exports.CustomerDataParserTxt = void 0;
const fs_1 = require("fs");
const customer_data_parser_1 = require("./customer-data-parser");
class CustomerDataParserTxt extends customer_data_parser_1.CustomerDataParser {
    parseData() {
        return __awaiter(this, void 0, void 0, function* () {
            const rawData = yield fs_1.promises.readFile(this.filePath);
            const data = rawData.toString();
            const lines = data.split("\n");
            const customerData = [];
            for (const line of lines) {
                const [name, age, cpf] = line.split("\t");
                customerData.push({ name, age, cpf });
            }
            return customerData;
        });
    }
}
exports.CustomerDataParserTxt = CustomerDataParserTxt;
