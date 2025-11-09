document.addEventListener('DOMContentLoaded', () => {
    const stones = Array.from(document.querySelectorAll('.stone'));
    
    // ★修正: game-keys.js から動的キーを取得
    const STORAGE_KEY_GAME_STATE = window.GAME_KEYS.STATE;
    const START_TIME_KEY = window.GAME_KEYS.START_TIME;

    // ★修正: ゲーム開始時刻を記録 (まだ記録されていなければ)
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
        // ★修正: 動的キーを使用
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
        
        // ★修正: 準備中かどうかのフラグを追加
        const isCleared = clearedSlates.includes(i);
        const isPreparing = el.classList.contains('preparing'); // HTML側で付与されたクラスを検出

        // クリア済みかチェック
        if (isCleared) {
            el.classList.add('cleared');
            
            // クリア済みマークを追加
            const plate = el.querySelector('.stone-plate');
            if (plate) {
                const clearedMark = document.createElement('div');
                clearedMark.className = 'stone-cleared-mark';
                clearedMark.textContent = 'CLEARED';
                plate.appendChild(clearedMark);
            }

        // ★追加: 準備中かチェック (cleared ではない場合)
        } else if (isPreparing) {
            
            // 準備中の表示（サブタイトルを書き換える）
            const plate = el.querySelector('.stone-plate');
            if (plate) {
                const subTitle = plate.querySelector('.stone-sub');
                if (subTitle) {
                    subTitle.textContent = '（準備中）';
                    subTitle.style.color = '#d10000'; // 赤色で目立たせる
                    subTitle.style.fontWeight = 'bold';
                    subTitle.style.fontSize = '1.1rem';
                }
            }

        } else {
            // ★修正: クリアも準備中でもない石版にだけクリックイベントを設定
            el.addEventListener('click', (event) => {
                const idx = event.currentTarget.dataset.index || i;
                
                // ★修正: 遷移先を slate.html に統一
                // (slate.js 側でモードを判別して表示内容を切り替える)
                window.location.href = `slate.html?index=${idx}`;
            }, { once: true });
        }
    }
});