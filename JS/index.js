
const increaseVideoSpeed = function () {

    document.querySelector(".overlay-video-1").playbackRate = 4;
    document.querySelector(".overlay-video-2").playbackRate = 3;
    document.querySelector(".overlay-video-3").playbackRate = 3;
}
increaseVideoSpeed();


const navClick = () => {
    const navbar = document.querySelector("ul");
    const setting = document.querySelector(".settingbtn");

    
    setting.addEventListener('click', () => {
        navbar.classList.toggle('settingbtnclicked');
        
    });
}

navClick();



const changeGreetingText = function (){
    let today = new Date();
    let time = today.getHours();
    let greet;

    if (time < 12) {
    greet = 'Good Morning I\'m';
    } else if (time < 18) {
    greet = 'Good Afternoon I\'m';
    } else if (time > 18) {
    greet = 'Good Evening I\'m';
    } else {
    greet = 'Goodnight I\'m';
    }
    document.querySelector(".hello").textContent = greet;
    
}
changeGreetingText();




// const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=347363e134d83bd333a1566be77deda5&units=metric";
// async function getWeather() {
//      const response = await fetch(url);
//      const data = response.json();
//      const {temp, lat} = data;
//      console.log(data);
//      console.log(temp);
     
// }

// getWeather();















