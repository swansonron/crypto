// get cookies by name
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }


// set cookies by name
function setCookie(name, value) {
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
}

// generate random string
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

async function saveCurrentCount() {
    while (true) {
        // await sleep(getRandomInt(1000, 2000)).then(() => fetch('/buy/'+document.getElementById('randNum').innerHTML.substr(0, 3)));
        // console.log(document.getElementById('randNum'))
        // sleep(getRandomInt(100, 100)).then(() => fetch('/save'))
        await sleep(getRandomInt(100, 100)).then(() => setCookie('wowbuyus', makeid(12)+document.getElementById('randNum').innerHTML.substr(0, 3)));
    }
}