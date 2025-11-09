// =============================================
// ★ Normal モード用データ (GitHub版ベース)
// =============================================
// gimmick_1 のデータを直接埋め込む
const gimmick1InitializationData = [
    {
        "num": 1, "init_data":"chant data = [13, 10, 7, 6, 17, 4]"
    },
    {
        "num": 2, "init_data":"chant data = [50, 15, 22, 5]"
    },
    {
        "num": 3, "init_data":"chant data = [45, 10, 25, 2]"
    }
];
const gimmick1MainData = [
    {
        "num": 1,
        "prob": "create final = 0\nloop num in data {\n\tjudge (harmony num){\n\t}else{\n\t\tset final = final + num\n\t\tjudge (final > 30) {\n\t\t\tbreak\n\t\t}\n\t}\n}"
    },
    {
        "num": 2,
        "prob": "create final = 0\ncreate prime_count = 0\nloop num in data {\n\tjudge (oracle num) {\n\t\t\tset final = final + num\n\t\t\tset prime_count = prime_count + 1\n\t\tjudge (prime_count > 2){\n\t\t\tbreak\n\t\t}\n\t}\n}"
    },
    {
        "num": 3,
        "prob": "create final = 0\ncreate index = 0\nloop num in data {\n\tset index = index + 1\n\tjudge (harmony index) {\n\t\tjudge (harmony num) {\n\t\t\tset final = num\n\t\t\tbreak\n\t\t}\n\t}\n}"
    }
];
const gimmick1FinData = [
    {
        "num": 1,
        "fin": "set final = final * 5\nreveal final"
    },
    {
        "num": 2,
        "fin": "set final = final / 2\nreveal final"
    },
    {
        "num": 3,
        "fin": "set final = final + 11\nreveal final"
    }
];

// gimmick_2 のデータを直接埋め込む
const gimmick2InitializationData = [
    {
        "num": 1, "init_data":"chant data = [5, 20, 15, 10, 25]"
    },
    {
        "num": 2, "init_data":"chant data = [\"x\", \"a\", \"g\", \"p\"]\nchant pos = [3, 1, 4]"
    },
    {
        "num": 3, "init_data":"chant data = [100, 20, 300, 4]"
    }
];
const gimmick2MainData = [
    {
        "num": 1,
        "prob": "frip data\ncreate final = 0\nloop num in data {\n\tjudge (oracle num) {\n\t\tset final = final + num\n\t}\n}"
    },
    {
        "num": 2,
        "prob": "frip data\ncreate num1 = data 1\ncreate num_last = data data\nset final = num1 * num_last"
    },
    {
        "num": 3,
        "prob": "frip data\ncreate final = \"\"\nloop num in data {\n\tset final = final join num\n}"
    }
];
const gimmick2FinData = [
    {
        "num": 1,
        "fin": "set final = final * 3\nreveal final"
    },
    {
        "num": 2,
        "fin": "set final = final / 2\nreveal final"
    },
    {
        "num": 3,
        "fin": "set final = final + 2\nreveal final"
    }
];

const gimmick2AnswerData = [
    {
        "id": "000", "ans": "SUCj"
    },
    {
        "id": "001", "ans": "SUCj"
    },
    {
        "id": "002", "ans": "SUCj"
    },
    {
        "id": "010", "ans": "SUC5"
    },
    {
        "id": "011", "ans": "SUC5"
    },
    {
        "id": "012", "ans": "SUC5"
    },
    {
        "id": "020", "ans": "ERRs"
    },
    {
        "id": "021", "ans": "ERRs"
    },
    {
        "id": "022", "ans": "ERRs"
    },
    {
        "id": "100", "ans": "ERR7"
    },
    {
        "id": "101", "ans": "ERR7"
    },
    {
        "id": "102", "ans": "ERR7"
    },
    {
        "id": "110", "ans": "ERRx"
    },
    {
        "id": "111", "ans": "ERRx"
    },
    {
        "id": "112", "ans": "ERRx"
    },
    {
        "id": "120", "ans": "ERR}"
    },
    {
        "id": "121", "ans": "ERR}"
    },
    {
        "id": "122", "ans": "ERR}"
    },
    {
        "id": "200", "ans": "SUCl"
    },
    {
        "id": "201", "ans": "SUCl"
    },
    {
        "id": "202", "ans": "SUCl"
    },
    {
        "id": "210", "ans": "ERR4"
    },
    {
        "id": "211", "ans": "ERR4"
    },
    {
        "id": "212", "ans": "ERR4"
    },
    {
        "id": "220", "ans": "ERRl"
    },
    {
        "id": "221", "ans": "ERRl"
    },
    {
        "id": "222", "ans": "ERRl"
    }
];

// gimmick_3 のデータを直接埋め込む
const gimmick3InitializationData = [
    {
        "num": 1,
        "init_data": "chant data = [11, 6, 15, 13, 8]"
    },
    {
        "num": 2,
        "init_data": "chant data = [2, 4, 3, 6, 9]"
    },
    {
        "num": 3,
        "init_data": "chant data = [45, 10, 25, 2]"
    }
];
const gimmick3MainData = [
    {
        "num": 1,
        "prob": "create even_sum = 0\ncreate prime_sum = 0\nloop num in data {\n\tjudge (harmony num) {\n\t\tset even_sum = even_sum + num\n\t}\n\tjudge (oracle num) {\n\t\tset prime_sum = prime_sum + num\n\t}\n}\n\nset final = even_sum - prime_sum"
    },
    {
        "num": 2,
        "prob": "create final = 1\nloop num in data {\n\tjudge (oracle num) {\n\n\t} else {\n\t\tset final = final * num\n\t}\n}"
    },
    {
        "num": 3,
        "prob": "create even_count = 0\ncreate odd_count = 0\nloop num in data {\n\tjudge (harmony num) {\n\t\tset even_count = even_count + 1\n\t} else {\n\t\tset odd_count = odd_count + 1\n\t}\n}\n\nset final = even_count - odd_count"
    }
];
const gimmick3FinData = [
    {
        "num": 1,
        "fin": "set final = final - 34\nreveal final"
    },
    {
        "num": 2,
        "fin": "set final = final * 11\nreveal final"
    },
    {
        "num": 3,
        "fin": "set final = final + 11\nreveal final"
    }
];

const gimmick3AnswerData = [
    //3つ目のギミック用の回答データここにかけえええええええええええ！！！！！！！！！！！！！！
    {
        "id": "000", "ans": "5344"
    },
    {
        "id": "001", "ans": "5310"
    },
    {
        "id": "002", "ans": "5301"
    },
    {
        "id": "010", "ans": "5316"
    },
    {
        "id": "011", "ans": "5320"
    },
    {
        "id": "012", "ans": "5386"
    },
    {
        "id": "020", "ans": "5335"
    },
    {
        "id": "021", "ans":  "5311"
    },
    {
        "id": "022", "ans": "5310"
    },
    {
        "id": "100", "ans": "2472"
    },
    {
        "id": "101", "ans": "2477"
    },
    {
        "id": "102", "ans": "2481"
    },
    {
        "id": "110", "ans": "2482"
    },
    {
        "id": "111", "ans": "2476"
    },
    {
        "id": "112", "ans": "2427"
    },
    {
        "id": "120", "ans": "2433"
    },
    {
        "id": "121", "ans": "2411"
    },
    {
        "id": "122", "ans": "2421"
    },
    {
        "id": "200", "ans": "8242"
    },
    {
        "id": "201", "ans": "8201"
    },
    {
        "id": "202", "ans": "8212"
    },
    {
        "id": "210", "ans": "8216"
    },
    {
        "id": "211", "ans": "8250"
    },
    {
        "id": "212", "ans": "8261"
    },
    {
        "id": "220", "ans": "8243"
    },
    {
        "id": "221", "ans": "8200"
    },
    {
        "id": "222", "ans": "8211"
    }
];

// gimmick_4 のデータを直接埋め込む
const gimmick4InitializationData = [
    {
        "num": 1,
        "init_data": "chant data = [\"A\", \"L\", \"E\", \"T\"]\nchant pos = [3, 1, 4]"
    },
    {
        "num": 2,
        "init_data": "chant data = [\"C\", \"O\", \"D\", \"E\", \"X\"] \nchant pos = [2, 4, 1]"
    },
    {
        "num": 3,
        "init_data": "chant data = [\"S\", \"H\", \"I\", \"F\", \"T\"]\nchant pos = [5, 3, 1]"
    }
];
const gimmick4MainData = [
    {
        "num": 1,
        "prob": "frip data\ncreate pos3 = pos 3\ncreate final = data pos3"
    },
    {
        "num": 2,
        "prob": "create char2 = data 2\ncreate char4 = data 4\nset final = char2 join char4"
    },
    {
        "num": 3,
        "prob": "create char1 = data 1\nset final = char1 join char1\nset final = char2 join char4"
    }
];
const gimmick4FinData = [
    {
        "num": 1,
        "fin": "set final = final * 5\nreveal final"
    },
    {
        "num": 2,
        "fin": "set final = final join \"key\"\nreveal final"
    },
    {
        "num": 3,
        "fin": "frip final\nreveal final"
    }
];

const gimmick4AnswerData = [
    {
        "id": "000", "ans": "ES10"
    },
    {
        "id": "001", "ans": "OK08"
    },
    {
        "id": "002", "ans": "OK02"
    },
    {
        "id": "010", "ans": "ES20"
    },
    {
        "id": "011", "ans": "ES10"
    },
    {
        "id": "012", "ans": "OK04"
    },
    {
        "id": "020", "ans": "ES30"
    },
    {
        "id": "021", "ans":  "ES12"
    },
    {
        "id": "022", "ans": "OK06"
    },
    {
        "id": "100", "ans": "ES08"
    },
    {
        "id": "101", "ans": "OK12"
    },
    {
        "id": "102", "ans": "OK08"
    },
    {
        "id": "110", "ans": "ES12"
    },
    {
        "id": "111", "ans": "ES16"
    },
    {
        "id": "112", "ans": "OK12"
    },
    {
        "id": "120", "ans": "ES12"
    },
    {
        "id": "121", "ans": "ES16"
    },
    {
        "id": "122", "ans": "OK12"
    },
    {
        "id": "200", "ans": "ES08"
    },
    {
        "id": "201", "ans": "OK12"
    },
    {
        "id": "202", "ans": "OK08"
    },
    {
        "id": "210", "ans": "ES12"
    },
    {
        "id": "211", "ans": "ES16"
    },
    {
        "id": "212", "ans": "OK12"
    },
    {
        "id": "220", "ans": "ES12"
    },
    {
        "id": "221", "ans": "ES16"
    },
    {
        "id": "222", "ans": "OK12"
    }
];

function getGimmick1Code() {
    try {
        let initIndex, mainIndex, finIndex;
        const storedCombination = sessionStorage.getItem('gimmick1_combination');

        if (storedCombination) {
            const combo = JSON.parse(storedCombination);
            initIndex = combo.init;
            mainIndex = combo.main;
            finIndex = combo.fin;
        } else {
            initIndex = Math.floor(Math.random() * gimmick1InitializationData.length);
            mainIndex = Math.floor(Math.random() * gimmick1MainData.length);
            finIndex = Math.floor(Math.random() * gimmick1FinData.length);
            
            sessionStorage.setItem('gimmick1_combination', JSON.stringify({
                init: initIndex,
                main: mainIndex,
                fin: finIndex
            }));
        }

        const randomInit = gimmick1InitializationData[initIndex].init_data;
        const randomMain = gimmick1MainData[mainIndex].prob;
        const randomFin = gimmick1FinData[finIndex].fin;

        try {
            if (typeof getGimmick1Answer === 'function') {
                const answer = getGimmick1Answer(initIndex, mainIndex, finIndex);
                window.generatedAnswers = window.generatedAnswers || {};
                window.generatedAnswers[0] = answer;
                if (normalSlateData && normalSlateData[0]) normalSlateData[0].answer = answer;
                console.log(`Gimmick1 computed answer: ${answer} (init:${initIndex}, main:${mainIndex}, fin:${finIndex})`);
            } else {
                console.warn('getGimmick1Answer is not defined. Ensure calc_1.js is loaded before slate.js');
            }
        } catch (err) {
            console.warn('Failed to compute Gimmick1 answer:', err);
        }


        // どのデータが使われたかコンソールに記録
        console.log(`Gimmick 1 - Init: ${initIndex}, Main: ${mainIndex}, Fin: ${finIndex}`);

        return `${randomInit}
${randomMain}
${randomFin}`;

    } catch (e) {
        console.error('Gimmick 1 コードの生成に失敗:', e);
        return '<span class="error">コードの生成に失敗しました。</span>';
    }
}

function getGimmick2Code() {
    try {
        let initIndex, mainIndex, finIndex;
        const storedCombination = sessionStorage.getItem('gimmick2_combination');

        if (storedCombination) {
            const combo = JSON.parse(storedCombination);
            initIndex = combo.init;
            mainIndex = combo.main;
            finIndex = combo.fin;
        } else {
            initIndex = Math.floor(Math.random() * gimmick2InitializationData.length);
            mainIndex = Math.floor(Math.random() * gimmick2MainData.length);
            finIndex = Math.floor(Math.random() * gimmick2FinData.length);
            
            sessionStorage.setItem('gimmick2_combination', JSON.stringify({
                init: initIndex,
                main: mainIndex,
                fin: finIndex
            }));
        }

        const randomInit = gimmick2InitializationData[initIndex].init_data;
        const randomMain = gimmick2MainData[mainIndex].prob;
        const randomFin = gimmick2FinData[finIndex].fin;

        console.log(`Gimmick 2 - Init: ${initIndex}, Main: ${mainIndex}, Fin: ${finIndex}`);
        // 答えを ans_2.json から取得
        const answerId = `${initIndex}${mainIndex}${finIndex}`;
        const answerData = gimmick2AnswerData.find(item => item.id === answerId);
        const answer = answerData ? answerData.ans : "ERR0";

        // 答えを保存
        window.generatedAnswers = window.generatedAnswers || {};
        window.generatedAnswers[1] = answer;
        if (normalSlateData && normalSlateData[1]) normalSlateData[1].answer = answer;

        console.log(`Gimmick 2 - Init:${initIndex} Main:${mainIndex} Fin:${finIndex} -> answer=${answer}`);

        return `${randomInit}
${randomMain}
${randomFin}`;

    } catch (e) {
        console.error('Gimmick 2 コードの生成に失敗:', e);
        return '<span class="error">コードの生成に失敗しました。</span>';
    }
}

function getGimmick3Code() {
    try {
        let initIndex, mainIndex, finIndex;
        const storedCombination = sessionStorage.getItem('gimmick3_combination');

        if (storedCombination) {
            const combo = JSON.parse(storedCombination);
            initIndex = combo.init;
            mainIndex = combo.main;
            finIndex = combo.fin;
        } else {
            initIndex = Math.floor(Math.random() * gimmick3InitializationData.length);
            mainIndex = Math.floor(Math.random() * gimmick3MainData.length);
            finIndex = Math.floor(Math.random() * gimmick3FinData.length);

            sessionStorage.setItem('gimmick3_combination', JSON.stringify({
                init: initIndex,
                main: mainIndex,
                fin: finIndex
            }));
        }

        const randomInit = gimmick3InitializationData[initIndex].init_data;
        const randomMain = gimmick3MainData[mainIndex].prob;
        const randomFin = gimmick3FinData[finIndex].fin;

        const answerId = `${initIndex}${mainIndex}${finIndex}`;
        const answerData = gimmick3AnswerData.find(item => item.id === answerId);
        const answer = answerData ? answerData.ans : "ERR0";

        // 答えを保存
        window.generatedAnswers = window.generatedAnswers || {};
        window.generatedAnswers[2] = answer;
        if (normalSlateData && normalSlateData[2]) normalSlateData[2].answer = answer;

        console.log(`Gimmick 3 - Init:${initIndex} Main:${mainIndex} Fin:${finIndex} -> answer=${answer}`);

        return `${randomInit}
${randomMain}
${randomFin}`;

    } catch (e) {
        console.error('Gimmick 3 コードの生成に失敗:', e);
        return '<span class="error">コードの生成に失敗しました。</span>';
    }
}

function getGimmick4Code() {
    try {
        let initIndex, mainIndex, finIndex;
        const storedCombination = sessionStorage.getItem('gimmick4_combination');

        if (storedCombination) {
            const combo = JSON.parse(storedCombination);
            initIndex = combo.init;
            mainIndex = combo.main;
            finIndex = combo.fin;
        } else {
            initIndex = Math.floor(Math.random() * gimmick4InitializationData.length);
            mainIndex = Math.floor(Math.random() * gimmick4MainData.length);
            finIndex = Math.floor(Math.random() * gimmick4FinData.length);

            sessionStorage.setItem('gimmick4_combination', JSON.stringify({
                init: initIndex,
                main: mainIndex,
                fin: finIndex
            }));
        }

        const randomInit = gimmick4InitializationData[initIndex].init_data;
        const randomMain = gimmick4MainData[mainIndex].prob;
        const randomFin = gimmick4FinData[finIndex].fin;

        const answerId = `${initIndex}${mainIndex}${finIndex}`;
        const answerData = gimmick4AnswerData.find(item => item.id === answerId);
        const answer = answerData ? answerData.ans : "ERR0";

        // 答えを保存
        window.generatedAnswers = window.generatedAnswers || {};
        window.generatedAnswers[3] = answer;
        if (normalSlateData && normalSlateData[3]) normalSlateData[3].answer = answer;

        console.log(`Gimmick 4 - Init:${initIndex} Main:${mainIndex} Fin:${finIndex} -> answer=${answer}`);

        return `${randomInit}
${randomMain}
${randomFin}`;

    } catch (e) {
        console.error('Gimmick 4 コードの生成に失敗:', e);
        return '<span class="error">コードの生成に失敗しました。</span>';
    }
}

// ★ Normalモード用 石板データ (GitHub版のロジックを使用)
const normalSlateData = [
    {
        type: "code",
        title: "いにしえの言葉が刻まれし石板",
        getCode: getGimmick1Code,
        answer: "1234" // (1234に統一)
    },
    {
        type: "code",
        title: "時を超えし叡智の石版",
        getCode: getGimmick2Code,
        answer: "1234" // (1234に統一)
    },
    {
        type: "code",
        title: "謎めきし符号の石版",
        getCode: getGimmick3Code,
        answer: "1234" // (1234に統一)
    },
    {
        type: "code",
        title: "深遠なる思考の石版",
        getCode: getGimmick4Code,
        answer: "1234" // (1234に統一)
    }
];

// =============================================
// ★ Easy モード用データ
// =============================================
const easySlateData = [
    {
        type: "image",
        title: "第一の石板 (Easy) 絵が示すものを英語で入力しよう",
        imageUrl: "images/good.png", 
        answer: "good"
    },
    {
        type: "image",
        title: "第二の石板 (Easy) 絵が示すものを英語で入力しよう",
        imageUrl: "images/milk.png", 
        answer: "milk"
    }
];


// =============================================
// ★ モード判別と共通ロジック
// =============================================

// ★ game-keys.js のモード定義に基づいて分岐
const IS_EASY_MODE = (window.GAME_KEYS.MODE === 'easy');
const activeSlateData = IS_EASY_MODE ? easySlateData : normalSlateData;
const INITIAL_ATTEMPTS = IS_EASY_MODE ? 5 : 3; // Easy: 5回, Normal: 3回
const backUrl = IS_EASY_MODE ? 'select2.html' : 'select.html';

// ★ 修正: 戻り先URLをグローバルに公開し、code_view.js から参照できるようにする
window.GAME_BACK_URL = backUrl;

// HTMLの要素を取得
const slateTitleElement = document.getElementById('slate-title');
const codeBlockElement = document.querySelector('.code-block'); 
const nextButton = document.getElementById('next-slate-button');
const backToSelectButton = document.getElementById('back-to-select-button'); 
const slateIdBadge = document.getElementById('slate-id-badge'); 
const passwordIdBadge = document.getElementById('password-id-badge');

// ★ 修正: この変数をグローバルスコープに公開 (code_view.js で参照するため)
var currentSlateIndex = 0;

// クエリパラメータから index を読み取る
(function () {
    try {
        const params = new URLSearchParams(window.location.search);
        const p = params.get('index');
        if (p !== null) {
            const n = parseInt(p, 10);
            if (!Number.isNaN(n) && n >= 0 && n < activeSlateData.length) {
                currentSlateIndex = n;
            }
        }
    } catch (e) {
        console.warn('クエリパラメータの解析に失敗しました:', e);
    }
})();

// displaySlate 関数 (Easy/Normal 統合・修正版)
function displaySlate(index) {
    const slate = activeSlateData[index];
    slateTitleElement.textContent = slate.title;

    if (!codeBlockElement) return; 

    // ★ 分岐: Easy (image) か Normal (code) か
    if (slate.type === 'image' && slate.imageUrl) {
        // --- Easyモード (画像) ---
        codeBlockElement.innerHTML = `<img src="${slate.imageUrl}" alt="${slate.title} の画像">`;
        codeBlockElement.classList.add('image-mode');
    } else if (slate.type === 'code' && typeof slate.getCode === 'function') {
        // --- Normalモード (コード) ---
        const codeHtml = slate.getCode();
        codeBlockElement.innerHTML = `<pre><code id="code-display">${codeHtml}</code></pre>`;
        codeBlockElement.classList.remove('image-mode');
    }

    // IDバッジのテキストを更新 (共通)
    const romanNumerals = ["I", "II", "III", "IV", "V", "VI"]; 
    const slateIdText = `STONE ${romanNumerals[index] || (index + 1)}`; 
    
    if (slateIdBadge) {
        slateIdBadge.textContent = slateIdText;
    }
    if (passwordIdBadge) {
        passwordIdBadge.textContent = `${slateIdText} - PASSWORD`;
    }
}

// アニメーションの対象を codeBlockElement に変更
function animateTransitionTo(newIndex) {
    const block = codeBlockElement; 
    if (!block) {
        currentSlateIndex = newIndex;
        displaySlate(currentSlateIndex);
        return;
    }

    if (block.classList.contains('anim-out')) return;

    block.classList.remove('anim-in');
    void block.offsetWidth;
    block.classList.add('anim-out');

    const onTransitionEnd = (ev) => {
        block.removeEventListener('transitionend', onTransitionEnd);

        currentSlateIndex = newIndex;
        displaySlate(currentSlateIndex);
        
        // ★ 共通: 次の石版の入力内容を復元
        if (typeof window.loadInputsForIndex === 'function') {
            const form = document.getElementById('password-form');
            const inputs = form ? Array.from(form.querySelectorAll('input[type="text"]')) : [];
            window.loadInputsForIndex(currentSlateIndex, inputs);
        }
        // ★ 共通: 次の石版のクリア状態を反映
        updateClearedDisplay(gameState.clearedSlates.includes(currentSlateIndex));

        requestAnimationFrame(() => {
            block.classList.remove('anim-out'); 
            void block.offsetWidth;
            block.classList.add('anim-in'); 
            const onAnimEnd = () => {
                block.removeEventListener('animationend', onAnimEnd);
                block.classList.remove('anim-in');
            };
            block.addEventListener('animationend', onAnimEnd);
        });
    };
    block.addEventListener('transitionend', onTransitionEnd);
}

// 「次の石版へ」ボタン (共通)
nextButton.addEventListener('click', () => {
    // ★ 修正: 入力保存は code_view.js 側で行う
    
    // ★修正: 準備中の石板(index 1)をスキップするロジック (Normalモードのみ)
    let targetIndex = (currentSlateIndex + 1) % activeSlateData.length;
    if (!IS_EASY_MODE && targetIndex === 1) { // 1 = 準備中の第二の石板
        targetIndex = (targetIndex + 1) % activeSlateData.length; // 2 (第三の石板) に飛ぶ
    }
    
    animateTransitionTo(targetIndex);
});


// =============================================
// ★ ゲーム状態管理 (修正)
// =============================================

// ★ 修正: game-keys.js の動的キーを使用
const STORAGE_KEY_GAME_STATE = window.GAME_KEYS.STATE;

const gameState = {
    remainingAttempts: INITIAL_ATTEMPTS, 
    clearedSlates: [],     
    
    save() {
        localStorage.setItem(STORAGE_KEY_GAME_STATE, JSON.stringify({
            remainingAttempts: this.remainingAttempts,
            clearedSlates: this.clearedSlates
        }));
    },
    
    load() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY_GAME_STATE));
            if (saved) {
                this.remainingAttempts = saved.remainingAttempts; 
                this.clearedSlates = saved.clearedSlates || [];
                
                if (this.remainingAttempts <= 0) {
                    this.reset();
                }
            } else {
                this.remainingAttempts = INITIAL_ATTEMPTS;
            }
        } catch (e) {
            console.warn('状態の読み込みに失敗:', e);
            this.reset();
        }
    },
    
    reset() {
        this.remainingAttempts = INITIAL_ATTEMPTS; 
        this.clearedSlates = [];
        this.save();
        try { 
            localStorage.removeItem(window.GAME_KEYS.INPUTS); 
            localStorage.removeItem(window.GAME_KEYS.START_TIME);
            sessionStorage.removeItem('gimmick1_combination');
            sessionStorage.removeItem('gimmick2_combination');
            sessionStorage.removeItem('gimmick3_combination');
            sessionStorage.removeItem('gimmick4_combination');
        } catch(e) {}
    }
};

// ライフ表示を更新する関数 (共通)
function updateLifeDisplay() {
    const lifeContainer = document.getElementById('life-display');
    if (!lifeContainer) return;
    
    lifeContainer.innerHTML = '';
    const lives = gameState.remainingAttempts;

    for (let i = 0; i < lives; i++) {
        const heart = document.createElement('span');
        heart.textContent = '❤️';
        heart.className = 'life-heart';
        lifeContainer.appendChild(heart);
    }
}

// クリア済み表示を更新する関数 (共通)
function updateClearedDisplay(isCleared) {
    const titleElement = document.getElementById('slate-title');
    const form = document.getElementById('password-form');
    const inputs = form ? Array.from(form.querySelectorAll('input[type="text"]')) : [];
    const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
    
    let clearedMark = document.getElementById('cleared-mark');
    
    if (isCleared) {
        if (!clearedMark && titleElement) {
            clearedMark = document.createElement('span');
            clearedMark.id = 'cleared-mark';
            clearedMark.textContent = ' (クリア済み)';
            titleElement.appendChild(clearedMark);
        }
        
        if (form) {
            inputs.forEach(input => input.disabled = true);
            if (submitBtn) submitBtn.disabled = true;
            form.classList.add('form-cleared');
        }
    } else {
        if (clearedMark) {
            clearedMark.remove();
        }
        if (form) {
            inputs.forEach(input => input.disabled = false);
            if (submitBtn) submitBtn.disabled = false;
            form.classList.remove('form-cleared');
        }
    }
}

// パスワード判定処理 (★ 修正: game-keys, INITIAL_ATTEMPTS 使用)
function checkPassword(enteredPassword) {
    const currentSlate = activeSlateData[currentSlateIndex];
    
    if (gameState.clearedSlates.includes(currentSlateIndex)) {
        showResult({ success: false, message: "この石版はクリア済みです" });
        return;
    }

    if (enteredPassword === currentSlate.answer) {
        if (!gameState.clearedSlates.includes(currentSlateIndex)) {
            gameState.clearedSlates.push(currentSlateIndex);
            gameState.save();
        }
        
        if (typeof window.clearInputsForIndex === 'function') {
            window.clearInputsForIndex(currentSlateIndex);
        }

        // ★★★ ここから修正 ★★★
        // ゲームクリア条件の判定
        let isGameClear = false;
        if (IS_EASY_MODE) {
            // Easyモード: 全ての石板 (2枚) をクリア
            isGameClear = gameState.clearedSlates.length === activeSlateData.length;
        } else {
            // Normalモード: 1, 3, 4 (index 0, 2, 3) をクリア
            const requiredSlates = [0, 2, 3];
            const clearedSet = new Set(gameState.clearedSlates);
            isGameClear = requiredSlates.every(idx => clearedSet.has(idx));
        }
        // ★★★ ここまで修正 ★★★

        if (isGameClear) {
            try {
                const startTime = parseInt(localStorage.getItem(window.GAME_KEYS.START_TIME), 10);
                const clearTimeMs = Date.now() - startTime;
                localStorage.setItem(window.GAME_KEYS.FINAL_TIME, clearTimeMs);

                const mistakeCount = INITIAL_ATTEMPTS - gameState.remainingAttempts;
                localStorage.setItem(window.GAME_KEYS.FINAL_MISTAKES, mistakeCount);

            } catch (e) {
                console.warn("リザルトデータの保存に失敗:", e);
            }
        }

        showResult({
            success: true,
            message: `第${currentSlateIndex + 1}の石版をクリア！`,
            isGameClear: isGameClear
        });
        
        updateClearedDisplay(true);

    } else {
        // 不正解
        gameState.remainingAttempts--;
        gameState.save();
        updateLifeDisplay(); 
        
        if (gameState.remainingAttempts <= 0) {
            showGameOver();
        } else {
            showResult({
                success: false,
                message: `不正解... 残り試行回数 ${gameState.remainingAttempts} 回`
            });
        }
    }
}

// 結果表示UI (★ 修正: backUrl 使用)
function showResult({ success, message, isGameClear = false }) {
    const overlay = document.createElement('div');
    overlay.className = 'result-overlay';

    const buttonText = isGameClear ? 'リザルト画面へ' : (success ? '石板一覧へ戻る' : '閉じる');

    overlay.innerHTML = `
        <div class="result-box ${success ? 'success' : 'failure'}">
            <h3>${message}</h3>
            ${isGameClear ? '<p>全ての石版をクリアしました！</p>' : ''}
            <button class="return-button">
                ${buttonText}
            </button>
        </div>
    `;
    
    const button = overlay.querySelector('button');
    button.addEventListener('click', () => {
        // ★変更: ゲームクリア / 通常正解のとき chFlag.js の main を呼ぶ（存在すれば）
        if (isGameClear) {
            try {
                // main が Promise を返しても await 風の挙動で完了後に遷移する
                const p = (typeof main === 'function') ? Promise.resolve().then(() => main()) : Promise.resolve();
                p.catch(e => console.warn('chFlag main error:', e)).finally(() => {
                    window.location.href = 'result.html';
                });
            } catch (e) {
                console.warn('chFlag main call failed:', e);
                window.location.href = 'result.html';
            }
        } else if (success) {
            localStorage.setItem('correctAnswers', gameState.clearedSlates.length);
            const correctAnswers = localStorage.getItem('correctAnswers');
            console.log(`Correct Answers: ${correctAnswers}`);
            try {
                if (typeof main === 'function') {
                    // 通常正解時は非同期で呼び出して一覧に戻す（遷移を待たない）
                    Promise.resolve().then(() => main()).catch(e => console.warn('chFlag main error:', e));
                }
            } catch (e) {
                console.warn('chFlag main call failed:', e);
            }
            window.location.href = backUrl;
        } else {
            overlay.remove();
        }
    });

    if (!success) {
         overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
         });
    }
    
    document.body.appendChild(overlay);
}

// ゲームオーバー画面 (共通)
function showGameOver() {
    const overlay = document.createElement('div');
    overlay.className = 'result-overlay game-over';
    overlay.innerHTML = `
        <div class="result-box failure">
            <h3>Game Over</h3>
            <p>試行回数が上限に達しました</p>
            <button class="return-button">タイトルへ戻る</button>
        </div>
    `;
    
    const button = overlay.querySelector('button');
    button.addEventListener('click', () => {
        try {
            // ゲームオーバー時にも chFlag.main を実行（存在すれば）
            if (typeof main === 'function') {
                Promise.resolve().then(() => main()).catch(e => console.warn('chFlag main error:', e)).finally(() => {
                    gameState.reset();
                    window.location.href = 'index.html';
                });
                return;
            }
        } catch (e) {
            console.warn('chFlag main call failed:', e);
        }
        gameState.reset();
        window.location.href = 'index.html';
    });
    
    document.body.appendChild(overlay);
}

// --- ページ読み込み時の処理 --- (共通)
window.addEventListener('DOMContentLoaded', () => {
    gameState.load();
    updateLifeDisplay(); 
    displaySlate(currentSlateIndex); 
    
    if (gameState.clearedSlates.includes(currentSlateIndex)) {
        updateClearedDisplay(true);
    }
    
    const form = document.getElementById('password-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = Array.from(form.querySelectorAll('input[type="text"]'));
            const password = inputs.map(input => input.value).join('');
            checkPassword(password);
        });
    }
});