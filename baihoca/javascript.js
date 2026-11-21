var hoCa = document.getElementById("content");


var dsNen = [
    "linear-gradient(to bottom, #38bdf8 0%, #0284c7 45%, #0c4a6e 100%)",
    "linear-gradient(to bottom, #0f172a 0%, #1e3a8a 50%, #020617 100%)",
    "linear-gradient(to bottom, #fb923c 0%, #f43f5e 45%, #1e1b4b 100%)",
    "linear-gradient(to bottom, #2dd4bf 0%, #0d9488 50%, #042f2e 100%)"
];
var chiSoNen = 0;

function doiCanhNen() {
    chiSoNen++;
    if (chiSoNen >= dsNen.length) {
        chiSoNen = 0;
    }
    hoCa.style.background = dsNen[chiSoNen];
}


var dangTamDung = false;

function tamDung() {
    var nutDung = document.getElementById("btn-pause");
    var cacDoiTuong = document.querySelectorAll(".swim-item, .bubble, .food");
    var trangThaiMoi;

    if (dangTamDung == false) {
        trangThaiMoi = "paused";
        nutDung.innerHTML = "Chạy tiếp";
        dangTamDung = true;
    } else {
        trangThaiMoi = "running";
        nutDung.innerHTML = "Tạm dừng";
        dangTamDung = false;
    }

    for (var i = 0; i < cacDoiTuong.length; i++) {
        cacDoiTuong[i].style.animationPlayState = trangThaiMoi;
    }
}


function thaMoi() {
    for (var i = 0; i < 8; i++) {
        var hatMoi = document.createElement("div");
        hatMoi.className = "food";

        var viTriX = Math.floor(Math.random() * (window.innerWidth - 100)) + 50;
        var doTre = (Math.random() * 1.2).toFixed(1);

        hatMoi.style.left = viTriX + "px";
        hatMoi.style.animationDelay = doTre + "s";

        hoCa.appendChild(hatMoi);

        setTimeout(function(el) {
            return function() { el.remove(); };
        }(hatMoi), 5200);
    }
}

var dangPhatNhac = false;

function batTatNhac() {
    var nhac = document.getElementById("nhac-nen");
    var nutNhac = document.getElementById("btn-music");

    if (dangPhatNhac == false) {
        nhac.play();
        nutNhac.innerHTML = "Tắt nhạc";
        dangPhatNhac = true;
    } else {
        nhac.pause();
        nutNhac.innerHTML = "Bật nhạc";
        dangPhatNhac = false;
    }
}


hoCa.onclick = function(event) {
    if (event.target.tagName == "BUTTON") {
        return;
    }

    var bongBong = document.createElement("div");
    bongBong.className = "bubble";

    bongBong.style.left = event.clientX + "px";
    bongBong.style.top = event.clientY + "px";
    bongBong.style.bottom = "auto";

    var kichThuoc = Math.floor(Math.random() * 18) + 12;
    bongBong.style.width = kichThuoc + "px";
    bongBong.style.height = kichThuoc + "px";
    bongBong.style.animationDuration = "4s";

    hoCa.appendChild(bongBong);

    setTimeout(function() {
        bongBong.remove();
    }, 4000);
};