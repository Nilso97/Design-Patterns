import Feed from "./classes/feed";
import Subscribe from "./classes/subscriber";
import Video from "./classes/video";
import VideoNotification from "./classes/video_notification";

const video = new Video(
  "0Eub-aQs-44",
  "Aprenda a Criar um CLI Para Automatizar seu Trabalho",
  "https://i9.ytimg.com/vi/0Eub-aQs-44/maxresdefault.jpg",
  "https://www.youtube.com/watch?v=0Eub-aQs-44"
);

const videoNotification = new VideoNotification(video);

const subscribe_1 = new Subscribe(1, "John Doe");
const subscribe_2 = new Subscribe(2, "Michael Wait");

const feedYoutube = new Feed("UCFuIUoyHB12qpYa8Jpxoxow");

videoNotification.subscribe(subscribe_1);
videoNotification.subscribe(subscribe_2);
videoNotification.subscribe(feedYoutube);

console.log("Notificando os observers...");
videoNotification.notifyAll();

videoNotification.unsubscribe(subscribe_2);

console.log("Notificando os observers...");
videoNotification.notifyAll();
