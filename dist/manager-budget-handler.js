"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerBudgetHandler = void 0;
const base_budget_handler_1 = require("./base-budget-handler");
class ManagerBudgetHandler extends base_budget_handler_1.BaseBudgetHandler {
    handle(budget) {
        if (budget.total <= 5000) {
            console.log("O Gerente tratou o orçamento.");
            budget.approved = true;
            return budget;
        }
        return super.handle(budget);
    }
}
exports.ManagerBudgetHandler = ManagerBudgetHandler;
