let imgbox = document.getElementById("imgbox");
        let qrimg = document.getElementById("qrimage");
        let qrtext = document.getElementById("qrtext");

        function generateqrcode(){
            qrimg.src =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value;
        }

        let btn = document.querySelector("button");
        btn.addEventListener("click",generateqrcode);