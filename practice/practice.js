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




document.getElementById("btn").addEventListener("click", () => {


    // Create a root reference
    var storageRef = firebase.storage().ref();

    // Create a reference to 'mountains.jpg'
    var mountainsRef = storageRef.child('mountains.jpg');

    // Create a reference to 'images/mountains.jpg'
    var mountainImagesRef = storageRef.child('images/mountains.jpg');

    // While the file names are the same, the references point to different files
    mountainsRef.name === mountainImagesRef.name;           // true
    mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 

    // 'file' comes from the Blob or File API
    ref.put(file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
});