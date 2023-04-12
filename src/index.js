import "bootstrap/dist/css/bootstrap.css";
import "./Styles/style.css";
import startGame from "./Scripts/game";
import logo from "./Images/ship.png";

// Change website icon
const icon = document.createElement("link");
icon.rel = "icon";
icon.href = logo;
document.getElementsByTagName("head")[0].appendChild(icon);

startGame();

// Allow play again button 
const playAgain = document.querySelector(".playAgain");
playAgain.addEventListener("click", () => {
    startGame();
});