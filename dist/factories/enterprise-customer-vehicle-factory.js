"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseCreateVehicleCustomerFactory = void 0;
const enterprise_customer_1 = require("../customer/enterprise-customer");
const enterprise_car_1 = require("../vehicle/enterprise-car");
// Abstract Factory
class EnterpriseCreateVehicleCustomerFactory {
    createCustomer(customerName) {
        return new enterprise_customer_1.EnterpriseCustomer(customerName);
    }
    createVehicle(vehicleName, customerName) {
        const customer = this.createCustomer(customerName);
        return new enterprise_car_1.EnterpriseCar(vehicleName, customer);
    }
}
exports.EnterpriseCreateVehicleCustomerFactory = EnterpriseCreateVehicleCustomerFactory;
