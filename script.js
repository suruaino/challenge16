/****### All calculations are contained here below ... ###*****/
const calcBtn = document.getElementById("calc-btn");

calcBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const myDate = new Date();
    let currentYr = myDate.getFullYear();
    let currentMth = myDate.getMonth() + 1;
    let currentDay = myDate.getDate();

    let birthYr = parseInt(document.querySelector("#year").value);
    let birthMth = parseInt(document.querySelector("#month").value);
    let birthDay = parseInt(document.querySelector("#day").value);

    let yearResult = currentYr - birthYr;
    let monthResult = currentMth - birthMth;
    let dayResult = currentDay - birthDay;

    let yearSpan = document.getElementById("yr-span");
    let monthSpan = document.getElementById("mth-span");
    let daySpan = document.getElementById("day-span");

    yearSpan.innerText = yearResult;
    monthSpan.innerHTML = monthResult;
    daySpan.innerText = dayResult;

    if (monthResult < 0 || (monthResult === 0 && dayResult < 0)) {
        yearResult--;
        monthResult += 12;
    }

    if (dayResult < 0) {
        const tempDate = new Date(currentYr, currentMth - 1, 0);
        dayResult += tempDate.getDate();
        monthResult--;
    }

    yearSpan.innerText = yearResult;
    monthSpan.innerText = monthResult;
    daySpan.innerText = dayResult;
});
