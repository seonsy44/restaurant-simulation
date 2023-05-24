function ServerList(list) {
  this.servers = list;
}

function _findServer(servers, resolve) {
  return function () {
    servers.forEach(function (server) {
      if (server.isAvailable()) return resolve(server);
    });
  };
}

ServerList.prototype.findServerAsync = function () {
  return new Promise(
    function (resolve) {
      setInterval(_findServer(this.servers, resolve).bind(this), 100);
    }.bind(this)
  );
};

export default ServerList;
