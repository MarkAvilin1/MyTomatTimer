let cond = true;
let sCond = true;
let lCond = true;
let tSec = 60;
let sSec = 60;
let lSec = 60;
let tMin = 24;
let sMin = 4;
let lMin = 14;

function playSound() {
    let sound = new Audio('2.mp3');
    sound.play();
}

function tTimerSetting() {
    let timer1 = setTimeout(timeWork,1000);
    return timer1;
}

function sTimerSetting() {
    let timer2 = setTimeout(shortBreak,1000);
    return timer2;
}

function lTimerSetting() {
    let timer3 = setTimeout(longBreak,1000);
    return timer3;
}

/////////////////////////////////////////////

function timeWork(){
        
    let second = document.getElementById('sec');
    let minuet = document.getElementById('min');
    
    if (cond == true) {
        document.getElementById('sec').innerHTML = '59';
        document.getElementById('min').innerHTML = '24';
        sCond = false;
        lCond = false;
        tSec--;
        tTimerSetting();

        if (tSec <= 9) {
            second.innerHTML = '0' + tSec;
        }else {
            second.innerHTML = tSec;
        }

        if (tSec == 0) {
            
            tSec = 60;
            tMin--;
            
            if (tMin <= 9){
                minuet.innerHTML = '0' + tMin;
            }else {
                minuet.innerHTML = tMin;
            }

            if (tMin <= 0) {
                cond = false;
                sCond = true;
                lCond = true;
                playSound();
            }
        }
    }  
}

document.getElementById('btn1').onclick = function() {
    timeWork();
    tSec = 60;
    tMin = 24;
}

document.getElementById('btn2').onclick = function() {
    cond = false;
    sec = 00;
    min = 00;
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
}

///////////////////////////////////////////////////////////

function shortBreak(){
        
    let second = document.getElementById('sSec');
    let minuet = document.getElementById('sMin');
    
    if (sCond == true) {
        document.getElementById('sSec').innerHTML = '59';
        document.getElementById('sMin').innerHTML = '04';
        cond = false;
        lCond = false;
        sSec--;
        sTimerSetting();

        if (sSec <= 9) {
            second.innerHTML = '0' + sSec;
        }else {
            second.innerHTML = sSec;
        }

        if (sSec == 0) {
            sSec = 60;

            sMin--;
            if (sMin == -1){
                cond = true;
                sCond = false;
                lCond = true;
                playSound();
            }else {
                minuet.innerHTML = '0' + sMin;
            } 
        }
    }  
}

document.getElementById('btnS1').onclick = function() {
    shortBreak();
    sSec = 60;
    sMin = 4;
}

document.getElementById('btnS2').onclick = function() {
    sCond = false;
    sSec = 00;
    sMin = 00;
    document.getElementById('sSec').innerHTML = '00';
    document.getElementById('sMin').innerHTML = '00';
}

////////////////////////////////////////////////////

function longBreak(){
        
    let second = document.getElementById('lSec');
    let minuet = document.getElementById('lMin');
    
    if (lCond == true) {

        document.getElementById('lSec').innerHTML = '59';
        document.getElementById('lMin').innerHTML = '14';
        sCond = false;
        Cond = false;

        lSec--;
        lTimerSetting();

        if (lSec <= 9) {
            second.innerHTML = '0' + lSec;
        }else {
            second.innerHTML = lSec;
        }

        if (lSec == 0) {
            lSec = 60;

            lMin--;
            if (lMin <= 9){
                minuet.innerHTML = '0' + lMin;
            }else {
                minuet.innerHTML = lMin;
            }

            if (lMin == 0) {
                Cond = true;
                sCond = true;
                lCond = false;
                playSound();
            }
        }
    }  
}

document.getElementById('btnL1').onclick = function() {
    longBreak();
    lSec = 60;
    lMin = 14;
}

document.getElementById('btnL2').onclick = function() {
    lCond = false;
    lSec = 00;
    lMin = 00;
    document.getElementById('lSec').innerHTML = '00';
    document.getElementById('lMin').innerHTML = '00';
}

///////////////////////////////////////////

document.getElementById('restart').onclick = function() {
    cond = true;
    sCond= true;
    lCond= true;
    tSec = 60;
    sSec = 60;
    lSec = 60;
    tMin = 24;
    sMin = 4;
    lMin = 14;

    document.getElementById('sec').innerHTML = '00';
    document.getElementById('min').innerHTML = '25';
    document.getElementById('sSec').innerHTML = '00';
    document.getElementById('sMin').innerHTML = '05';
    document.getElementById('lSec').innerHTML = '00';
    document.getElementById('lMin').innerHTML = '15';
}