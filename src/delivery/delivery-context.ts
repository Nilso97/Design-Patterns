import { DeliveryFactory } from "./delivery-factory";

export const deliveryContext = function (
  factory: DeliveryFactory,
  name: string,
  number: string,
  street: string,
  city: string
): void {
  // Intrinsic State
  const location = factory.makeLocation({
    street,
    city,
  });

  // Extrinsic State
  location.deliver(name, number);
};
