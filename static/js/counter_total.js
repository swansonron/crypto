let count_ = document.getElementById("count");
let price = document.getElementById("price").innerHTML.replace('eth', '');
let max = document.getElementById("max").innerHTML;
// console.log(count_);
// console.log(price);
// console.log(max);

document.getElementById("buttonCountPlus").onclick = function () {
    let countPlus = count_.innerHTML;
    if (+countPlus < max) {
        count_.innerHTML++;
        var c = count_.innerHTML;
        new_total = (c * price).toFixed(2);
        if (new_total[3] != 0){
            new_total = (c * price).toFixed(2);
        }else {
            new_total = (c * price).toFixed(1);
        }
        total.innerHTML = `${new_total}`;
    }
};

document.getElementById("buttonCountMinus").onclick = function () {
    let countMinus = count_.innerHTML;
    if (+countMinus >= 2) {
        count_.innerHTML--;
        var c = count_.innerHTML
        new_total = (c * price).toFixed(2);
        if (new_total[3] != 0){
            new_total = (c * price).toFixed(2);
        }else {
            new_total = (c * price).toFixed(1);
        }
        total.innerHTML = `${new_total}`;
    }
};

// document.getElementById("buttonSetMax").onclick = function () {
//     count.innerHTML = max;
//     var c = count.innerHTML
//     new_total = (c * price).toFixed(2);
//         if (new_total[3] != 0){
//             new_total = (c * price).toFixed(2);
//         }else {
//             new_total = (c * price).toFixed(1);
//         }
//     total.innerHTML = `${new_total} ETH`;
// }