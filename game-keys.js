/**
 * 現在のゲームモード（'easy'/'normal'）に基づいて、
 * localStorageで使用するキーを動的に生成します。
 * * このファイルは、他のどのJSよりも先にHTMLで読み込む必要があります。
 */
(function() {
    // sessionStorageから現在のモードを取得。なければ 'normal' を使う
    const mode = sessionStorage.getItem('gameMode') || 'normal';

    // グローバル（window）に、このセッションで使うキーのセットを定義する
    window.GAME_KEYS = {
        /** 現在のモード ('easy' または 'normal') */
        MODE: mode,

        /** ライフ、クリア状況 (例: 'slate_quest_state_v1_easy') */
        STATE: `slate_quest_state_v1_${mode}`,
        
        /** 入力途中のパスワード (例: 'slate_quest_answers_v1_easy') */
        INPUTS: `slate_quest_answers_v1_${mode}`,
        
        /** 計測開始時刻 (例: 'startTime_easy') */
        START_TIME: `startTime_${mode}`,
        
        /** リザルト用: クリア時間 (例: 'finalClearTime_easy') */
        FINAL_TIME: `finalClearTime_${mode}`,
        
        /** リザルト用: ミス回数 (例: 'finalMistakeCount_easy') */
        FINAL_MISTAKES: `finalMistakeCount_${mode}`
    };

    // デバッグ用にコンソールに出力（開発が完了したら削除してもOK）
    console.log(`Game mode set to: ${mode}`, window.GAME_KEYS);


    // ★★★ 開発者用デバッグ機能 (ここから追加) ★★★
    window.addEventListener('keydown', (e) => {
        // 開発者用に 'Escape' キーでタイトルに戻る機能
        // (index.html 自身では動作させないようチェック)
        if (e.key === 'Escape' && window.location.pathname.includes('index.html') === false) {
            
            // 警告ダイアログを表示
            const confirmed = window.confirm(
                '【開発者用】\nタイトル画面に戻りますか？\n(入力途中のパスワードは保存されません)'
            );
            
            // ユーザーがOKした場合のみ遷移
            if (confirmed) {
                // index.html に遷移
                // (index.html 側のスクリプトがゲームデータをクリアします)
                window.location.href = 'index.html';
            }
        }
    });
    // ★★★ (ここまで追加) ★★★

})();