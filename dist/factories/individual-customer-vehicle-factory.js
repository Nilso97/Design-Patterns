"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndividualCreateVehicleCustomerFactory = void 0;
const individual_customer_1 = require("../customer/individual-customer");
const individual_car_1 = require("../vehicle/individual-car");
// Abstract Factory
class IndividualCreateVehicleCustomerFactory {
    createCustomer(customerName) {
        return new individual_customer_1.IndividualCustomer(customerName);
    }
    createVehicle(vehicleName, customerName) {
        const customer = this.createCustomer(customerName);
        return new individual_car_1.IndividualCar(vehicleName, customer);
    }
}
exports.IndividualCreateVehicleCustomerFactory = IndividualCreateVehicleCustomerFactory;
