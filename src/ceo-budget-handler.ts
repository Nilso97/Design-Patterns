import { BaseBudgetHandler } from "./base-budget-handler";
import { CustomerBudget } from "./customer-budget";

export class CEOBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        console.log("O CEO aprova qualquer orçamento.");
        budget.approved = true;
        return budget;
    }
}