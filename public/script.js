const socket = io();
let sports = {};
socket.on('connect',()=>{
    console.log("socket created  "+ socket.id)
})

socket.on('match', (data)=>{    
    console.log(data.Current)

    $('h1').text(`${data.Current.teams['9'].name} vs ${data.Current.teams['10'].name} `)
    $('#para1').text(`status : ${data.Current.state}   `)
    $('#para2').text(`${data.Current.status}`)
    $('.cric').append(
    $('<li>').attr('class','list-group-item').text(`${data.Current.score.detail.batting.shortName} : ${data.Current.score.detail.batting.score}/${data.Current.score.detail.batting.wickets}`)).append(
    $('<li>').attr('class','list-group-item').text(`overs : ${data.Current.score.detail.batting.overs}`)
    )
})
