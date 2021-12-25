function timeClock(){
    let date = new Date()
    console.log(date)

    //Time
    let hour = ('0'+ date.getHours()).slice(-2)
    let minutes = ('0'+date.getMinutes()).slice(-2)
    let seconds = ('0'+date.getSeconds()).slice(-2)

    //Date
    let day = ('0'+date.getDate()).slice(-2)
    //getMonth() returns the month (from 0 to 11) of a date, therefore it is necessary to add +1, for when the month is 0 
    // O  (date.getMonth()+1) vai ser feito primeiro, depois o ('0'+(date.getMonth()+1)), e por ultimo, ('0'+(date.getMonth()+1)).slice(-2), conforme a ordem de parentesis
    let month = ('0'+(date.getMonth()+1)).slice(-2)
    let year = date.getFullYear()
    let dayWeek = date.getDay()
    document.querySelector("div.hour").innerHTML = hour
    document.querySelector("div.seconds").innerHTML = seconds
    document.querySelector("div.minutes").innerHTML = minutes
    document.querySelector("div.date").innerHTML = `${day}/${month}/${year}`
    
    //a função getDay(), retorna dias da semana de 0 a 6, por isso é necessário o Switch abaixo
    switch(dayWeek){
        case 1:
            document.querySelector("div.weekday").innerHTML = "Monday"
            break
        case 2:
            document.querySelector("div.weekday").innerHTML = "Tuesday"
            break
        case 3:
            document.querySelector("div.weekday").innerHTML = "Wednesday"
            break
        case 4:
            document.querySelector("div.weekday").innerHTML = "Thursday"
            break
        case 5:
            document.querySelector("div.weekday").innerHTML = "Friday"
            break
        case 6:
            document.querySelector("div.weekday").innerHTML = "Saturday"
            break
        case 0:
            document.querySelector("div.weekday").innerHTML = "Sunday"
            break
}
}

setInterval(timeClock, 1000)

