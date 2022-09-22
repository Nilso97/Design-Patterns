import IObserver from "./iobserver";

export interface ISubject {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  unsubscribeAll(): void;
  notify(observer: IObserver): void;
  notifyAll(): void;
}
