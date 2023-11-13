const winter = document.getElementById("winter");
winter.addEventListener("click", () => {
    switchStation("winter")
});

const summer = document.getElementById("summer");
summer.addEventListener("click", () => {
    switchStation("summer")
});

const fall = document.getElementById("fall");
fall.addEventListener("click", () => {
    switchStation("fall")
});

const spring = document.getElementById("spring");
spring.addEventListener("click", () => {
    switchStation("spring")
});

function switchStation(station) {
    const htmlUpdate = document.documentElement;
    htmlUpdate.classList.remove("winter", "summer", "fall", "spring");
    htmlUpdate.classList.add(station);
}