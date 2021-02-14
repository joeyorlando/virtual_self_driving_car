import config from '../config';

class WebsocketClient {
  conn: WebSocket | null = null;

  constructor() {
    this.conn = new WebSocket(config.websocketUrl);
  }

  sendData(data: any): void {
    this.conn?.send(data);
  }
}

export default new WebsocketClient();
