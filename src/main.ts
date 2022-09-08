import { LightIntensityCommand } from "./light-intensity-command";
import { LightPowerCommand } from "./light-power-command";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

// Receiver
const bedRoomLight = new SmartHouseLight("Luz - Quarto");
const bathRoomLight = new SmartHouseLight("Luz - Banheiro");

// Command
const bedRoom_lighPowerCommand = new LightPowerCommand(bedRoomLight);
const bathRoom_lightPowerCommand = new LightPowerCommand(bathRoomLight);
const bedRoom_IntensityCommand = new LightIntensityCommand(bedRoomLight);
const bathRoom_IntensityCommand = new LightIntensityCommand(bathRoomLight);

// Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand("btn-1", bedRoom_lighPowerCommand);
smartHouseApp.addCommand("btn-2", bathRoom_lightPowerCommand);
smartHouseApp.addCommand("btn-3", bedRoom_IntensityCommand);
smartHouseApp.addCommand("btn-4", bathRoom_IntensityCommand);

smartHouseApp.executeCommand("btn-1");
smartHouseApp.undoCommand("btn-1");

smartHouseApp.executeCommand("btn-2");
smartHouseApp.undoCommand("btn-2");

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand("btn-3");
}

for (let i = 0; i < 2; i++) {
  smartHouseApp.undoCommand("btn-4");
}
