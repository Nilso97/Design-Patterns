"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Feed {
    constructor(channelId) {
        this.channelId = channelId;
        this.url = `https://www.youtube.com/feeds/videos.xml?channel_id=${this.channelId}`;
    }
    update(video) {
        console.log(`New video added in Feed RSS: "${video.title}"`);
        console.log(`Check this out : "${this.url}"`);
    }
}
exports.default = Feed;
