const btns = document.querySelectorAll('.drum')

console.log(btns);

btns.forEach((btn)=>{
      btn.addEventListener('click' , ()=>{
            let key = btn.textContent;
            switch (key) {
                  case 'w':   
                  let musiqa = new Audio('./sounds/crash.mp3');
                        musiqa.play();
                        break;
                  case 'a':   
                  let musiqa1 = new Audio('./sounds/kick-bass.mp3');
                        musiqa1.play();
                        break;
                  case 's':   
                  let musiqa2 = new Audio('./sounds/snare.mp3');
                        musiqa2.play();
                        break;
                  case 'd':   
                  let musiqa3 = new Audio('./sounds/tom-1.mp3');
                        musiqa3.play();
                        break;
                  case 'j':   
                   let musiqa4 = new Audio('./sounds/tom-2.mp3');
                        musiqa4.play();
                        break;
                  case 'k':   
                 let musiqa5 = new Audio('./sounds/tom-3.mp3');
                        musiqa5.play();
                        break;
                  case 'l':   
                 let musiqa6 = new Audio('./sounds/tom-4.mp3');
                        musiqa6.play();
                        break;
                  default:
                        console.log(key);
                        break;
            }
      })
});

document.addEventListener('keypress' , (el)=>{
      let key = el.key
      switch (key) {
            case 'w':
            let musiqa = new Audio('./sounds/crash.mp3');
                  musiqa.play();
                  break;
            case 'a':
            let musiqa1 = new Audio('./sounds/kick-bass.mp3');
                  musiqa1.play();
                  break;
            case 's':
            let musiqa2 = new Audio('./sounds/snare.mp3');
                  musiqa2.play();
                  break;
            case 'd':
            let musiqa3 = new Audio('./sounds/tom-1.mp3');
                  musiqa3.play();
                  break;
            case 'j':
             let musiqa4 = new Audio('./sounds/tom-2.mp3');
                  musiqa4.play();
                  break;
            case 'k':
           let musiqa5 = new Audio('./sounds/tom-3.mp3');
                  musiqa5.play();
                  break;
            case 'l':
           let musiqa6 = new Audio('./sounds/tom-4.mp3');
                  musiqa6.play();
                  break;
            default:
                  console.log(key);
                  break;
      }
});


const body = document.querySelector('body')

let bod1 =  body.bgColor = '#000';
