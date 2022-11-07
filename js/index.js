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
const resultText = [['01', '大展鴻圖，信用得固，無遠弗界，可獲成功', '吉'], ['02', '根基不固，搖搖欲墜，一盛一衰，勞而無功', '凶'], ['03', '根深蒂固，蒸蒸日上，如意吉祥，百事順遂', '吉'], ['04', '坎坷前途，苦難折磨，非有毅力，難望成功', '凶'], ['05', '陰陽和合，生意欣榮，名利雙收，後福重重', '吉'], ['06', '萬寶雲集，天降幸運，立志奮發，可成大功', '吉'], ['07', '專心經營，和氣致祥，排除萬難，必獲成功', '吉'], ['08', '努力發達，貫徹志望，不忘進退，成功可期', '吉'], ['09', '雖抱奇才，有才無命，獨營無力，財利無望', '凶'], ['10', '烏雲遮月，暗淡無光，空費心力，徒勞無功', '凶'], ['11', '草木逢春，枯葉沾露，穩健著實，必得人望', '吉'], ['12', '薄弱無力，孤立無搖，外祥內苦，謀事難成', '凶'], ['13', '天賦吉運，能得人望，善用智慧，必獲成功', '吉'], ['14', '忍得苦難，必有後福，是成是敗，惟靠堅毅', '凶'], ['15', '謙恭做事，必得人和，大事成就，一定興隆', '吉'], ['16', '能獲衆望，成就大業，名利雙收，盟主四方', '吉'], ['17', '排除萬難，有貴人助，把握時機，可得成功', '吉'], ['18', '經商做事，順利昌隆，如能慎始，百事亨通', '吉'], ['19', '成功雖早，慎防空虧，內外不合，障礙重重', '凶'], ['20', '智高志大，歷盡艱難，焦心憂勞，進退兩難', '凶'], ['21', '專心經營，善用智慧，霜雪梅花，春來怒放', '吉'], ['22', '秋草逢霜，懷才不遇，憂愁怨苦，事不如意', '凶'], ['23', '旭日升天，名顯四方，漸次進展，終成大業', '吉'], ['24', '錦繡前程，須靠自力，多用智謀，能奏大功', '吉'], ['25', '天時地利，再得人格，講信修睦，即可成功', '吉'], ['26', '波瀾起伏，千變萬化，凌駕萬難，必可成功', '凶'], ['27', '一成一敗，一盛一衰，惟靠謹慎，可守成功', '凶帶吉'], ['28', '魚臨旱地，難逃惡運，此數大凶，不如更名', '凶'], ['29', '如龍得雲，青雲直上，智謀奮進，才略奏功', '吉'], ['30', '吉凶參半，得失相伴，投機取巧，如賽一樣', '凶'], ['31', '此數大吉，名利雙收，漸進向上，大業成就', '吉'], ['32', '池中之龍，風雲際會，一躍上天，成功可望', '吉'], ['33', '不可意氣，善用智慧，如能慎始，必可昌隆', '吉'], ['34', '災難不絕，難望成功，此數大凶，不如更名', '凶'], ['35', '中吉之數，進退保守，生意安穩，成就可期', '吉'], ['36', '波瀾重迭，常陷窮困，動不如靜，有才無命', '凶'], ['37', '逢凶化吉，吉人天相，風條雨順，生意興隆', '吉'], ['38', '名雖可得，利則難獲，藝界發展，可望成功', '凶帶吉'], ['39', '雲開見月，雖有勞碌，光明坦途，指日可期', '吉'], ['40', '一勝一衰，浮沉不定，知難而退，自獲天佑', '吉帶凶'], ['41', '天賦吉運，德望兼備，繼續努力，前途無限', '吉'], ['42', '事業不專，十九不成，專心進取，可望成功', '吉帶凶'], ['43', '雨夜之花，外祥內苦，忍耐自重，轉凶爲吉', '吉帶凶'], ['44', '雖用心計，事難遂願，貪功好進，必招失敗', '凶'], ['45', '楊柳遇春，綠葉發枝，衝破難關，一舉成名', '吉'], ['46', '坎坷不平，艱難重重，若無耐心，難望有成', '凶'], ['47', '有貴人助，可成大業，雖遇不幸，浮沉不大', '吉'], ['48', '美化豐實，鶴立雞羣，名利俱全，繁榮富貴', '吉'], ['49', '遇吉則吉，遇凶則凶，惟靠謹慎，逢凶化吉', '凶'], ['50', '吉凶互見，一成一敗，凶中有吉，吉中有凶', '吉帶凶'], ['51', '一盛一衰，浮沉不常，自重自處，可保平安', '吉帶凶'], ['52', '草木逢春，雨過天晴，渡過難關，即獲成功', '吉'], ['53', '盛衰參半，外祥內苦，先吉後凶，先凶後吉', '吉帶凶'], ['54', '雖傾全力，難望成功，此數大凶，最好改名', '凶'], ['55', '外觀隆昌，內隱禍患，克服難關，開出泰運', '吉帶凶'], ['56', '事與願違，終難成功，欲速不達，有始有終', '凶'], ['57', '努力經營，時來運轉，曠野枯草，春來花開', '吉'], ['58', '半凶半吉，浮沉多端，始凶終吉，能保成功', '凶帶吉'], ['59', '遇事猶疑，難望成事，大刀闊斧，始可有成', '凶'], ['60', '黑暗無光，心迷意亂，出爾反爾，難定方針', '凶'], ['61', '雲遮半月，百隱風波，應自謹慎，始保平安', '吉帶凶'], ['62', '煩悶懊惱，事事難展，自防災禍，始免困境', '凶'], ['63', '萬物化育，繁榮之象，專心一意，始能成功', '吉'], ['64', '見異思遷，十九不成，徒勞無功，不如更名', '凶'], ['65', '吉運自來，能享盛名，把握機會，必獲成功', '吉'], ['66', '黑夜漫長，進退維谷，內外不合，信用缺乏', '凶'], ['67', '時來運轉，事事如意，功成名就，富貴自來', '吉'], ['68', '思慮周詳，計劃力行，不失先機，可望成功', '吉'], ['69', '動搖不安，常陷逆境，不得時運，難得利潤', '凶'], ['70', '慘澹經營，難免貧困，此數不吉，最好改名', '凶'], ['71', '吉凶參半，惟賴勇氣，貫徹力行，始可成功', '吉帶凶'], ['72', '利害混集，凶多吉少，得而復失，難以安順', '凶'], ['73', '安樂自來，自然吉祥，力行不懈，終必成功', '吉'], ['74', '利不及費，坐食山空，如無智謀，難望成功', '凶'], ['75', '吉中帶凶，欲速不達，進不如守，可保安詳', '吉帶凶'], ['76', '此數大凶，破產之象，宜速改名，以避厄運', '凶'], ['77', '先苦後甘，先甘後苦，如能守成，不致失敗', '吉帶凶'], ['78', '有得有失，華而不實，須防劫財，始保平安', '吉帶凶'], ['79', '如走夜路，前途無光，希望不大，勞而無功', '凶'], ['80', '得而復失，枉費心機，守成無貪，可保安穩', '吉帶凶'], ['81', '最極之數，還本歸元，能得繁業，發達成功', '吉']];
const phoneEl = document.querySelector("#phone-number");
const analyticsEl = document.querySelector("#analytics");
const resultEl = document.querySelector("#result");
const resultTextEl = document.querySelector("#result-text");
const resultComment = ['吉', '凶', '吉帶凶', '凶帶吉'];

console.log(phoneEl, analyticsEl, resultEl, resultTextEl, timeEl);

function analytics() {
    let phoneNumber = phoneEl.value;
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
    flashResult(result);
}


// 亂數效果
// 全域變數
let flashCount = 0;
function flashResult(result) {
    // 顯示亂數結果 
    let comment = resultComment[getRandInt(0, resultComment.length - 1)];
    resultEl.innerText = comment;
    // 三元運算子
    resultEl.style.color = (resultEl.innerText == "吉" ||
        resultEl.innerText == "吉帶凶") ? "yellow" : "black";
    // 製作閃爍功能
    if (flashCount++ < 120) {
        setTimeout(
            function () {
                flashResult(result);
            }
            , getRandInt(5, 15));
        return;
    }

    flashCount = 0;
    // 最後結果
    console.log(result);
    resultEl.innerText = result[2];
    resultTextEl.innerText = result[1];

    // 三元運算子
    resultEl.style.color = (resultEl.innerText == "吉" ||
        resultEl.innerText == "吉帶凶") ? "yellow" : "black";
}

// 亂數
function getRandInt(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// 計算靈數
function analyticsPhoneNumber(phoneNumber) {
    let fourNumber = phoneNumber.substring(phoneNumber.length - 4, phoneNumber.length);
    console.log(fourNumber);
    // 取得除以80的結果
    console.log(fourNumber / 80);
    // 取得整數部分
    console.log(parseInt(fourNumber / 80));
    // (除以80的結果-整數部分)*80
    let code = parseInt((fourNumber / 80 - parseInt(fourNumber / 80)) * 80);
    code = code < 1 ? 1 : code;
    console.log(code);
    // if (code < 1) {
    //     code = 1;
    // }

    return code;
}