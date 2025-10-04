const stoneclass=  Array.from(document.getElementsByClassName('stone'));
const body=document.getElementsByTagName('body')[0];
console.log(stoneclass.length);
//石板の大きさを変更する関数


function stoneclick(event)
    {
        console.log("Sotone clicked");
        let bigstone=event.target;
        
        for (let j = 0; j < stoneclass.length; j++) {
            stoneclass[j].style.display='none';
        }
        bigstone.style.display='block';
        bigstone.classList.replace('stone','stone_nohover');
        body.style.margin='1% 5% 1% 5%';
        const backButton = document.createElement('button');
        backButton.className = 'backbutton';
        backButton.id = 'backbutton';
        backButton.textContent = '戻る';

        body.appendChild(backButton);
        let backbutton=document.getElementById('backbutton');
        backbutton.addEventListener("click", function() {
            
            bigstone.classList.replace('stone_nohover','stone');
            body.style.margin='3% 10% 0% 10%';
            for (let j = 0; j < stoneclass.length; j++) {
                stoneclass[j].style.display='block';
                stoneclass[j].addEventListener("click", stoneclick, {once: true});
                
            }
            backbutton.remove();
            
        });
        
        
        
    }
for (let i = 0; i < stoneclass.length; i++) {
    stoneclass[i].addEventListener("click", stoneclick, {once: true});
}
