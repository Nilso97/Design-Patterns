"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const light_intensity_command_1 = require("./light-intensity-command");
const light_power_command_1 = require("./light-power-command");
const smart_house_app_1 = require("./smart-house-app");
const smart_house_light_1 = require("./smart-house-light");
// Receiver
const bedRoomLight = new smart_house_light_1.SmartHouseLight("Luz - Quarto");
const bathRoomLight = new smart_house_light_1.SmartHouseLight("Luz - Banheiro");
// Command
const bedRoom_lighPowerCommand = new light_power_command_1.LightPowerCommand(bedRoomLight);
const bathRoom_lightPowerCommand = new light_power_command_1.LightPowerCommand(bathRoomLight);
const bedRoom_IntensityCommand = new light_intensity_command_1.LightIntensityCommand(bedRoomLight);
const bathRoom_IntensityCommand = new light_intensity_command_1.LightIntensityCommand(bathRoomLight);
// Controle - Invoker
const smartHouseApp = new smart_house_app_1.SmartHouseApp();
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
