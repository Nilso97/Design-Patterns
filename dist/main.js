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
const path_1 = require("path");
const customer_data_parser_json_1 = require("./customer-data-parser-json");
const customer_data_parser_txt_1 = require("./customer-data-parser-txt");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const filePathTXT = (0, path_1.resolve)(__dirname, "../files", "customer.txt");
        const customerDataParserTxt = new customer_data_parser_txt_1.CustomerDataParserTxt(filePathTXT);
        yield customerDataParserTxt.fixCustomerData();
        console.log(customerDataParserTxt.customerData);
        console.log("----------");
        const filePathJson = (0, path_1.resolve)(__dirname, "../files", "customer.json");
        const customerDataParserJson = new customer_data_parser_json_1.CustomerDataParserJson(filePathJson);
        yield customerDataParserJson.fixCustomerData();
        console.log(customerDataParserJson.customerData);
    });
}
run();
