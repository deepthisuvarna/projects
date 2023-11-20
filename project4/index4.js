var num=document.querySelectorAll(".drum").length
for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btn=this.innerHTML
        switch(btn){
            case 'w':var audio=new Audio("audio/tom-1.mp3")
            audio.play();
            console.log("w")
                break
            case 'a':var audio=new Audio("audio/tom-2.mp3")
            audio.play();
            console.log("a")
                break
            case 's':var audio=new Audio("audio/tom-3.mp3")
            audio.play();
            console.log("s")
                break
            case 'd':var audio=new Audio("audio/tom-4.mp3")
            audio.play();
            console.log("d")
                break
            case 'j':var audio=new Audio("audio/snare.mp3")
            audio.play();
            console.log("j")
                break
            case 'k':var audio=new Audio("audio/crash.mp3")
            audio.play();
            console.log("k")
                break
            case 'l':var audio=new Audio("audio/kick-bass.mp3")
            audio.play();
            console.log("l")
                break
        }
    })
}


document.addEventListener("keypress",function(e){
    var key=e.key.toLowerCase()
    switch(key){
        case "w":var audio=new Audio("audio/tom-1.mp3")
        audio.play();
        console.log("w")
            break
        case 'a':var audio=new Audio("audio/tom-2.mp3")
        audio.play();
        console.log("a")
            break
        case 's':var audio=new Audio("audio/tom-3.mp3")
        audio.play();
        console.log("s")
            break
        case 'd':var audio=new Audio("audio/tom-4.mp3")
        audio.play();
        console.log("d")
            break
        case 'j':var audio=new Audio("audio/snare.mp3")
        audio.play();
        console.log("j")
            break
        case 'k':var audio=new Audio("audio/crash.mp3")
        audio.play();
        console.log("k")
            break
        case 'l':var audio=new Audio("audio/kick-bass.mp3")
        audio.play();
        console.log("l")
            break
    }
})