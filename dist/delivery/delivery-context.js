"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryContext = void 0;
const deliveryContext = function (factory, name, number, street, city) {
    // Intrinsic State
    const location = factory.makeLocation({
        street,
        city,
    });
    // Extrinsic State
    location.deliver(name, number);
};
exports.deliveryContext = deliveryContext;
