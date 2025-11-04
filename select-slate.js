const stoneclass=  Array.from(document.getElementsByClassName('stone'));
const body=document.getElementsByTagName('body')[0];
console.log(stoneclass.length);

document.addEventListener('DOMContentLoaded', () => {
    const stones = Array.from(document.querySelectorAll('.stone'));
    // 各石版にインデックスを割り当て、クリックで遷移
    for (let i = 0; i < stones.length; i++) {
        const el = stones[i];
        el.dataset.index = String(i);
        el.addEventListener('click', (event) => {
            const idx = event.currentTarget.dataset.index || i;
            // slate.html にインデックスを渡して遷移
            window.location.href = `slate.html?index=${idx}`;
        }, { once: true });
    }
});