// ...existing code...
// パスワードの正解（各問題の答えを順に 1,2,3,4,5,6 とする）
const CORRECT_PASSWORD = '123456';

// localStorage 用キー（バージョン付けしておくと将来互換性が楽）
const STORAGE_KEY = 'slate_quest_answers_v1';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('password-form');
    if (!form) return;

    const inputs = Array.from(form.querySelectorAll('input[type="text"]'));

    // --- 保存・復元ヘルパー ---
    function readStore() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            console.warn('localStorage parse error', e);
            return {};
        }
    }
    function writeStore(obj) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
        } catch (e) {
            console.warn('localStorage write error', e);
        }
    }
    function saveForIndex(index) {
        const obj = readStore();
        obj[String(index)] = inputs.map(i => i.value || '').join('');
        writeStore(obj);
    }
    function loadForIndex(index) {
        const obj = readStore();
        const val = String(obj[String(index)] || '');
        if (!val) return;
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = val.charAt(i) || '';
        }
    }
    function clearForIndex(index) {
        const obj = readStore();
        delete obj[String(index)];
        writeStore(obj);
    }

    // フォーカス移動・入力制御
    inputs.forEach((input, idx) => {
        input.setAttribute('inputmode', 'numeric'); // モバイルで数字キーボードを出しやすく
        input.addEventListener('input', (e) => {
            let v = input.value;
            if (v.length > 1) {
                // 連続貼り付けなどがあった場合は最初の文字を採用
                v = v.charAt(0);
                input.value = v;
            }
            if (v.length === 1 && idx < inputs.length - 1) {
                inputs[idx + 1].focus();
            }
            // 入力が変わるたびに保存（その時点の石版インデックスに紐づけ）
            if (typeof currentSlateIndex !== 'undefined') {
                saveForIndex(currentSlateIndex);
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value === '' && idx > 0) {
                inputs[idx - 1].focus();
            }
        });

        // 貼り付けで一括入力をサポート
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const text = (e.clipboardData || window.clipboardData).getData('text').trim();
            if (!text) return;
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = text.charAt(i) || '';
            }
            // 最後の入力欄にフォーカス
            inputs[Math.min(text.length, inputs.length) - 1]?.focus();
            if (typeof currentSlateIndex !== 'undefined') {
                saveForIndex(currentSlateIndex);
            }
        });
    });

    // 初期ロード時に保存済みがあれば復元
    if (typeof currentSlateIndex !== 'undefined') {
        loadForIndex(currentSlateIndex);
    }

    // ...existing code...
function showResult(success) {
    // 既存のオーバーレイがあれば削除
    const existing = document.getElementById('result-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'result-overlay';
    overlay.style.position = 'fixed';
    overlay.style.left = '0';
    overlay.style.top = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.background = 'rgba(0,0,0,0.6)';
    overlay.style.zIndex = '9999';
    overlay.style.color = '#fff';
    overlay.style.fontSize = '1.6rem';
    overlay.style.fontWeight = '700';
    overlay.style.padding = '20px';
    overlay.style.boxSizing = 'border-box';

    const box = document.createElement('div');
    box.style.background = 'rgba(0,0,0,0.4)';
    box.style.borderRadius = '10px';
    box.style.padding = '24px';
    box.style.textAlign = 'center';
    box.style.minWidth = '280px';

    const msg = document.createElement('div');
    msg.style.marginBottom = '16px';

    if (success) {
        msg.textContent = 'ゲームクリア！おめでとう！';
        box.style.background = 'linear-gradient(90deg, rgba(40,167,69,0.9), rgba(23,162,184,0.9))';
    } else {
        msg.textContent = 'パスワードが違います。もう一度試してください。';
        box.style.background = 'rgba(200,50,50,0.9)';
    }

    box.appendChild(msg);

    // 成功時はメインメニューに戻るボタンを表示し、数秒後に自動遷移も行う
    if (success) {
        const btn = document.createElement('button');
        btn.textContent = 'メインメニューへ';
        btn.style.marginTop = '8px';
        btn.style.padding = '10px 14px';
        btn.style.fontSize = '1rem';
        btn.style.border = 'none';
        btn.style.borderRadius = '6px';
        btn.style.cursor = 'pointer';
        btn.style.background = '#ffffff';
        btn.style.color = '#111';
        btn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        box.appendChild(btn);

        // 3秒後に自動でメインメニューへ遷移（ユーザー操作でキャンセル不可）
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    } else {
        const hint = document.createElement('div');
        hint.style.fontSize = '0.9rem';
        hint.style.marginTop = '6px';
        hint.style.opacity = '0.95';
        hint.textContent = 'クリックで閉じます';
        box.appendChild(hint);
    }

    // クリックで閉じられる（失敗時はクリックで閉じる、成功時はボタンまたは自動遷移で戻る）
    overlay.addEventListener('click', (e) => {
        if (!success) {
            overlay.remove();
        }
    });

    overlay.appendChild(box);
    document.body.appendChild(overlay);
}
// ...existing code...

    // 送信処理
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const entered = inputs.map(i => (i.value || '').trim()).join('');
        if (entered.length !== inputs.length) {
            showResult(false);
            return;
        }
        if (entered === CORRECT_PASSWORD) {
            // 正解時の処理（必要ならここで次画面へ遷移など追加）
            showResult(true);
            // フォーム無効化
            inputs.forEach(i => i.disabled = true);
            form.querySelector('button[type="submit"]')?.setAttribute('disabled', 'true');
            // 正解したら保存をクリア
            if (typeof currentSlateIndex !== 'undefined') {
                clearForIndex(currentSlateIndex);
            }
        } else {
            showResult(false);
            // 不正解でも一応保存は保持しておく（編集を続けられるように）
        }
    });

    // 一覧に戻るボタンが押されたときは保存してから遷移（slate.js のリスナと併用可能）
    const backBtn = document.getElementById('back-to-select-button');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (typeof currentSlateIndex !== 'undefined') {
                saveForIndex(currentSlateIndex);
            }
            // 遷移処理は既存の slate.js が行います
        });
    }

    // ページを閉じる・リロードするときにも保存
    window.addEventListener('beforeunload', () => {
        if (typeof currentSlateIndex !== 'undefined') {
            saveForIndex(currentSlateIndex);
        }
    });
});