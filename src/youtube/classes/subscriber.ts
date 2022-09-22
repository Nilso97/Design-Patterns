import IObserver from "../interfaces/iobserver";
import Video from "./video";

export default class Subscribe implements IObserver {
  constructor(public readonly id: number, public readonly name: string) {}

  update(video: Video): void {
    console.log(`${this.name} has been notification about ${video.title}`);
  }
}
