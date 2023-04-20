class Timer{
    constructor(){
        this.timer = 0;
        this.intervalId = null;
    }
    start(){
      
this.intervalId = setInterval(() => {
              this.timer++;
              timershow.innerHTML = this.timer;
           }, 1000);

          
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
const timer = new Timer();
startbtn.addEventListener('click',()=>{

   
    timer.start();

   
})

pausebtn.addEventListener('click',()=>{
   
timer.pause();

   
})
resetbtn.addEventListener('click',()=>{
  
timer.reset();

  
})
