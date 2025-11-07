// --- slate.js のデータ定義 ---

// gimmick1InitializationData
const init_data_list = [
    [13, 10, 7, 6, 17, 4],  // 0: 6要素
    [50, 15, 22, 5],       // 1: 4要素
    [45, 10, 25, 2]        // 2: 4要素
];

// gimmick1MainData の分析 (ルールの適用に必要な情報)
// (harmony使用, 'set'で+使用, 'set'で* /使用)
const main_data_analysis = [
    { harmony_used: true, plus_used: true, mul_div_used: false },  // 0
    { harmony_used: false, plus_used: true, mul_div_used: false }, // 1
    { harmony_used: true, plus_used: false, mul_div_used: false }  // 2
];

// gimmick1FinData の分析
// ('set'で+使用, 'set'で* /使用)
const fin_data_analysis = [
    { plus_used: false, mul_div_used: true },  // 0: *
    { plus_used: false, mul_div_used: true },  // 1: /
    { plus_used: true, mul_div_used: false }   // 2: +
];

// --- ヘルパー関数 (呪文のシミュレーション) ---

/**
 * 神託 (oracle) 呪文: 素数判定
 * @param {number} n
 * @returns {boolean}
 */
function is_prime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * mainロジックをシミュレートし、
 * [finalの値(fin実行前), ループ回数] を返す
 * @param {number} init_num
 * @param {number} main_num
 * @returns {[number, number]}
 */
function simulate_main_logic(init_num, main_num) {
    const data = init_data_list[init_num];
    let final = 0;
    let loop_count = 0;

    if (main_num === 0) {
        // main_num: 0
        final = 0;
        for (const num of data) {
            loop_count++;
            if (num % 2 !== 0) { // harmony num が偽 (奇数)
                final += num;
                if (final > 30) {
                    break;
                }
            }
        }
        return [final, loop_count];

    } else if (main_num === 1) {
        // main_num: 1
        final = 0;
        let prime_count = 0;
        for (const num of data) {
            loop_count++;
            if (is_prime(num)) {
                final += num;
                prime_count++;
                if (prime_count > 2) {
                    break;
                }
            }
        }
        return [final, loop_count];

    } else if (main_num === 2) {
        // main_num: 2
        final = 0;
        let index = 0;
        for (const num of data) {
            loop_count++;
            index++;
            if (index % 2 === 0) {  // harmony index (indexが偶数)
                if (num % 2 === 0) { // harmony num (numが偶数)
                    final = num;
                    break;
                }
            }
        }
        return [final, loop_count];
    }
    
    // 該当なし
    return [0, 0];
}

/**
 * finロジックをシミュレートし、reveal final の値を返す
 * @param {number} final_before_fin
 * @param {number} fin_num
 * @returns {number}
 */
function simulate_fin_logic(final_before_fin, fin_num) {
    if (fin_num === 0) {
        // set final = final * 5
        return final_before_fin * 5;
    } else if (fin_num === 1) {
        // set final = final / 2
        return Math.floor(final_before_fin / 2); // 小数点以下は切り捨て
    } else if (fin_num === 2) {
        // set final = final + 11
        return final_before_fin + 11;
    }
    return 0;
}

// --- メインロジック (石版詳細1 ルール適用) ---

/**
 * 指定されたインデックスに基づき、石版詳細1の暗号を生成する
 * @param {number} init_num - 0, 1, or 2
 * @param {number} main_num - 0, 1, or 2
 * @param {number} fin_num - 0, 1, or 2
 * @returns {string} - 4桁の暗号
 */
function getGimmick1Answer(init_num, main_num, fin_num) {
    
    // --- データの準備 ---
    const init_data = init_data_list[init_num];
    const num_elements = init_data.length;
    
    const main_info = main_data_analysis[main_num];
    const fin_info = fin_data_analysis[fin_num];
    
    // --- シミュレーション実行 ---
    const [final_before_fin, loop_count] = simulate_main_logic(init_num, main_num);
    const reveal_val = simulate_fin_logic(final_before_fin, fin_num);

    // --- 1. 鍵の上二桁の決定 ---
    // ルーン要素の全ての合計値の上二桁
    // (合計が57なら57, 92なら92と解釈)
    const top_2_digits = init_data.reduce((a, b) => a + b, 0);

    // --- 2. 鍵の下二桁の決定 ---
    let bottom_2_digits = 0;

    // ルール分岐: ユーザー指示により、6要素は「五個の場合」として扱う
    
    // === I. 初期ルーン要素が四個の場合 ===
    if (num_elements === 4) {
        
        // 1. harmony 起動式が使われている場合
        if (main_info.harmony_used) {
            // reveal final の結果の下二桁
            bottom_2_digits = reveal_val % 100;
            
        // 2. harmonyが使われておらず、setで * または / が使われていた場合
        } else if (!main_info.harmony_used && (main_info.mul_div_used || fin_info.mul_div_used)) {
            // その呪文を詠唱する直前の final の値の下二桁
            bottom_2_digits = final_before_fin % 100;
            
        // 3. 上記のいずれにも該当しない場合
        } else {
            // 最初に与えられたアレイの一つ目のルーン要素の下二桁
            bottom_2_digits = init_data[0] % 100;
        }

    // === II. 初期ルーン要素が五個(以上)の場合 ===
    } else if (num_elements >= 5) {
        
        // 1. harmony 起動式が使われている場合
        if (main_info.harmony_used) {
            // reveal final の結果に、loopの起動回数を乗算した結果の下二桁
            bottom_2_digits = (reveal_val * loop_count) % 100;
            
        // 2. harmonyが使われておらず、loopの起動回数が偶数の場合
        } else if (!main_info.harmony_used && loop_count % 2 === 0) {
            // 最初に与えられたアレイの三つ目のルーン要素の下二桁
            bottom_2_digits = init_data[2] % 100;
            
        // 3. harmonyが使われておらず、loop回数が奇数で、setで + が行われていた場合
        } else if (!main_info.harmony_used && loop_count % 2 !== 0 && (main_info.plus_used || fin_info.plus_used)) {
            // 鍵の下二桁は 31
            bottom_2_digits = 31;
            
        // 4. 上記のいずれにも該当しない場合
        } else {
            // reveal final の結果の下二桁
            bottom_2_digits = reveal_val % 100;
        }
    }

    // --- 3. 最終暗号の生成 ---
    // (例: top=57, bottom=5 の場合 "5705")
    const bottom_str = String(bottom_2_digits).padStart(2, '0');
    return `${top_2_digits}${bottom_str}`;
}

// --- 実行例 ---

// 例1: init_num=0, main_num=0, fin_num=0 の場合
const answer_0_0_0 = getGimmick1Answer(0, 0, 0);
console.log(`init=0, main=0, fin=0: ${answer_0_0_0}`); // 5725

// 例2: init_num=1, main_num=1, fin_num=2 の場合
const answer_1_1_2 = getGimmick1Answer(1, 1, 2);
console.log(`init=1, main=1, fin=2: ${answer_1_1_2}`); // 9250

// 例3: init_num=0, main_num=1, fin_num=0 の場合
const answer_0_1_0 = getGimmick1Answer(0, 1, 0);
console.log(`init=0, main=1, fin=0: ${answer_0_1_0}`); // 5731

// --- 全パターンの出力 (確認用) ---
console.log("\n--- 全27パターンの答え ---");
for (let i = 0; i < 3; i++) {
    for (let m = 0; m < 3; m++) {
        for (let f = 0; f < 3; f++) {
            const ans = getGimmick1Answer(i, m, f);
            console.log(`init=${i}, main=${m}, fin=${f}: ${ans}`);
        }
    }
}