const paper = document.querySelector(".papper img");
const scissor = document.querySelector(".scissors img");
const rock = document.querySelector(".rock img");
const mainDiv = document.querySelector(".imgs");
const resetBtn = document.querySelector(".reset button");
let result = "";

const all = [paper , scissor , rock];

resetBtn.addEventListener("click" ,reloadF);

function reloadF(){
    window.location.reload();
}

all.forEach(element => {
    element.addEventListener("click" , startGame);
});
function startGame(event){
    const userPicture = event.target.src;
    const userChoiseId = event.target.id;
    const systemChoise = all[Math.floor(Math.random() * all.length)];
    const systemPicture = systemChoise.src;
    const systemChoiseId = systemChoise.id;
    resetBtn.style.display = "block";

    console.log(userChoiseId);
    console.log(systemChoiseId);

    if (userChoiseId == systemChoiseId){

        result = "its tie";

    }else if(systemChoiseId == paper.id){

        if(userChoiseId == rock.id){
            result = "System Win";
        }
        if(userChoiseId == scissor.id){
            result = "You Win";
        }

    }else if(systemChoiseId == rock.id){
        if(userChoiseId == paper.id){
            result = "You Win";
        }
        if(userChoiseId == scissor.id){
            result = "System Win"
        }
    }else if(systemChoiseId == scissor.id){
        if(userChoiseId == paper.id){
            result = "System Win";
        }
        if(userChoiseId == rock.id){
            result = "You Win";
        }
    }
    mainDiv.innerHTML = `
        <div>
            <p class = "you-txt">You</p>
            <img src = "${userPicture}" class = "result user"/>
        </div>
        <p class = "middle-text">
            ${result}
        </p>
        <div>
            <p class = "system-txt">System</p>
            <img src = "${systemPicture}" class = "result system"/>
        </div>
    `



}

