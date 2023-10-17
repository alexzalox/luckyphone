// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// 現在時間
const timeEl = document.querySelector("#date");
function getTime() {
    let date = new Date();
    timeEl.innerText = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

    setTimeout(getTime, 1000);

}


// 號碼檢查
const resultText = [['1', '手機靈數1 閒雜人等勿近', '這個數字會帶給你獨立自主的精神，但是也因此而有些孤僻的傾向，這支手機常常會沒接到電話，或是會過濾掉不少人的電話，所以大部份的時候都是你在打電話給別人，別人可能會因為一直打不通你的電話而放棄哩！'], ['2', '手機靈數2 情人專用熱線', '這個手機號碼會有強大的待機功能，可能會持續等待他人回電或是打電話給你，通常很少漏接正在等待的電話，2號數字會讓你接電話的次數比打電話多得多，尤其最重要的，一定不會漏接情人或是心儀對象的來電！'], ['3', '手機靈數3 強力發電機', '3號手機可以說是手機中的極品，因為他掌管的就是手機最重要的溝通交流功能，許多當面都很難溝通的對象，遇到這個號碼簡直是救星，立刻變得溝通無障礙！這個號碼很少有接不到電話的困擾，非常適合聊天使用。'], ['4', '手機靈數4 超級事務機', '4號手機最大的特點在於沒有用的來電是接不到的，能夠接到的電話必定都是無事不登三寶殿，越是重要的事就越不容易漏接，所以依此類推，那些找你吃喝玩樂的來電就很少打得進來了，因而最適合推薦給忙碌的人使用。'], ['5', '手機靈數5 超強資訊站', '靈數5的手機才真是最強收發的超強資訊站，不管到哪裡，不管要收什麼，5號機絕對不會讓你失望，就算只是小廣告、會員通知，這個號碼都照單全收，絕對不會漏接任何資訊。另外這個號碼也最適合全區漫遊的服務。'], ['6', '手機靈數6 無敵浪漫手機', '靈數6號的手機是非常浪漫的，也就是說最適合用手機談戀愛，如果想用電話讓感情加溫，那麼6號是最好的選擇。當然不是想拿這個機子來談戀愛的人，其實就比較不宜選這個號碼，因為這支手機是很容易營造曖昧氣氛的。'], ['7', '手機靈數7 超性格派機種', '靈數7的手機肯定是最性格的手機了啦！平常的來電大多愛接不接的，會增加你特立獨行的氣質，而且通常7號手機八卦話題極少，溝通想法與事務的機會比較多，所以如果覺得自己不夠酷、不夠有個性，就選用7號吧！'], ['8', '手機靈數8 大發利巿機', '手機靈數8的人人脈極廣，而且通常都是有用的人脈，讓你的手機消息靈通，但卻又沒有不中用的怪訊息。8號是一個順暢的數字，非常適合時常需要交流應酬的人，8號的手機將帶給你旺盛的氣盛，還有意外獲利的機會哦！'], ['9', '手機靈數9 奇人異事機', '9號手機是一支什麼電話都會接到的機子，而且通常接到的閒雜電話比有用的電話多得多，也時有意外的斷線。這真是一支奇怪的號碼，不過這個號碼會為你帶來感應力，你常常有神準的預知力，甚至知道誰就要打電話來了！']]
const phoneEl = document.querySelector("#phone-number");

const analyticsEl = document.querySelector("#analytics");

// const resultEl = document.querySelector("#result");
// const resultTextEl = document.querySelector("#result-text");

const resultComment = ['手機靈數1 閒雜人等勿近', '手機靈數2 情人專用熱線', '手機靈數3 強力發電機', '手機靈數4 超級事務機',
    '手機靈數5 超強資訊站', '手機靈數6 無敵浪漫手機', '手機靈數7 超性格派機種', '手機靈數8 大發利巿機', '手機靈數9 奇人異事機'];

console.log(phoneEl, analyticsEl, resultEl, resultTextEl, timeEl);

function analytics(item) {
    // console.log('phone', item);
    const phone = document.querySelector("#phone-number-" + item);
    let phoneNumber = phone.value;
    if (phoneNumber == "") {
        alert("請輸入手機號碼");
        return;
    }
    if (phoneNumber.length < 10) {
        alert("手機號碼為10個數字!");
        return;
    }
    //  使用正則式
    const re = /09\d{8}/;
    if (!re.test(phoneNumber)) {
        alert("手機號碼格式不正確!");
        return;
    }
    console.log(phoneNumber);
    let code = analyticsPhoneNumber(phoneNumber);
    let result = resultText[code - 1];
    flashResult(result, item);
}


// 亂數效果
// 全域變數
let flashCount = 0;
function flashResult(result, item) {
    const resultElItem = document.querySelector("#result" + item);
    const resultTextElItem = document.querySelector("#result-text-" + item);
    // 顯示亂數結果 
    let comment = resultComment[getRandInt(0, resultComment.length - 1)];
    resultElItem.innerText = comment;
    // 三元運算子
    // resultEl.style.color = (resultEl.innerText == "吉" ||
    //     resultEl.innerText == "吉帶凶") ? "yellow" : "black";
    // 製作閃爍功能
    if (flashCount++ < 120) {
        setTimeout(
            function () {
                flashResult(result, item);
            }
            , getRandInt(5, 15));
        return;
    }

    flashCount = 0;
    // 最後結果
    console.log(result);
    resultElItem.innerText = result[1];
    resultTextElItem.innerText = result[2];

    // 三元運算子
    //     resultEl.style.color = (resultEl.innerText == "吉" ||
    //         resultEl.innerText == "吉帶凶") ? "yellow" : "black";
}

// 亂數
function getRandInt(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// 計算靈數
function analyticsPhoneNumber(phoneNumber) {
    var count = 0
    for (i = 0; i < phoneNumber.length; i++) {
        count += parseInt(phoneNumber[i]);
    }
    console.log(count);
    console.log(count / 10 + count % 10);
    let code = parseInt(count / 10 + count % 10);
    while (code >= 10) {
        code = parseInt(code / 10 + code % 10);
    }
    console.log('analyticsPhoneNumber code', code);

    return code;
}