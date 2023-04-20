class Timer{
    constructor(){
        this.timer = 0;
        this.intervalId = null;
    }
    start(){
      
// this.intervalId = setInterval(() => {
//               this.timer++;
//               timershow.innerHTML = this.timer;
//            }, 1000);

          
    }
    pause(){
        clearInterval(this.intervalId);
        this.intervalId =null;
    }
    reset(){
        this.timer= 0;
        timershow.innerHTML = this.timer;
    }
}
const timershow = document.getElementById('timershow');
const startbtn = document.getElementById('startbtn');
const pausebtn = document.getElementById('pausebtn');
const resetbtn = document.getElementById('Resetbtn');

startbtn.addEventListener('click',()=>{

   const objecttime = new Timer();
    objecttime.start();

   
})

pausebtn.addEventListener('click',()=>{
    const objecttime = new Timer();
objecttime.pause();

   
})
resetbtn.addEventListener('click',()=>{
    const objecttime = new Timer();
objecttime.reset();

  
})
