var WebSocketServer = require('ws').Server;
var  wss = new WebSocketServer({port: 40510})

wss.on('connection',  (ws)=> {

  ws.on('message',  (message) => {
    try {
      let msgJs = JSON.parse(message);
      console.log(msgJs.test);
  }
  catch(err) {
    console.log(message);
  }
});

  let intervalToClear =  setInterval(() => { ws.send(`${new Date()}`, function ack(error) { if(typeof error !== 'undefined')  clearInterval(intervalToClear); });},1000);


})



