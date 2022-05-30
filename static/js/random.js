// random num
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

if (getCookie('wowbuyus') === undefined) {
    let randNum = document.getElementById("randNum");
    randNum.innerHTML = getRandomInt(870, 871);
}else{
    randNum.innerHTML = getCookie('wowbuyus').substr(12);
}

let num = randNum.innerHTML;
randNum.innerHTML = `${num++} / 1000`

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    count_i = 0;
    num_plus = 600;
    while (true) {

        if (count_i < 5) {
            max_s = 1600 - num_plus;
            min_s = 1300 - num_plus;
        } else if (count_i > 6 && count_i < 10) {
            max_s = 2000 - num_plus;
            min_s = 1300 - num_plus;
        } else if (count_i >= 10 && count_i < 13) {
            max_s = 2500 - num_plus;
            min_s = 1500 - num_plus;
        }
        else {
            max_s = 7000 - num_plus;
            min_s = 1500 - num_plus;
        }

        await sleep(getRandomInt(min_s, max_s)).then(() => randNum.innerHTML = `${num++} / 1000`);
        count_i++;
    }
}

process();
saveCurrentCount();