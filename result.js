document.addEventListener('DOMContentLoaded', () => {
    
    // ★修正: game-keys.js から動的キーを取得
    const TIME_KEY = window.GAME_KEYS.FINAL_TIME;
    const MISTAKE_KEY = window.GAME_KEYS.FINAL_MISTAKES;
    const START_TIME_KEY = window.GAME_KEYS.START_TIME;

    // 表示要素を取得
    const timeElement = document.getElementById('clear-time');
    const mistakeElement = document.getElementById('mistake-count');

    // ミリ秒を HH:MM:SS 形式にフォーマットする関数
    function formatTime(ms) {
        if (isNaN(ms) || ms < 0) {
            return "00:00:00";
        }
        let totalSeconds = Math.floor(ms / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
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
    try {
        localStorage.removeItem(TIME_KEY);
        localStorage.removeItem(MISTAKE_KEY);
        localStorage.removeItem(START_TIME_KEY); 
    } catch (e) {
        console.warn("リザルトデータのクリーンアップに失敗しました。", e);
    }
});