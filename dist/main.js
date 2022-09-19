"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ceo_budget_handler_1 = require("./ceo-budget-handler");
const customer_budget_1 = require("./customer-budget");
const director_budget_handler_1 = require("./director-budget-handler");
const manager_budget_handler_1 = require("./manager-budget-handler");
const seller_budget_handler_1 = require("./seller-budget-handler");
const customerBudget = new customer_budget_1.CustomerBudget(10);
const seller = new seller_budget_handler_1.SellerBudgetHandler();
seller
    .setNextHandler(new manager_budget_handler_1.ManagerBudgetHandler())
    .setNextHandler(new director_budget_handler_1.DirectorBudgetHandler())
    .setNextHandler(new ceo_budget_handler_1.CEOBudgetHandler());
seller.handle(customerBudget);
console.log(customerBudget);
