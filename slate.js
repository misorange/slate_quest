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
        bigstone.classList.add('stone_nohover');
        bigstone.classList.remove('stone');
        bigstone=document.getElementsByClassName('stone_nohover')[0];
        body.style.marginLeft='5%';
        body.style.marginRight='5%';
        body.style.marginTop='2%';
        body.style.marginBottom='2%';
        const backButton = document.createElement('button');
        backButton.className = 'backbutton';
        backButton.id = 'backbutton';
        backButton.textContent = '戻る';

        body.appendChild(backButton);
        let backbutton=document.getElementById('backbutton');
        backbutton.addEventListener("click", function() {
            
            bigstone.classList.replace('stone_nohover','stone');
            bigstone.style.transition = 'all 0';
    
            
            body.style.marginLeft='10%';
            body.style.marginRight='10%';
            body.style.marginTop='3%';
            body.style.marginBottom='0%';
            for (let j = 0; j < stoneclass.length; j++) {
                stoneclass[j].style.display='block';
                stoneclass[j].addEventListener("click", stoneclick, {once: true});
                
            }
            bigstone.style.transition = 'all 0.4s';
            backbutton.remove();
            
        });
        
        
        
    }
for (let i = 0; i < stoneclass.length; i++) {
    stoneclass[i].addEventListener("click", stoneclick, {once: true});
}
