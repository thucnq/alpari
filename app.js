
// const eio = require('engine.io-client');
// const http = require('http');
// const keepAliveAgent = new http.Agent({ keepAlive: true });
const opts = {
    query: {
        EIO: 3,
        transport: 'websocket',
        sid: 'V1Tcpjnrg9kspYMECBLS'
    },
    path: '/socket.io',
    binaryType: 'arraybuffer',
    transports: ['websocket'],
    // protocols: [

    // ], 
    // agent: keepAliveAgent,
    // upgrade: 'websocket',
    // forceJSONP: 
    // jsonp 
    // forceBase64 
    // enablesXDR 
    // timestampRequests 
    // policyPort 
    // transportOptions 
    // rememberUpgrade 
    // key: 
    passphrase: 'cookie',
    // cert (String):
    // ca (String|Array): 
    // ciphers (String): 
    // rejectUnauthorized (Boolean): 
    // perMessageDeflate (Object|Boolean): 
    // threshold (Number):
    // extraHeaders: {
    //     'Cookie': [
    //         'XSRF-TOKEN=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly',
    //         'XSRF-TOKEN=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly',
    //         'XSRF-TOKEN=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly',
    //         'XSRF-TOKEN=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly',
    //         'XSRF-TOKEN=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly',
    //         'XSRF-TOKEN=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly',
    //     ]
    // } 
    // onlyBinaryUpgrades (Boolean): 
    // forceNode (Boolean): 
    // localAddress (String): 




}
const socket = new eio.Socket('wss://wsprice.alpari.io', opts);
console.log(socket)
socket.on('open', function () {
    console.log('connected')
    socket.on('RealData', function (data) {
        console.log(data)
    });
    socket.on('close', function () { });
});