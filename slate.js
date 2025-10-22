// 表示する石版のデータを配列で管理
// HTMLで色付けするための<span>タグも一緒に文字列として含めておきます。
const slateData = [
    {
        title: "temp: 第一の石版",
        code: `<span class="keyword">hensu_sengen</span> ataru keyA = <span class="number">10</span>

<span class="keyword">hensu_sengen</span> hairetsu treasures = [<span class="string">"宝石"</span>, <span class="string">"地図"</span>, <span class="string">"鍵"</span>]

<span class="keyword">kurikaesu</span> (i = <span class="number">0</span>; i &lt; <span class="number">3</span>; i++) {
    <span class="keyword">moshi</span> (keyA == <span class="number">10</span>) {
        <span class="function">satoru</span>(treasures[i])
    } <span class="keyword">matawa_moshi</span> (keyA > <span class="number">20</span>) {
        <span class="function">satoru</span>(<span class="string">"罠だ！"</span>)
    }
}

<span class="comment">// 最後の宝のインデックスがパスワードの一部らしい…</span>`
    },
    {
        title: "temp: 第二の石版",
        code: `<span class="keyword">hensu_sengen</span> moji passwordHint = <span class="string">"OPEN_SESAME"</span>
<span class="keyword">hensu_sengen</span> ataru length = <span class="number">11</span>

<span class="keyword">moshi</span> (length == passwordHint.length) {
    <span class="function">satoru</span>(passwordHint[<span class="number">4</span>]) <span class="comment">// 5番目の文字を出力</span>
} <span class="keyword">soreigai</span> {
    <span class="function">satoru</span>(<span class="string">"ヒントではない"</span>)
}

<span class="comment">// "開けゴマ"…この言葉の5番目の文字は何だ？</span>`
    },
    {
        title: "temp: 第三の石版",
        code: `<span class="keyword">hensu_sengen</span> ataru num1 = <span class="number">5</span>
<span class="keyword">hensu_sengen</span> ataru num2 = <span class="number">3</span>
<span class="keyword">hensu_sengen</span> ataru result = (num1 * num2) + <span class="number">2</span> <span class="comment">// (5 × 3) + 2</span>

<span class="function">satoru</span>(result % <span class="number">10</span>) <span class="comment">// 10で割った余り</span>

<span class="comment">// 計算結果の一の位が重要そうだ。</span>`
    },
    {
        title: "temp: 第四の石版",
        code: `<span class="keyword">hensu_sengen</span> hairetsu sequence = [<span class="number">1</span>, <span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">5</span>, <span class="number">8</span>]
<span class="keyword">hensu_sengen</span> ataru next_val

next_val = sequence[<span class="number">4</span>] + sequence[<span class="number">5</span>] <span class="comment">// 5番目と6番目の要素の和</span>

<span class="function">satoru</span>(next_val)

<span class="comment">// この数列には特別な規則があるようだ。次に来る数字は…</span>`
    },
    {
        title: "temp: 第五の石版",
        code: `<span class="keyword">hensu_sengen</span> moji spell = <span class="string">"abracadabra"</span>
<span class="keyword">hensu_sengen</span> moji target = <span class="string">"a"</span>
<span class="keyword">hensu_sengen</span> ataru count = <span class="number">0</span>

<span class="keyword">kurikaesu</span> (i = <span class="number">0</span>; i &lt; spell.length; i++) {
    <span class="keyword">moshi</span> (spell[i] == target) {
        count = count + <span class="number">1</span>
    }
}

<span class="function">satoru</span>(count)

<span class="comment">// 魔法の言葉に 'a' は一体いくつ含まれているのだろう？</span>`
    },
    {
        title: "temp: 第六の石版",
        code: `<span class="keyword">hensu_sengen</span> hairetsu maze = [<span class="string">"道"</span>, <span class="string">"壁"</span>, <span class="string">"道"</span>, <span class="string">"宝"</span>, <span class="string">"壁"</span>]
<span class="keyword">hensu_sengen</span> ataru position = <span class="number">0</span>

<span class="comment">// '壁'ではない限り進み続ける</span>
<span class="keyword">kurikaesu_zutto</span> (maze[position] != <span class="string">"壁"</span>) {
    position = position + <span class="number">1</span>
    <span class="keyword">moshi</span> (position >= maze.length) {
        <span class="comment">// 配列の範囲外に出たらループを抜ける</span>
        <span class="keyword">nukeru</span>
    }
}

<span class="function">satoru</span>(position)

<span class="comment">// 最初に壁にぶつかるのは、何番目の場所か？</span>`
    }
];

// HTMLの要素を取得
const slateTitleElement = document.getElementById('slate-title');
const codeDisplayElement = document.getElementById('code-display');
const nextButton = document.getElementById('next-slate-button');
// 追加: 一覧に戻るボタン
const backToSelectButton = document.getElementById('back-to-select-button');

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
    codeDisplayElement.innerHTML = slate.code;
}

// 「次の石版へ」ボタンがクリックされた時の処理
nextButton.addEventListener('click', () => {
    // 次の番号に更新
    currentSlateIndex++;
    
    if (currentSlateIndex >= slateData.length) {
        currentSlateIndex = 0;
    }

    // 新しい内容で表示を更新
    displaySlate(currentSlateIndex);
});

// 追加: 一覧に戻る処理（select.html へ遷移）
if (backToSelectButton) {
    backToSelectButton.addEventListener('click', () => {
        // そのまま選択画面に戻る（必要ならクエリで currentSlateIndex を渡すことも可能）
        window.location.href = 'select.html';
    });
}

// --- 最初にページが読み込まれた時に、最初の石版を表示する ---
window.addEventListener('DOMContentLoaded', () => {
    displaySlate(currentSlateIndex);
});
