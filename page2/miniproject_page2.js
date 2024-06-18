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



// const loginForm = document.getElementById('loginForm')
// loginForm.addEventListener('submit', function (event) {
//     event.preventDefault()

//     const username = document.getElementById('username').value
//     const passWord = document.getElementById('passWord').value

//     if (username === "" || passWord === "") {
//         alert('빈칸을 입력하세요')
//     } else {
//         loginForm.submit()
//     }

// })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mainPage() {
    window.location.href = '../page1/miniproject_Page1_2.html'; // 메인 페이지 넣으시면 됩니당
}

function readUserData() {
    database.ref("users/").on("value", (snapshot)=>{
        // 실시간 데이터 베이스 접근
        
        let data = snapshot.val();
        let keys = Object.keys(data);

        let username = document.getElementById("username");
        let passWord = document.getElementById("passWord");

        for (i = 0; i < keys.length; i++) {
            if (username.value === keys[i] && passWord.value === data[keys[i]].password) {
                mainPage();
                break;
            } else {
                if (i === (keys.length - 1)) {
                    alert("아이디와 비밀번호를 다시 입력해주세요.");
                }
                continue;
            }
        }
    });
}


let logInBtn = document.getElementById("logInBtn");

document.getElementById("passWord").addEventListener("keydown", (event)=>{
    if (event.key === "Enter") {
        readUserData();
    }
});

logInBtn.addEventListener("click", ()=>{
    readUserData();
});