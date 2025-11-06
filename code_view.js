// localStorage 用キー (入力内容保存用)
const STORAGE_KEY_INPUTS = 'slate_quest_answers_v1';

// --- 保存・復元ヘルパー (グローバルスコープまたは window オブジェクトに登録) ---
function readStore() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY_INPUTS);
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        console.warn('localStorage parse error', e);
        return {};
    }
}
function writeStore(obj) {
    try {
        localStorage.setItem(STORAGE_KEY_INPUTS, JSON.stringify(obj));
    } catch (e) {
        console.warn('localStorage write error', e);
    }
}

/**
 * (グローバル) 指定したインデックスの入力内容を保存します
 * @param {number} index 石版のインデックス
 * @param {HTMLInputElement[]} inputs 入力欄のDOM要素の配列
 */
window.saveInputsForIndex = function(index, inputs) {
    if (typeof index === 'undefined' || !inputs) return;
    const obj = readStore();
    obj[String(index)] = inputs.map(i => i.value || '').join('');
    writeStore(obj);
}

/**
 * (グローバル) 指定したインデックスの入力内容を復元します
 * @param {number} index 石版のインデックス
 * @param {HTMLInputElement[]} inputs 入力欄のDOM要素の配列
 */
window.loadInputsForIndex = function(index, inputs) {
    if (typeof index === 'undefined' || !inputs) return;
    const obj = readStore();
    const val = String(obj[String(index)] || '');
    
    // ★修正: 
    // val があってもなくても (val が空文字でも)、
    // inputs 配列の長さ分ループを実行し、
    // 該当する文字 (val.charAt(i)) または 空文字 (|| '') をセットする。
    // これにより、val がない (空文字) の場合、入力欄が確実にクリアされる。
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i]) {
            inputs[i].value = val.charAt(i) || ''; 
        }
    }
}

/**
 * (グローバル) 指定したインデックスの保存内容を削除します
 * @param {number} index 石版のインデックス
 */
window.clearInputsForIndex = function(index) {
    if (typeof index === 'undefined') return;
    const obj = readStore();
    delete obj[String(index)];
    writeStore(obj);
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('password-form');
    if (!form) return;

    const inputs = Array.from(form.querySelectorAll('input[type="text"]'));

    // (既存の入力制御リスナー... input, keydown, paste)
    inputs.forEach((input, idx) => {
        input.setAttribute('inputmode', 'numeric'); 
        input.addEventListener('input', (e) => {
            let v = input.value;
            if (v.length > 1) {
                v = v.charAt(0);
                input.value = v;
            }
            if (v.length === 1 && idx < inputs.length - 1) {
                inputs[idx + 1].focus();
            }
            if (typeof currentSlateIndex !== 'undefined') {
                window.saveInputsForIndex(currentSlateIndex, inputs);
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value === '' && idx > 0) {
                inputs[idx - 1].focus();
            }
        });

        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const text = (e.clipboardData || window.clipboardData).getData('text').trim();
            if (!text) return;
            for (let i = 0; i < inputs.length; i++) {
                if(inputs[i]) inputs[i].value = text.charAt(i) || '';
            }
            inputs[Math.min(text.length, inputs.length) - 1]?.focus();
            if (typeof currentSlateIndex !== 'undefined') {
                window.saveInputsForIndex(currentSlateIndex, inputs);
            }
        });
    });

    // 初期ロード時に保存済みがあれば復元
    if (typeof currentSlateIndex !== 'undefined') {
        window.loadInputsForIndex(currentSlateIndex, inputs);
    }

    // (既存のボタンリスナー... backBtn, nextBtn)
    const backBtn = document.getElementById('back-to-select-button');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (typeof currentSlateIndex !== 'undefined') {
                window.saveInputsForIndex(currentSlateIndex, inputs);
            }
        });
    }
    
    const nextBtn = document.getElementById('next-slate-button');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
             if (typeof currentSlateIndex !== 'undefined') {
                window.saveInputsForIndex(currentSlateIndex, inputs);
            }
        });
    }

    // (既存の beforeunload リスナー)
    window.addEventListener('beforeunload', () => {
        if (typeof currentSlateIndex !== 'undefined') {
            window.saveInputsForIndex(currentSlateIndex, inputs);
        }
    });
});