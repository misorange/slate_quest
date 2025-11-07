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

function getGimmick1Code() {
    try {
        let initIndex, mainIndex, finIndex;
        const storedCombination = sessionStorage.getItem('gimmick1_combination');

        if (storedCombination) {
            // 保存された組み合わせがあれば、それを使用する
            const combo = JSON.parse(storedCombination);
            initIndex = combo.init;
            mainIndex = combo.main;
            finIndex = combo.fin;
        } else {
            // 保存されていなければ、新しく生成して保存する
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

        // どのデータが使われたかコンソールに記録
        console.log(`Gimmick 1 - Init: ${initIndex}, Main: ${mainIndex}, Fin: ${finIndex}`);

        return `<span class="comment">// 古代の言語で書かれた呪文の初期化</span>
${randomInit}

<span class="comment">// 以下、解読された処理内容</span>
${randomMain}

<span class="comment">// 最終的な儀式</span>
${randomFin}`;

    } catch (e) {
        console.error('Gimmick 1 コードの生成に失敗:', e);
        return '<span class="error">コードの生成に失敗しました。</span>';
    }
}


// 表示する石版のデータを配列で管理
// HTMLで色付けするための<span>タグも一緒に文字列として含めておきます。
const slateData = [
    {
        title: "いにしえの言葉が刻まれし石板",
        getCode: getGimmick1Code
    },
    {
        title: "時を超えし叡智の石版",
        code: `<span class="keyword">hensu_sengen</span> moji passwordHint = <span class="string">"OPEN_SESAME"</span>
<span class="keyword">hensu_sengen</span> ataru length = <span class="number">11</span>

<span class="keyword">moshi</span> (length == passwordHint.length) {
    <span class="function">satoru</span>(passwordHint[<span class="number">4</span>]) <span class="comment">// 5番目の文字を出力</span>
} <span class="keyword">soreigai</span> {
    <span class="function">satoru</span>(<span class="string">"ヒントではない"</span>)
}

<span class="comment">// "開けゴマ"…この言葉の5番目の文字は何だ？</span>`,
        answer: "1234" // (1234に統一)
    },
    {
        title: "謎めきし符号の石版",
        code: `<span class="keyword">hensu_sengen</span> ataru num1 = <span class="number">5</span>
<span class="keyword">hensu_sengen</span> ataru num2 = <span class="number">3</span>
<span class="keyword">hensu_sengen</span> ataru result = (num1 * num2) + <span class="number">2</span> <span class="comment">// (5 × 3) + 2</span>

<span class="function">satoru</span>(result % <span class="number">10</span>) <span class="comment">// 10で割った余り</span>

<span class="comment">// 計算結果の一の位が重要そうだ。</span>`,
        answer: "1234" // (1234に統一)
    },
    {
        title: "深遠なる思考の石版",
        code: `<span class="keyword">hensu_sengen</span> hairetsu sequence = [<span class="number">1</span>, <span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">5</span>, <span class="number">8</span>]
<span class="keyword">hensu_sengen</span> ataru next_val

next_val = sequence[<span class="number">4</span>] + sequence[<span class="number">5</span>] <span class="comment">// 5番目と6番目の要素の和</span>

<span class="function">satoru</span>(next_val)

<span class="comment">// この数列には特別な規則があるようだ。次に来る数字は…</span>`,
        answer: "1234" // (1234に統一)
    }
];

// HTMLの要素を取得
const slateTitleElement = document.getElementById('slate-title');
const codeDisplayElement = document.getElementById('code-display');
const nextButton = document.getElementById('next-slate-button');
const backToSelectButton = document.getElementById('back-to-select-button');
// ★追加: IDバッジの要素を取得
const slateIdBadge = document.getElementById('slate-id-badge'); 
const passwordIdBadge = document.getElementById('password-id-badge');


// 現在表示している石版の番号を管理する変数
let currentSlateIndex = 0;

// クエリパラメータから index を読み取れるようにする（例: slate.html?index=2）
(function () {
    try {
        const params = new URLSearchParams(window.location.search);
        const p = params.get('index');
        if (p !== null) {
            const n = parseInt(p, 10);
            if (!Number.isNaN(n) && n >= 0 && n < slateData.length) {
                currentSlateIndex = n;
            }
        }
    } catch (e) {
        // 何かあっても既定値 0 を使う
        console.warn('クエリパラメータの解析に失敗しました:', e);
    }
})();


// 指定された番号の石版データを表示する関数
function displaySlate(index) {
    const slate = slateData[index];
    slateTitleElement.textContent = slate.title;
    
    // ★修正: getCodeが関数であれば呼び出す
    if (typeof slate.getCode === 'function') {
        codeDisplayElement.innerHTML = slate.getCode();
    } else {
        codeDisplayElement.innerHTML = slate.code;
    }

    // ★追加: IDバッジのテキストを更新
    const romanNumerals = ["I", "II", "III", "IV"]; // 石板は4つのため
    const slateIdText = `STONE ${romanNumerals[index] || (index + 1)}`; // 1ベースのIDを生成
    
    if (slateIdBadge) {
        slateIdBadge.textContent = slateIdText;
    }
    if (passwordIdBadge) {
        // パスワード側には、どの石板のパスワードかを明記
        passwordIdBadge.textContent = `${slateIdText} - PASSWORD`;
    }
}

// 新: コード領域をアニメーションで差し替えるヘルパー
async function animateTransitionTo(newIndex) {
    const block = document.querySelector('.code-block');
    if (!block) {
        // 万一要素が無ければ即時差し替え
        currentSlateIndex = newIndex;
        displaySlate(currentSlateIndex);
        return;
    }

    // 既にアウト中なら無視しておく
    if (block.classList.contains('anim-out')) return;

    // アウトアニメーションを開始
    block.classList.remove('anim-in');
    // force style flush
    void block.offsetWidth;
    block.classList.add('anim-out');

    // アウト完了で内容を差し替え、インアニメーションを出す
    const onTransitionEnd = (ev) => {
        // 遷移終了はopacity/transformに反応する。重複回避のため常にリスナを外す
        block.removeEventListener('transitionend', onTransitionEnd);

        currentSlateIndex = newIndex;
        displaySlate(currentSlateIndex);
        
        // ★追加: 次の石版の入力内容を復元
        if (typeof window.loadInputsForIndex === 'function') {
            const form = document.getElementById('password-form');
            const inputs = form ? Array.from(form.querySelectorAll('input[type="text"]')) : [];
            window.loadInputsForIndex(currentSlateIndex, inputs);
        }
        // ★追加: 次の石版のクリア状態を反映
        updateClearedDisplay(gameState.clearedSlates.includes(currentSlateIndex));

        // 少し遅延を入れてインアニメーション（滑らかさのため）
        requestAnimationFrame(() => {
            block.classList.remove('anim-out');
            // 強制再描画してからインクラスを付与
            void block.offsetWidth;
            block.classList.add('anim-in');

            // アニメーション終了後にクラスをクリア
            const onAnimEnd = () => {
                block.removeEventListener('animationend', onAnimEnd);
                block.classList.remove('anim-in');
            };
            block.addEventListener('animationend', onAnimEnd);
        });
    };
    block.addEventListener('transitionend', onTransitionEnd);
}

// 「次の石版へ」ボタンがクリックされた時の処理（差し替え）
nextButton.addEventListener('click', () => {
    // (入力内容の保存は code_view.js 側で行う)
    const targetIndex = (currentSlateIndex + 1) % slateData.length;
    animateTransitionTo(targetIndex);
});

// 追加: 一覧に戻る処理（select.html へ遷移）
if (backToSelectButton) {
    backToSelectButton.addEventListener('click', () => {
        // (入力内容の保存は code_view.js 側で行う)
        window.location.href = 'select.html';
    });
}

// ローカルストレージのキーを定義 (ゲーム状態保存用)
const STORAGE_KEY_GAME_STATE = 'slate_quest_state_v1';

// ゲーム状態の管理
const gameState = {
    remainingAttempts: 3,  // 残り試行回数 (3回)
    clearedSlates: [],     // クリア済み石版のインデックス
    
    // 状態の保存
    save() {
        localStorage.setItem(STORAGE_KEY_GAME_STATE, JSON.stringify({
            remainingAttempts: this.remainingAttempts,
            clearedSlates: this.clearedSlates
        }));
    },
    
    // 状態の読み込み
    load() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY_GAME_STATE));
            if (saved) {
                // remainingAttempts はセーブデータから読み込む
                this.remainingAttempts = saved.remainingAttempts;
                this.clearedSlates = saved.clearedSlates || [];
                
                // もしライフが0以下になっていたらリセット
                if (this.remainingAttempts <= 0) {
                    this.reset();
                }
            }
        } catch (e) {
            console.warn('状態の読み込みに失敗:', e);
            this.reset(); // 読み込み失敗時はリセット
        }
    },
    
    // ★修正: reset 時に startTime もクリア
    reset() {
        this.remainingAttempts = 3;
        this.clearedSlates = [];
        this.save();
        // ★追加: 入力内容と開始時刻もすべてクリア
         try { 
             localStorage.removeItem('slate_quest_answers_v1'); 
             localStorage.removeItem('startTime'); // ★追加
             sessionStorage.removeItem('gimmick1_combination');
         } catch(e) {}
    }
};

// ライフ表示を更新する関数
function updateLifeDisplay() {
    const lifeContainer = document.getElementById('life-display');
    if (!lifeContainer) return;
    
    lifeContainer.innerHTML = ''; // いったん空にする
    const lives = gameState.remainingAttempts;

    // ライフの数だけハートを表示
    for (let i = 0; i < lives; i++) {
        const heart = document.createElement('span');
        heart.textContent = '❤️';
        heart.className = 'life-heart';
        lifeContainer.appendChild(heart);
    }
}

// ★追加: クリア済み表示を更新する関数
function updateClearedDisplay(isCleared) {
    const titleElement = document.getElementById('slate-title');
    const form = document.getElementById('password-form');
    const inputs = form ? Array.from(form.querySelectorAll('input[type="text"]')) : [];
    const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
    
    // クリア済み表示用の要素を探す
    let clearedMark = document.getElementById('cleared-mark');
    
    if (isCleared) {
        // --- クリア済みの表示 ---
        if (!clearedMark && titleElement) {
            clearedMark = document.createElement('span');
            clearedMark.id = 'cleared-mark';
            clearedMark.textContent = ' (クリア済み)';
            titleElement.appendChild(clearedMark);
        }
        
        // フォームを無効化
        if (form) {
            inputs.forEach(input => input.disabled = true);
            if (submitBtn) submitBtn.disabled = true;
            form.classList.add('form-cleared');
        }
    } else {
        // --- 未クリアの表示 (主に「次の石版へ」で切り替わった時用) ---
        if (clearedMark) {
            clearedMark.remove();
        }
        // フォームを有効化
        if (form) {
            inputs.forEach(input => input.disabled = false);
            if (submitBtn) submitBtn.disabled = false;
            form.classList.remove('form-cleared');
        }
    }
}

// パスワード判定処理
function checkPassword(enteredPassword) {
    const currentSlate = slateData[currentSlateIndex];
    
    // ★追加: 既にクリア済みかチェック
    if (gameState.clearedSlates.includes(currentSlateIndex)) {
        showResult({ success: false, message: "この石版はクリア済みです" });
        return;
    }

    if (enteredPassword === currentSlate.answer) {
        // 正解
        if (!gameState.clearedSlates.includes(currentSlateIndex)) {
            gameState.clearedSlates.push(currentSlateIndex);
            gameState.save();
        }
        
        // ★追加: 正解したら保存されていた入力内容をクリア
        if (typeof window.clearInputsForIndex === 'function') {
            window.clearInputsForIndex(currentSlateIndex);
        }

        const isGameClear = gameState.clearedSlates.length === slateData.length;

        // ★追加: ゲームクリアの場合、リザルト情報を保存
        if (isGameClear) {
            try {
                // クリア時間を計算
                const startTime = parseInt(localStorage.getItem('startTime'), 10);
                const clearTimeMs = Date.now() - startTime;
                localStorage.setItem('finalClearTime', clearTimeMs);

                // 誤答回数を計算 (初期ライフ 3 - 残りライフ)
                const mistakeCount = 3 - gameState.remainingAttempts;
                localStorage.setItem('finalMistakeCount', mistakeCount);

            } catch (e) {
                console.warn("リザルトデータの保存に失敗:", e);
            }
        }

        showResult({
            success: true,
            message: `第${currentSlateIndex + 1}の石版をクリア！`,
            isGameClear: isGameClear
        });
        
        // ★追加: クリア状態を即時反映
        updateClearedDisplay(true);

    } else {
        // 不正解
        gameState.remainingAttempts--;
        gameState.save();
        updateLifeDisplay(); // ライフ表示を更新
        
        if (gameState.remainingAttempts <= 0) {
            // ゲームオーバー
            showGameOver();
        } else {
            showResult({
                success: false,
                message: `不正解... 残り${gameState.remainingAttempts}回`
            });
        }
    }
}

// 結果表示UI
function showResult({ success, message, isGameClear = false }) {
    const overlay = document.createElement('div');
    overlay.className = 'result-overlay';

    // ★修正: ゲームクリア時のボタンテキストを変更
    const buttonText = isGameClear ? 'リザルト画面へ' : (success ? '石版一覧へ戻る' : '閉じる');

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
        // ★修正: ゲームクリア時の遷移先を result.html に変更
        if (isGameClear) {
            // gameState.reset(); // リセットはタイトルに戻る時に行う
            window.location.href = 'result.html';
        } else if (success) {
            // 正解時 (ゲームクリアでない) は一覧へ
            window.location.href = 'select.html';
        } else {
            // 不正解時、ゲームオーバーでない場合は閉じるだけ
            overlay.remove();
        }
    });

    // 不正解時はオーバーレイ自体をクリックしても閉じられるように
    if (!success) {
         overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
         });
    }
    
    document.body.appendChild(overlay);
}

// ゲームオーバー画面
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
        gameState.reset();
        window.location.href = 'index.html';
    });
    
    document.body.appendChild(overlay);
}

// --- 最初にページが読み込まれた時に、最初の石版を表示する ---
window.addEventListener('DOMContentLoaded', () => {
    gameState.load();
    updateLifeDisplay(); // ライフ表示を初期描画
    displaySlate(currentSlateIndex); // ★この呼び出しでIDバッジも初期化されます
    
    // ★追加: 読み込み時にクリア状態をチェック
    if (gameState.clearedSlates.includes(currentSlateIndex)) {
        updateClearedDisplay(true);
    }
    
    // パスワードフォームのsubmitイベントを処理
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
