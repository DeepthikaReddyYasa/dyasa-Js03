/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */

for (let i = 0; i < gameDates.length; i++) {
    let data = "<p class='" + setClassName(i) + "'> " + setGameLocation(i) + " " + gameOpponents[i] + " <br> " + gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ") " + setGameInnings(i) + "</p>"
    document.getElementById(gameDates[i]).insertAdjacentHTML("beforeend", data);
}

function setClassName(i) {
    let data = gameResults[i] === 'W' ? "win" : gameResults[i] === 'L' ? "lose" : gameResults[i] === 'S' ? "suspended" : "postponed";
    return data;
}

function setGameInnings(i) {
    let innings = gameInnings[i] != "9" ? "[" + gameInnings[i] + "]" + setStars(i) + "" : "";
    return innings;
}

function setGameLocation(i) {
    let location = gameLocations[i] === "h" ? "vs." : "@";
    return location;
}

function setStars(index) {
    let stars = ""
    let starLength = (index != 22 && gameResults[index]) === 'L' ? 1 : gameResults[index] === 'S' || gameResults[index] === 'P' ? 3 : 0

    for (let i = 0; i < starLength; i++) {
        stars += "*"
    }
    return stars;
}