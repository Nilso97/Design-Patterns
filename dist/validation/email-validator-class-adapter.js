"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorClassAdapter = void 0;
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
class EmailValidatorClassAdapter {
    isEmail(value) {
        return (0, isEmail_1.default)(value);
    }
}
exports.EmailValidatorClassAdapter = EmailValidatorClassAdapter;
