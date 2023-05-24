function ServerList(list) {
  this.servers = list;
}

function _findServer(servers, resolve) {
  servers.forEach(function (server) {
    if (server.isAvailable()) {
      return resolve(server);
    }
  });
}

ServerList.prototype.findServerAsync = function () {
  return new Promise(
    function (resolve) {
      setInterval(
        function () {
          _findServer(this.servers, resolve);
        }.bind(this),
        500
      );
    }.bind(this)
  );
};

export default ServerList;
