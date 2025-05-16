let StartButton=document.getElementById('Starter');
let credits=document.getElementById('credits')
let popki=document.getElementById('popki');
let egg=document.getElementById('egg');
let grass=document.getElementById('world');
let golder=document.getElementById('money');
let tree_num=document.getElementById('tree_num');
let rock_num=document.getElementById('rock_num');
let alerts=document.getElementById('alert');
let yes=document.getElementById('yes');
let no=document.getElementById('no');
let taketree=document.getElementById('taketree')
let iftaketreebutton=document.getElementById('iftaketreebutton')
let taketree_second=document.getElementById('taketree_second')
let iftaketreebutton_second=document.getElementById('iftaketreebutton_second')
egg.style.display='none'
let gold=0;
let tree=0;
let rock=0;
let opening=new Audio("Sound/North's panda.mp3");
let goldsound=new Audio('Sound/gold.mp3')
let eggsound=new Audio('Sound/egg.mp3')
let treesound=new Audio('Sound/tree.mp3')
let rocksound=new Audio('Sound/rock.mp3')
let start=new Audio('Sound/system start.mp3')
let music=new Audio('Sound/main.mp3')
let credits_music=new Audio('Sound/credits.mp3')
let ifstart=false;
let ifcredits=false;
let money=0;
let all=[];
let golds=[];
let trees=[];1
let rocks=[];
let entity=['Northpolebear','Firebear','Whatgo','Fiveridecoo','Twistworm','Realdotdog','Blackpig','Silverlongfish'];
let entity_all={
    Northpolebear_all:{power:3,speed:1,get:1,create:1},
    Firebear_all:{power:3,speed:1,get:1,create:1},
    Whatgo_all:{power:1,speed:1,get:1,create:3},
    Fiveridecoo_all:{power:1,speed:1.5,get:1,create:1},
    Twistworm_all:{power:2,speed:1,get:2,create:2},
    Realdotdog_all:{power:1,speed:1,get:3,create:1},
    Blackpig_all:{power:1,speed:1.5,get:1,create:1},
    Silverlongfish_all:{power:1,speed:1,get:1,create:3},
}
let follow=[];
let name=''
popki.style.display='none';
golder.style.display='none';
tree_num.style.display='none';
rock_num.style.display='none';
alerts.style.display='none';
yes.style.display='none';
no.style.display='none';
taketree.style.display='none';
iftaketreebutton.style.display='none';
taketree_second.style.display='none';
iftaketreebutton_second.style.display='none';
let need_money=null;
function starttutorial(){
    alert('화면에는 지렁이가 보일겁니다.');
    alert('지렁이를 클릭하면 움직입니다. 멈추려면 다시 클릭하세요.')
    alert('우측 상단의 사각형들은 자원의 수를 나타냅니다.')
    alert('자원은 가까이서 채집합니다.')
    alert('금을 모아 알로 새 일꾼을 고용하세요.')
    alert('자, 이제, 당신의 시간입니다. 건설하고, 싸우세요.')
}
yes.addEventListener('click', (()=>{
    starttutorial();
    alerts.style.display='none';
    yes.style.display='none';
    no.style.display='none';
}));
no.addEventListener('click', ()=>{
    alerts.style.display='none';
    yes.style.display='none';
    no.style.display='none';
});
function what_(name){
    alerts.style.display='block';
    yes.style.display='block';
    no.style.display='block';
    if (name=='튜토리얼'){
        alerts.textContent='Tutorial?'; 
    }
}
function update(){
    if (ifstart){
        StartButton.style.display="none";
        credits.style.display="none";
        create(entity[4]);
        popki.style.display='block'
        golder.style.display='block'
        tree_num.style.display='block'
        rock_num.style.display='block'
        iftaketreebutton.style.display='block';
        iftaketreebutton_second.style.display='block';
        //taketree.style.display='block';
        gold_make();
        tree_make();
        rock_make();
    }else if(ifcredits){
        StartButton.style.display="none";
        credits.style.display="none";
        start_credits();
    }else{
        StartButton.style.display="block";
        credits.style.display="block";
    }
}
update();
iftaketreebutton.addEventListener('click',()=>{
    if (taketree.style.display=='block'){
        taketree.style.display='none'
    }else{
        taketree.style.display='block'
    }
});
iftaketreebutton_second.addEventListener('click',()=>{
    if (taketree_second.style.display=='block'){
        taketree_second.style.display='none'
    }else{
        taketree_second.style.display='block'
    }
});
StartButton.addEventListener('click',()=>{
    let name='튜토리얼'
    what_(name);
    ifstart=true;
    music.play();
    update();
});
credits.addEventListener('click',()=>{
    ifcredits=true;
    update();
})
music.addEventListener('ended',()=>{
    music.play();
})
function __random__(){
    let random=Math.random();
    console.log(random);
    let num=1/8;
    let reterner=null;
    if (random<num && random>0){
        reterner=0;
    }else if (random<num*2 && random>num){
        reterner=1;
    }else if (random<num*3 && random>num*2){
        reterner=2;
    }else if (random<num*4 && random>num*3){
        reterner=3;
    }else if (random<num*5 && random>num*4){
        reterner=4;
    }else if (random<num*6 && random>num*5){
        reterner=5;
    }else if (random<num*7 && random>num*6){
        reterner=6;
    }else if (random<num*8 && random>num*7){
        reterner=7;
    }else{
        reterner='Nothing';
    }
    return reterner;
}   
function create(wt){
    const creater=document.createElement("button");
    creater.id=wt;
    creater.className=wt;
    creater.type="button";
    creater.style.position="absolute";
    creater.style.top=String(Math.floor(Math.random()*(window.innerHeight-51)))+'px';
    creater.style.left=String(Math.floor(Math.random()*(window.innerWidth-51)))+'px';
    document.body.appendChild(creater);
    all.push(creater);
    follow=[]
    for (var i=0; i<all.length; i++){
        follow.push(false);
    }
    follow.push(false);
    forfor();
}
function create_gold(){
    if (golds.length<20){
        let xrandom=Math.floor(Math.random()*(window.innerWidth-51));
        let yrandom=Math.floor(Math.random()*(window.innerHeight-51));
        xrandom=String(xrandom)+'px';
        yrandom=String(yrandom)+'px';
        let creategold=document.createElement('button');
        creategold.className='gold';
        creategold.type='button';
        creategold.style.left=xrandom;
        creategold.style.top=yrandom;
        creategold.style.display='block';
        creategold.id='gold';
        document.body.appendChild(creategold);
        golds.push(creategold);
        golds[golds.length-1].addEventListener('click',()=>{
            for (var i=0;i<all.length;i++){
                if (math(all[i],creategold)<150){
                    goldsound.play();
                    creategold.remove();
                    gold+=1;
                    return
                }
            }
        });
    }
    
}
function create_tree(){
    if (trees.length<10){
        let xrandom=Math.floor(Math.random()*(window.innerWidth-51));
        let yrandom=Math.floor(Math.random()*(window.innerHeight-51));
        xrandom=String(xrandom)+'px';
        yrandom=String(yrandom)+'px';
        let createtree=document.createElement('button');
        createtree.className='tree';
        createtree.type='button';
        createtree.style.left=xrandom;
        createtree.style.top=yrandom;
        createtree.style.display='block';
        createtree.id='tree';
        document.body.appendChild(createtree);
        trees.push(createtree);
        trees[trees.length-1].addEventListener('click',()=>{
            for (var i=0;i<all.length;i++){
                if (math(all[i],createtree)<150){
                    treesound.play();
                    createtree.remove();
                    tree+=1;
                    return
                }
            }
            
        });
    }
    
}
function create_rock(){
    if (rocks.length<10){
        let xrandom=Math.floor(Math.random()*(window.innerWidth-51));
        let yrandom=Math.floor(Math.random()*(window.innerHeight-51));
        xrandom=String(xrandom)+'px';
        yrandom=String(yrandom)+'px';
        let createrock=document.createElement('button');
        createrock.className='rock';
        createrock.type='button';
        createrock.style.left=xrandom;
        createrock.style.top=yrandom;
        createrock.style.display='block';
        createrock.id='rock';
        document.body.appendChild(createrock);
        rocks.push(createrock);
        rocks[rocks.length-1].addEventListener('click',()=>{
            for (var i=0;i<all.length;i++){
                if (math(all[i],createrock)<150){
                    rocksound.play();
                    createrock.remove();
                    rock+=1;
                    return
                }
            }
            
        });  
    }
    
}
function math(elem1,elem2){
    const x1 = elem1.offsetLeft;
    const y1 = elem1.offsetTop;
    const x2 = elem2.offsetLeft;
    const y2 = elem2.offsetTop;
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}
function what(){
    random_what=__random__();
    if (random_what=='Nothing'){
    }else{
        create(entity[random_what]);
    }
}
function add_2(i){
    if (follow[i]===true){
        follow[i]=false
    }else{
        if (!follow[i]){
                follow[i]=true;
                console.log(i)
        }
    } 
}
function add(i){
    all[i].addEventListener("click",()=>{
        console.log(follow[i])
        add_2(i);  
    });
}
function forfor(){
    add(all.length-1)
}
popki.addEventListener('mouseenter',()=>{
    popki.style.opacity=0.5;
});
popki.addEventListener('mouseleave',()=>{
    popki.style.opacity=1;
});
golder.addEventListener('mouseenter',()=>{
    golder.style.opacity=0.5;
});
golder.addEventListener('mouseleave',()=>{
    golder.style.opacity=1;
});
tree_num.addEventListener('mouseenter',()=>{
    tree_num.style.opacity=0.5;
});
tree_num.addEventListener('mouseleave',()=>{
    tree_num.style.opacity=1;
});
rock_num.addEventListener('mouseenter',()=>{
    rock_num.style.opacity=0.5;
});
rock_num.addEventListener('mouseleave',()=>{
    rock_num.style.opacity=1;
});
document.addEventListener("mousemove",(event)=>{
    x=event.clientX;
    y=event.clientY;
});
function gold_make(){
    setTimeout(()=>{
        create_gold();
        gold_make();
    },Math.floor(10000+(Math.random()*(25000-10000))))
}
function tree_make(){
    setTimeout(()=>{
        create_tree();
        tree_make();
    },Math.floor(10000+(Math.random()*(25000-10000))))
}
function rock_make(){
    setTimeout(()=>{
        create_rock();
        rock_make();
    },Math.floor(10000+(Math.random()*(25000-10000))))
}
popki.addEventListener('click',()=>{
    if (gold>=need_money){
        gold-=need_money;
        create(entity[__random__()]);
    }
});
function move(i__,xxy,yyx,n_){
    if (follow[i__]){
        if (xxy>0){
            all[i__].style.left=String(parseInt(all[i__].style.left.replace('px',''))+(n_))+"px";
        }else if (xxy<0){
            all[i__].style.left=String(parseInt(all[i__].style.left.replace('px',''))-(n_))+"px";
        }
        if (yyx>0){
            all[i__].style.top=String(parseInt(all[i__].style.top.replace('px',''))+(n_))+"px";
        }else if (yyx<0){
            all[i__].style.top=String(parseInt(all[i__].style.top.replace('px',''))-(n_))+"px";
        }
    }
}
function yee(){
    if (taketree.style.display=='block'){
        iftaketreebutton.style.left='50vw'
    }else{
        iftaketreebutton.style.left='0vw'
    }
    if (taketree_second.style.display=='block'){
        iftaketreebutton_second.style.left='50vw'
    }else{
        iftaketreebutton_second.style.left='0vw'
    }
    if (follow.includes(true)){
        grass.style.cursor='crosshair';
    }else{
        grass.style.cursor='default';
    }
    need_money=all.length*15;
    popki.textContent=String(need_money);
    golder.textContent=String(gold);
    tree_num.textContent=String(tree);
    rock_num.textContent=String(rock);
    for (var i=0; i<all.length; i++){
        var l=parseInt(all[i].style.left.replace('px',''))+35;
        var t=parseInt(all[i].style.top.replace('px',''))+35;
        var xx=x-l
        var yy=y-t
        var n=entity_all[all[i].id+"_all"]
        n=n['speed'];
        move(i,xx,yy,n);
    }
    requestAnimationFrame(yee);
}
yee();
function start_credits(){
    credits_music.play();
    grass.style.display='none'
    credits_music.addEventListener('ended',()=>{
        ifcredits=false
        update();
        grass.style.display='block'
    })
}