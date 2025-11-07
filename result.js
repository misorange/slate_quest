document.addEventListener('DOMContentLoaded', () => {
    
    // localStorage からキーを定義
    const TIME_KEY = 'finalClearTime';
    const MISTAKE_KEY = 'finalMistakeCount';
    const START_TIME_KEY = 'startTime';

    // 表示要素を取得
    const timeElement = document.getElementById('clear-time');
    const mistakeElement = document.getElementById('mistake-count');

    // ミリ秒を HH:MM:SS 形式にフォーマットする関数
    function formatTime(ms) {
        if (isNaN(ms) || ms < 0) {
            return "00:00:00";
        }
        
        // 1. 合計の秒数を計算 (ミリ秒を切り捨て)
        let totalSeconds = Math.floor(ms / 1000);
        
        // 2. 時間を計算
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600; // 残りの秒数
        
        // 3. 分を計算
        let minutes = Math.floor(totalSeconds / 60);
        
        // 4. 秒を計算
        let seconds = totalSeconds % 60;
        
        // 5. ゼロパディングして HH:MM:SS 形式にする
        const pad = (num) => String(num).padStart(2, '0');
        
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    // データの読み込みと表示
    try {
        const clearTimeMs = parseInt(localStorage.getItem(TIME_KEY), 10);
        const mistakeCount = parseInt(localStorage.getItem(MISTAKE_KEY), 10);

        if (timeElement && !isNaN(clearTimeMs)) {
            timeElement.textContent = formatTime(clearTimeMs);
        }
        
        if (mistakeElement && !isNaN(mistakeCount)) {
            mistakeElement.textContent = mistakeCount;
        }

    } catch (e) {
        console.warn("リザルトデータの読み込みに失敗しました。", e);
        if (timeElement) timeElement.textContent = "Error";
        if (mistakeElement) mistakeElement.textContent = "Error";
    }

    // ★重要: 結果を表示したら、リロードで再表示されないよう関連データを削除
    // (ただし、ゲーム状態 'slate_quest_state_v1' などはタイトルに戻るまで保持)
    try {
        localStorage.removeItem(TIME_KEY);
        localStorage.removeItem(MISTAKE_KEY);
        // startTime もここで消しておくと、タイトルから戻った時に再計測される
        localStorage.removeItem(START_TIME_KEY); 
    } catch (e) {
        console.warn("リザルトデータのクリーンアップに失敗しました。", e);
    }

    // 「タイトルへ戻る」ボタンで index.html に遷移する際、
    // index.html 側のスクリプトが残りのゲームデータをクリアします。
});