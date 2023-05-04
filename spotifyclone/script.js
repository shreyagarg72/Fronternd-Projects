console.log("Welcome to Spotify Clone");
let songIndex = 0;
let audioElement = new Audio('2.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =[
    {songName:"Baarishon mein ", filePath:"1.mp3",coverPath: "cover1.jpg"},
    {songName:"IDGAF", filePath:"2.mp3",coverPath: "cover1.jpg"},
    {songName:"It ain't me", filePath:"3.mp3",coverPath: "cover1.jpg"},
    {songName:"Beshram Rang", filePath:"zwebdev/4.mp3",coverPath: "cover1.jpg"},
    {songName:"Bones", filePath:"zwebdev/2.mp3",coverPath: "cover1.jpg"}  ,  
    {songName:"Mockingbird", filePath:"zwebdev/3.mp3",coverPath: "cover1.jpg"},
    {songName:"Violet", filePath:"zwebdev/1.mp3",coverPath: "cover1.jpg"}  ,

]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();
// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;



    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        gif.style.opacity = 0;  
    }
})
// listen to event
audioElement.addEventListener('timeupdate',()=>{
    //update seekhbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = '3.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    })
})