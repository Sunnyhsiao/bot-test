var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1490182999,
  channelSecret: "5b98cb8b2e6be451909c6519e934736f",
  channelAccessToken: "awmTS1fYXdUBAmA7V32Pwm663bIx9D6nYnOChGqDG3TYb/sp5RQdrIOF7yR8ZxIlRqbK+qUXgwLTr2v3yGk0JHoaD6bGaX+cP1jbXJFIzucheQsQThrqjiwEodLWjz3Gpj6QIdlhR9iBu6dpLCIJ9QdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
    console.log(event); //把收到訊息的 event 印出來看看
  });
  
  const app = express();
  const linebotParser = bot.parser();
  app.post('/', linebotParser);
  
  //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
  var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });