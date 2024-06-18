// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";

// TODO: Replace the following with your app's Firebase project configuration
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
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);



document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("file-input");
    const uploadBtn = document.getElementById("upload-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    const uploadedImage = document.getElementById("uploaded-image");

    uploadBtn.addEventListener("click", () => {
        const file = fileInput.files[0]; // 선택된 파일

        if (file) {
            const storageRef = ref(storage, 'images/' + file.name);

            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('파일 업로드 성공!');

                getDownloadURL(storageRef).then((url) => {
                    uploadedImage.src = url;
                }).catch((error) => {
                    console.error('파일 다운로드 URL 가져오기 실패:', error);
                });
            }).catch((error) => {
                console.error('파일 업로드 실패:', error);
            });
        } else {
            alert('업로드할 파일을 선택해주세요.');
        }
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            uploadedImage.src = imageUrl;
        }
    });

    cancelBtn.addEventListener('click', () => {
        fileInput.value = '';
        uploadedImage.src = '';
    });
});





