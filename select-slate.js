const stoneclass=  Array.from(document.getElementsByClassName('stone'));
const body=document.getElementsByTagName('body')[0];
console.log(stoneclass.length);
//石板の大きさを変更する関数

const stoneclass_name='stone';
const nohover_class_name='stone_nohover';
const buckbotan='backbutton';
function stoneclick(event)
    {
        let bigstone=event.target;
        
        for (let j = 0; j < stoneclass.length; j++) {
            stoneclass[j].style.display='none';
        }
        bigstone.style.display='block';
        bigstone.classList.replace(stoneclass_name,nohover_class_name);
        body.style.margin='1% 5% 1% 5%';

        const backButton = document.createElement('button');
        backButton.className = buckbotan;
        backButton.id = buckbotan;
        backButton.textContent = '戻る';

        body.appendChild(backButton);
        let backbutton=document.getElementById(buckbotan);
        backbutton.addEventListener("click", function() {
            
            bigstone.classList.replace(nohover_class_name,stoneclass_name);
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