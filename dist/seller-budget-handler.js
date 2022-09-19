"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerBudgetHandler = void 0;
const base_budget_handler_1 = require("./base-budget-handler");
class SellerBudgetHandler extends base_budget_handler_1.BaseBudgetHandler {
    handle(budget) {
        if (budget.total <= 1000) {
            console.log("O Vendedor tratou o orçamento.");
            budget.approved = true;
            return budget;
        }
        return super.handle(budget);
    }
}
exports.SellerBudgetHandler = SellerBudgetHandler;
