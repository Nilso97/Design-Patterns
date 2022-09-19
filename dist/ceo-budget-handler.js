"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CEOBudgetHandler = void 0;
const base_budget_handler_1 = require("./base-budget-handler");
class CEOBudgetHandler extends base_budget_handler_1.BaseBudgetHandler {
    handle(budget) {
        console.log("O CEO aprova qualquer orçamento.");
        budget.approved = true;
        return budget;
    }
}
exports.CEOBudgetHandler = CEOBudgetHandler;
