let signUpForm = document.querySelector ( "#signUpForm" );
let fullName = document.querySelector ( "#fullName" );
let userName = document.querySelector ( "#userName" );
let eMail = document.querySelector ( "#eMail" );
let eMailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passWord = document.querySelector ( "#passWord" );
let passWordRegEx = /^(?=.*\d).{8,}$/;
let passWordStrength = document.querySelector ( "#passWordStrength" );
let confirmPassWord = document.querySelector ( "#confirmPassWord" );
let tickSVG = document.querySelectorAll ( ".tickSVG" );
let conFirmPassSVG = document.querySelector ( "#conFirmPassSVG" );
let signUpBtn = document.querySelector ( "#signUpBtn" );
let strength1 = document.querySelector ( "#strength1" );
let strength2 = document.querySelector ( "#strength2" );
let strength3 = document.querySelector ( "#strength3" );
let strength4 = document.querySelector ( "#strength4" );
let eMailPara = document.querySelector ( "#eMailPara" );
let PassWordPara = document.querySelector ( "#PassWordPara" );
let conFirmPassPara = document.querySelector ( "#conFirmPassPara" );
let validEmail = false, validPassWord = false, validConFirmPass = false;
function isValid ( regEx, val ) {
    return regEx.test ( val );
}
function eleRemoveAdd ( Ele, removedClass, addedClass ) {
    Ele.classList.remove ( removedClass );
    Ele.classList.add ( addedClass );
}
eMail.addEventListener ( "input" , (event)=>{
    let currSVG = event.target.closest ( ".eachLineOfForm").querySelector ( ".tickSVG" );
    if ( isValid ( eMailRegEx, eMail.value ) ) {
        validEmail = true;
        if ( currSVG.classList.contains ( "elementHide" ) ) {
            eleRemoveAdd ( currSVG, "elementHide", "elementShow" );
        }
    }
    else {
        validEmail = false;
        if ( currSVG.classList.contains ( "elementShow" ) ) {
            eleRemoveAdd ( currSVG, "elementShow", "elementHide" );
        }
    }
})
function checkPassAndConfirmPass(){
    if ( passWord.value !== "" && passWord.value === confirmPassWord.value ) {
        validConFirmPass = true;
        if ( conFirmPassSVG.classList.contains ( "elementHide" ) ) {
            eleRemoveAdd ( conFirmPassSVG, "elementHide", "elementShow" );
        }
    }
    else {
        validConFirmPass = false;
        if ( conFirmPassSVG.classList.contains ( "elementShow" ) ) {
            eleRemoveAdd ( conFirmPassSVG, "elementShow", "elementHide" );
        }
    }
}
function strengthIndicator(){
    let capital = false, small = false, symbol = false, number = false;
    for ( let i = 0 ; i < passWord.value.length ; i++ ) {
        if ( passWord.value[i] >= 'A' && passWord.value[i] <= 'Z' ) capital = true ;
        else if ( passWord.value[i] >= 'a' && passWord.value[i] <= 'z' ) small = true ;
        else if ( passWord.value[i] >= '0' && passWord.value[i] <= '9' ) number = true ;
        else symbol = true ;
    }
    let Get = 0;
    if ( capital ) Get++ ;
    if ( small ) Get++ ;
    if ( symbol ) Get++ ;
    if ( number ) Get++ ;
    if ( Get === 4 && passWord.value.length >= 12 ) {
        strength1.style.backgroundColor = "#2fff00"; strength2.style.backgroundColor = "#2fff00"; strength3.style.backgroundColor = "#2fff00"; strength4.style.backgroundColor = "#2fff00";
    }
    else if ( Get === 4 && passWord.value.length >= 8 ) {
        strength1.style.backgroundColor = "#dff01f"; strength2.style.backgroundColor = "#dff01f"; strength3.style.backgroundColor = "#dff01f"; strength4.style.backgroundColor = "black";
    }
    else if ( Get === 3 && passWord.value.length >= 12 ) {
        strength1.style.backgroundColor = "#dff01f"; strength2.style.backgroundColor = "#dff01f"; strength3.style.backgroundColor = "#dff01f"; strength4.style.backgroundColor = "black";
    }
    else if ( Get === 3 && passWord.value.length >= 8 ) {
        strength1.style.backgroundColor = "#ffa600"; strength2.style.backgroundColor = "#ffa600"; strength3.style.backgroundColor = "black"; strength4.style.backgroundColor = "black";
    }
    else if ( Get === 2 && passWord.value.length >= 12 ) {
        strength1.style.backgroundColor = "#ffa600"; strength2.style.backgroundColor = "#ffa600"; strength3.style.backgroundColor = "black"; strength4.style.backgroundColor = "black";
    }
    else {
        strength1.style.backgroundColor = "#ff0000"; strength2.style.backgroundColor = "black"; strength3.style.backgroundColor = "black"; strength4.style.backgroundColor = "black";
    }
}
passWord.addEventListener ( "input" , (event)=>{
    let currSVG = event.target.closest ( ".eachLineOfForm").querySelector ( ".tickSVG" );
    if ( isValid ( passWordRegEx, passWord.value ) ) {
        validPassWord = true;
        if ( currSVG.classList.contains ( "elementHide" ) ) {
            eleRemoveAdd ( currSVG, "elementHide", "elementShow" );
        }
    }
    else {
        validPassWord = false;
        if ( currSVG.classList.contains ( "elementShow" ) ) {
            eleRemoveAdd ( currSVG, "elementShow", "elementHide" );
        }
    }
    checkPassAndConfirmPass();
    strengthIndicator();
    if ( passWord.value !== "" ) {
        if ( passWordStrength.classList.contains ( "hideWithHeightZero" ) ) {
            eleRemoveAdd ( passWordStrength, "hideWithHeightZero", "showWithNormalHeight" );
        }
    }
    else {
        if ( passWordStrength.classList.contains ( "showWithNormalHeight" ) ) {
            eleRemoveAdd ( passWordStrength, "showWithNormalHeight", "hideWithHeightZero" );
        }
    }
})
confirmPassWord.addEventListener ( "input" , (event)=>{
    checkPassAndConfirmPass();
})
signUpForm.addEventListener ( "click" , (event)=>{
    if ( event.target.classList.contains ( "passWordShowHideBtn" ) === false ) return ;
    let currEyeBar = event.target.closest ( ".eachLineOfForm" ).querySelector ( ".eyeClosingBar" );
    let currInput = event.target.closest ( ".eachLineOfForm" ).querySelector ( ".inputField" );
    if ( currEyeBar.classList.contains ( "eyeClose" ) ) {
        eleRemoveAdd ( currEyeBar, "eyeClose", "eyeOpen" );
        currInput.type = "text";
    }
    else {
        eleRemoveAdd ( currEyeBar, "eyeOpen", "eyeClose" );
        currInput.type = "password";
    }
})
signUpBtn.addEventListener ( "click" , (event)=>{
    event.preventDefault();
    if ( validEmail ) {
        if ( eMailPara.classList.contains ( "showWithNormalHeight" ) ) {
            eleRemoveAdd ( eMailPara, "showWithNormalHeight", "hideWithHeightZero" );
        }
    }
    else {
        if ( eMailPara.classList.contains ( "hideWithHeightZero" ) ) {
            eleRemoveAdd ( eMailPara, "hideWithHeightZero", "showWithNormalHeight" );
        }
    }
    if ( validPassWord ) {
        if ( PassWordPara.classList.contains ( "showWithNormalHeight" ) ) {
            eleRemoveAdd ( PassWordPara, "showWithNormalHeight", "hideWithHeightZero" );
        }
    }
    else {
        if ( PassWordPara.classList.contains ( "hideWithHeightZero" ) ) {
            eleRemoveAdd ( PassWordPara, "hideWithHeightZero", "showWithNormalHeight" );
        }
    }
    if ( validConFirmPass ) {
        if ( conFirmPassPara.classList.contains ( "showWithNormalHeight" ) ) {
            eleRemoveAdd ( conFirmPassPara, "showWithNormalHeight", "hideWithHeightZero" );
        }
    }
    else {
        if ( conFirmPassPara.classList.contains ( "hideWithHeightZero" ) ) {
            eleRemoveAdd ( conFirmPassPara, "hideWithHeightZero", "showWithNormalHeight" );
        }
    }
    if ( fullName.value === "" || userName.value === "" || !validEmail || !validPassWord || !validConFirmPass ) return;
    signUpForm.reset();
    for ( let i = 0 ; i <= 2 ; i++ ) {
        eleRemoveAdd ( tickSVG[i], "elementShow", "elementHide" );
    }
    eleRemoveAdd ( passWordStrength, "showWithNormalHeight", "hideWithHeightZero" );
    validEmail = false; validPassWord = false; validConFirmPass = false;
})
