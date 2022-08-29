import { Radio } from "./device/radio";
import { Tv } from "./device/tv";
import { RemoteControl } from "./remote-control/remote-control";
import { RemoteControlWithVolume } from "./remote-control/remote-controll-with-volume";

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume
): void {
  abstraction.togglePower(); // true

  // Type Guard
  if (!("volumeUp" in abstraction)) return;

  abstraction.volumeUp(); // + ===> 20
  abstraction.volumeUp(); // + ===> 30
  abstraction.volumeDown(); // - ===> 20 ...
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
const radioRemoteControlWithVolume = new RemoteControlWithVolume(radio);

clientCode(radioRemoteControl); // On | Liga

/*
clientCode(radioRemoteControlWithVolume); // Power: On + Volume

clientCode(radioRemoteControl); // Off | Desliga
*/

const tvRemoteControl = new RemoteControl(tv);
const tvRemoteControlWithVolume = new RemoteControlWithVolume(tv);

clientCode(tvRemoteControlWithVolume); // Power: On + Volume

clientCode(tvRemoteControl); // Off | Desliga
