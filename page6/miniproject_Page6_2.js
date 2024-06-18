const firebaseConfig = {
    apiKey: "AIzaSyBSLOoLl71-u4grh5-LQ3J9WusOfgeVsoA",
    authDomain: "miniproject-gh.firebaseapp.com",
    projectId: "miniproject-gh",
    storageBucket: "miniproject-gh.appspot.com",
    messagingSenderId: "401643697547",
    appId: "1:401643697547:web:15ed675e3ee384b22d6b8e",
    measurementId: "G-2TPQ7YS2GF"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function writeUserData(title, review) {
    database.ref("update/" + title).set({
        review: review
    });
}

function pagemove() {
    window.location.href = '../page5/miniproject_Page5.html';
}


let submitBtn = document.getElementById("submit-btn"); // 작성 확인 버튼 요소 불러오기
let endBtn = document.getElementById("endBtn");

submitBtn.addEventListener("click", () => {
    let title = document.getElementsByClassName("titleArea")[0].value;
    let review = document.getElementsByClassName("reviewArea")[0].value;
    writeUserData(title, review);
});

endBtn.addEventListener("click", ()=>{
    pagemove();
});