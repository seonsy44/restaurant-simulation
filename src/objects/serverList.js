function ServerList(list) {
  this.servers = list;
}

ServerList.prototype.findServerAsync = function () {
  return new Promise(
    function (resolve) {
      setInterval(_findServer(this.servers, resolve), 100);
    }.bind(this)
  );
};

function _findServer(servers, resolve) {
  return function () {
    servers.forEach(function (server) {
      if (server.isAvailable()) return resolve(server);
    });
  };
}

export default ServerList;
