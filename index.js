const xmpp = require("simple-xmpp")


function send(){
    setTimeout(send,5000);
    xmpp.send("ayush@localhost", `hi ${Date.now()}`)
}

xmpp.connect({
    "jid": "admin@localhost", //username@domain
    "password":"password",
    "host": "localhost",
    "port": 5222
})

xmpp.on("online",data=>{
    console.log('hey you are online');
    console.log(`connected as ${data.jid.user}`);
    send();
})

xmpp.on("error",error=>console.log(`something went wrong ${error}`))

xmpp.on("chat", (from,message)=>{
    console.log(`got msg ${message} from ${from}`)
})