import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, "John Doe", "20A", "Av. Brasil", "SP");
deliveryContext(factory, "Karen", "20A", "Av. Brasil", "SP");
deliveryContext(factory, "Michael", "502", "Av. Brasil", "SP");

deliveryContext(factory, "Lucas", "207", "15 de Novembro", "BH");
deliveryContext(factory, "Will", "35", "Av. Atlântida", "BC");

console.log();
console.log(factory.getLocations());
