"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorBudgetHandler = void 0;
const base_budget_handler_1 = require("./base-budget-handler");
class DirectorBudgetHandler extends base_budget_handler_1.BaseBudgetHandler {
    handle(budget) {
        if (budget.total <= 10000) {
            console.log("O Diretor aprovou o orçamento.");
            budget.approved = true;
            return budget;
        }
        return super.handle(budget);
    }
}
exports.DirectorBudgetHandler = DirectorBudgetHandler;
