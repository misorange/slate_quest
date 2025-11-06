document.addEventListener('DOMContentLoaded', () => {
    const stones = Array.from(document.querySelectorAll('.stone'));
    
    // ゲーム状態の localStorage キー
    const STORAGE_KEY_GAME_STATE = 'slate_quest_state_v1';
    // ★追加: 開始時刻の localStorage キー
    const START_TIME_KEY = 'startTime';

    // ★追加: ゲーム開始時刻を記録 (まだ記録されていなければ)
    try {
        if (!localStorage.getItem(START_TIME_KEY)) {
            localStorage.setItem(START_TIME_KEY, Date.now());
        }
    } catch (e) {
        console.warn('開始時刻の保存に失敗:', e);
    }

    // クリア状態を localStorage から読み込む
    let clearedSlates = [];
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY_GAME_STATE));
        if (saved && saved.clearedSlates) {
            clearedSlates = saved.clearedSlates;
        }
    } catch (e) {
        console.warn('状態の読み込みに失敗:', e);
    }

    // 各石版にインデックスを割り当て、クリックで遷移
    for (let i = 0; i < stones.length; i++) {
        const el = stones[i];
        el.dataset.index = String(i);
        
        // クリア済みかチェック
        if (clearedSlates.includes(i)) {
            el.classList.add('cleared');
            
            // クリア済みマークを追加
            const plate = el.querySelector('.stone-plate');
            if (plate) {
                const clearedMark = document.createElement('div');
                clearedMark.className = 'stone-cleared-mark';
                clearedMark.textContent = 'CLEARED';
                plate.appendChild(clearedMark);
            }
        } else {
            // クリアしてない石版にだけクリックイベントを設定
            el.addEventListener('click', (event) => {
                const idx = event.currentTarget.dataset.index || i;
                // slate.html にインデックスを渡して遷移
                window.location.href = `slate.html?index=${idx}`;
            }, { once: true });
        }
    }
});