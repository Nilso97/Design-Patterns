import IObserver from "../interfaces/iobserver";
import Video from "./video";

export default class Feed implements IObserver {
  public readonly url: string;
  
  constructor(public readonly channelId: string) {
    this.url = `https://www.youtube.com/feeds/videos.xml?channel_id=${this.channelId}`;
  }

  update(video: Video): void {
    console.log(`New video added in Feed RSS: "${video.title}"`);
    console.log(`Check this out : "${this.url}"`);
  }
}
