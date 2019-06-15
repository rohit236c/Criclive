const express = require('express');
const app = express();
const cricApi = require('cric-live-json')


const socketio = require('socket.io');
const http = require('http');
const server = http.Server(app);



app.use('/', express.static(__dirname + '/public'))
let liveScore1 = {}
        

setInterval(() => {
    
    cricApi.getLiveScore(20255)    
                .then( (liveScore) => {
                    liveScore1 = liveScore
                  })
                .catch(console.error) 
    
    
}, 1000);   


const io = socketio(server)

    io.on('connection', (socket) => {
        console.log(socket.id)  
    
        io.emit('match',{Current:liveScore1}) 
        
          })
    




server.listen('2349', () => {
    console.log('http://localhost:2349')
})
