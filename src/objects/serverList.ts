import type Server from "./server";

interface IServerList {
  servers: Server[];
  findServerAsync(): Promise<Server>;
}

class ServerList implements IServerList {
  servers: Server[];

  constructor(servers: Server[]) {
    this.servers = servers
  }

  findServerAsync() {
    return new Promise<Server>((resolve) => {
        setInterval(() => {
          this.servers.forEach((server) => {
            if(server.isAvailable()) return resolve(server);
          })
        }, 100);
      }
    );
  };
}

export default ServerList;
