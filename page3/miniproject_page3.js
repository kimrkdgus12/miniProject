// email 의 domain 주소를 선택하면 직접 입력해야하는 입력 창이 선택한 domain 주소로 바뀜
document.getElementById('emaildomain').addEventListener('change', function () {
    var selectedValue = this.value;
    if (selectedValue) {
        document.getElementById('email2').value = selectedValue;
    } else {
        document.getElementById('email2').value = '';
    }
});


let idInput = document.getElementById("idInput");
let passwordInput = document.getElementById("passwordInput");
let passwordCheckInput = document.getElementById("passwordCheckInput");
let nickInput = document.getElementById("nickInput");
let phoneNumberInput = document.getElementById("phoneNumberInput");
let email1Input = document.getElementById("email1");
let signUpEndBtn = document.getElementById("signUpEndBtn");


// 가입완료 버튼을 눌렀을 때 다음 페이지로 넘어가게 하는 함수
function nextPage() {
    window.location.href = '../page4/miniproject_page4.html';
}


signUpEndBtn.addEventListener("click", () => {
    if (idInput.value === "") {
        alert("아이디를 입력해주세요.");
    } else if (passwordInput.value === "") {
        alert("비밀번호를 입력해주세요.");
    } else if (passwordCheckInput.value === "") {
        alert("비밀번호가 확인되지 않았습니다.");
    } else if (passwordCheckInput.value !== passwordInput.value) {
        alert("비밀번호가 동일하지 않습니다.");
    } else if (nickInput.value === "") {
        alert("사용하실 닉네임을 만들어주세요.");
    } else if (phoneNumberInput.value === "") {
        alert("전화번호를 입력해주세요.");
    } else if (!/^\d+$/.test(phoneNumberInput.value)) {
        alert("전화번호 형식이 올바르지 않습니다.");
    } else if (email1Input.value === "") {
        alert("이메일을 입력해주세요.");
    } else {
        const id = idInput.value;
        const password = passwordInput.value;
        const nick = nickInput.value;
        const phoneNumber = phoneNumberInput.value;
        const email1 = email1Input.value;
        const email2 = document.getElementById('email2').value
        const email = email1 + "@" + email2;

        window.localStorage.setItem("id", id);
        window.localStorage.setItem("password", password);
        window.localStorage.setItem("nick", nick);
        window.localStorage.setItem("phoneNumber", phoneNumber);
        window.localStorage.setItem("email", email);

        nextPage();
    }
});