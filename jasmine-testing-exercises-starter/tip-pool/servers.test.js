describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add new server with empty input', function () {
    serverNameInput.value = "";
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should add a new row to server table on updateServerTable()', function () {
    allServers = {server1: {serverName: 'Alice'}};
    updateServerTable();

    expect(serverTbody.innerHTML).toContain('Alice');
  })

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverTbody.innerHTML = '';
    serverId = 0;
  });
});
