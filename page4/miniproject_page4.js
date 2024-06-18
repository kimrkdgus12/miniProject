const firebaseConfig = {
    apiKey: "AIzaSyBSLOoLl71-u4grh5-LQ3J9WusOfgeVsoA",
    authDomain: "miniproject-gh.firebaseapp.com",
    projectId: "miniproject-gh",
    storageBucket: "miniproject-gh.appspot.com",
    messagingSenderId: "401643697547",
    appId: "1:401643697547:web:15ed675e3ee384b22d6b8e",
    measurementId: "G-2TPQ7YS2GF"
};

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

let id = window.localStorage.getItem("id");
let password = window.localStorage.getItem("password");
let nick = window.localStorage.getItem("nick");
let phoneNumber = window.localStorage.getItem("phoneNumber");
let email = window.localStorage.getItem("email");

welcomeNick = document.getElementById("welcome_nick")
welcomeNick.innerText = `Welcome! "${nick}" Curator`

function writeUserData(userId, password, nick, phoneNumber, email, category) {
    database.ref("users/" + userId).set({
        password: password,
        nick: nick,
        phoneNumber: phoneNumber,
        email: email,
        category: category
    });
}

function nextPage() {
    window.location.href = '../page5/miniproject_page5.html';
}

let icon1 = document.getElementById("icon1")
let icon2 = document.getElementById("icon2")
let icon3 = document.getElementById("icon3")
let icon4 = document.getElementById("icon4")
let icon5 = document.getElementById("icon5")

let endBtn = document.getElementById("EndBtn");

let category;

icon1.addEventListener("click", () => {
    category = "music";
    console.log(category);
    writeUserData(id, password, nick, phoneNumber, email, category);
});

icon2.addEventListener("click", () => {
    category = "movie";
    console.log(category);
    writeUserData(id, password, nick, phoneNumber, email, category);
});

icon3.addEventListener("click", () => {
    category = "book";
    console.log(category);
    writeUserData(id, password, nick, phoneNumber, email, category);
});

icon4.addEventListener("click", () => {
    category = "lifestyle";
    console.log(category);
    writeUserData(id, password, nick, phoneNumber, email, category);
});

icon5.addEventListener("click", () => {
    category = "exhibition";
    console.log(category);
    writeUserData(id, password, nick, phoneNumber, email, category);
});

endBtn.addEventListener("click", () => {
    nextPage();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const divIcons = document.querySelectorAll('.divIcon');

    divIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            divIcons.forEach(i => i.classList.remove('clicked'));
            icon.classList.add('clicked');
        });
    });
});

window.localStorage.removeItem("id");
window.localStorage.removeItem("password");
window.localStorage.removeItem("nick");
window.localStorage.removeItem("phoneNumber");
window.localStorage.removeItem("email");
window.localStorage.removeItem("category");