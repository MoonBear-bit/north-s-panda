let StartButton=document.getElementById('Starter');
let startimg=document.getElementById('startimg');
let credits=document.getElementById('credits')
let popki=document.getElementById('popki');
let grass=document.getElementById('world');
let golder=document.getElementById('money');
let tree_num=document.getElementById('tree_num');
let rock_num=document.getElementById('rock_num');
let diamond_num=document.getElementById('diamond_num');
let alerts=document.getElementById('alert');
let yes=document.getElementById('yes');
let no=document.getElementById('no');
let taketree=document.getElementById('taketree');
let iftaketreebutton=document.getElementById('iftaketreebutton');
let taketree_second=document.getElementById('taketree_second');
let iftaketreebutton_second=document.getElementById('iftaketreebutton_second');
let taketree_in_1=document.getElementById('taketree_in_1');
let taketree_in_2=document.getElementById('taketree_in_2');
let taketree_in_3=document.getElementById('taketree_in_3');
let taketree_in_4=document.getElementById('taketree_in_4');
let taketree_in_5=document.getElementById('taketree_in_5');
let taketree2_in_1=document.getElementById('taketree2_in_1');
let taketree2_in_2=document.getElementById('taketree2_in_2');
document.querySelectorAll('[id="span"]').forEach(el=>{
  el.style.display='none';
});
let gold=0;
let tree=0;
let rock=0;
let diamond=0;
let opening=new Audio("Sound/North's panda.mp3");
let goldsound=new Audio('Sound/gold.mp3')
let eggsound=new Audio('Sound/egg.mp3')
let treesound=new Audio('Sound/tree.mp3')
let rocksound=new Audio('Sound/rock.mp3')
let diamondsound=new Audio('Sound/diamond.mp3')
let start=new Audio('Sound/system start.mp3')
let music=new Audio('Sound/main.mp3')
let credits_music=new Audio('Sound/credits.mp3')
let ifstart=false;
let ifcredits=false;
let money=0;
let all=[];
let golds=[];
let trees=[];
let rocks=[];
let diamonds=[];
let entity=['Northpolebear','Firebear','Whatgo','Fiveridecoo','Twistworm','Realdotdog','Blackpig','Silverlongfish'];
let entity_all={
    Northpolebear_all:{power:3,speed:1,get:1,create:1},
    Firebear_all:{power:3,speed:1,get:1,create:1},
    Whatgo_all:{power:1,speed:1,get:1,create:3},
    Fiveridecoo_all:{power:1,speed:1,get:1,create:1},
    Twistworm_all:{power:2,speed:1,get:2,create:2},
    Realdotdog_all:{power:1,speed:1,get:3,create:1},
    Blackpig_all:{power:1,speed:1,get:1,create:1},
    Silverlongfish_all:{power:1,speed:1,get:1,create:3},
}
let house={
    움집:false,
    초가집:false,
    성:false,
    주택:false,
    국방부:false
}
let house_=['움집','초가집','성','주택','국방부']
let yosae={
    토성:false,
    감시초소:false,
    탑:false,
    전망대:false,
    스나이퍼타워:false
}
let yosea_=['토성','감시초소','탑','전망대','스나이퍼타워']
let sangsan={
    공방:false,
    대장간:false,
    공장:false,
    ai공장:false
}
let sangsan_=['공방','대장간','공장','ai공장']
let doback={
    주점:false,
    아지트:false,
    카지노:false
}
let doback_=['주점','아지트','카지노']
let cheeryo={
    온천:false,
    의원:false,
    동네병원:false,
    대학병원:false
}
let cheeryo_=['온천','의원','동네병원','대학병원']
let follow=[];
let name=''
popki.style.display='none';
golder.style.display='none';
tree_num.style.display='none';
rock_num.style.display='none';
diamond_num.style.display='none';
alerts.style.display='none';
yes.style.display='none';
no.style.display='none';
taketree.style.display='none';
iftaketreebutton.style.display='none';
taketree_second.style.display='none';
iftaketreebutton_second.style.display='none';
taketree_in_1.style.display='none'
taketree_in_2.style.display='none'
taketree_in_3.style.display='none'
taketree_in_4.style.display='none'
taketree_in_5.style.display='none'
taketree2_in_1.style.display='none'
taketree2_in_2.style.display='none'
startimg.style.display='block'
music.volume=0.3
credits_music.volume=0.3
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
        startimg.style.display='none'
        create(entity[4]);
        popki.style.display='block'
        golder.style.display='block'
        tree_num.style.display='block'
        rock_num.style.display='block'
        diamond_num.style.display='block'
        iftaketreebutton.style.display='block';
        iftaketreebutton_second.style.display='block';
        //taketree.style.display='block';
        gold_make();
        tree_make();
        rock_make();
        diamond_make();
    }else if(ifcredits){
        StartButton.style.display="none";
        credits.style.display="none";
        startimg.style.display='none'
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
    creater.style.left=String(Math.floor(Math.random()*(window.innerWidth-300)))+'px';
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
        let yrandom=Math.floor(Math.random()*(window.innerHeight-300));
        xrandom=String(xrandom)+'px';
        yrandom=String(yrandom)+'px';
        let creategold=document.createElement('button');
        creategold.className='gold';
        creategold.type='button';
        creategold.style.left=xrandom;
        creategold.style.top=yrandom;
        creategold.style.display='block';
        document.body.appendChild(creategold);
        golds.push(creategold);
        golds[golds.length-1].addEventListener('click',()=>{
            for (var i=0;i<all.length;i++){
                if (math(all[i],creategold)<200){
                    goldsound.play();
                    creategold.remove();
                    golds.splice(0,1)
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
        let yrandom=Math.floor(Math.random()*(window.innerHeight-300));
        xrandom=String(xrandom)+'px';
        yrandom=String(yrandom)+'px';
        let createtree=document.createElement('button');
        createtree.className='tree';
        createtree.type='button';
        createtree.style.left=xrandom;
        createtree.style.top=yrandom;
        createtree.style.display='block';
        document.body.appendChild(createtree);
        trees.push(createtree);
        trees[trees.length-1].addEventListener('click',()=>{
            for (var i=0;i<all.length;i++){
                if (math(all[i],createtree)<200){
                    treesound.play();
                    createtree.remove();
                    trees.splice(0,1)
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
        let yrandom=Math.floor(Math.random()*(window.innerHeight-300));
        xrandom=String(xrandom)+'px';
        yrandom=String(yrandom)+'px';
        let createrock=document.createElement('button');
        createrock.className='rock';
        createrock.type='button';
        createrock.style.left=xrandom;
        createrock.style.top=yrandom;
        createrock.style.display='block';
        document.body.appendChild(createrock);
        rocks.push(createrock);
        rocks[rocks.length-1].addEventListener('click',()=>{
            for (var i=0;i<all.length;i++){
                if (math(all[i],createrock)<200){
                    rocksound.play();
                    createrock.remove();
                    rocks.splice(0,1)
                    rock+=1;
                    return
                }
            }
            
        });  
    }
    
}
function create_diamond(){
    if (diamonds.length<1){
        let xrandom=Math.floor(Math.random()*(window.innerWidth-51));
        let yrandom=Math.floor(Math.random()*(window.innerHeight-300));
        xrandom=String(xrandom)+'px';
        yrandom=String(yrandom)+'px';
        let creatediamond=document.createElement('button');
        creatediamond.className='diamond';
        creatediamond.type='button';
        creatediamond.style.left=xrandom;
        creatediamond.style.top=yrandom;
        creatediamond.style.display='block';
        document.body.appendChild(creatediamond);
        diamonds.push(creatediamond);
        diamonds[diamonds.length-1].addEventListener('click',()=>{
            for (var i=0;i<all.length;i++){
                if (math(all[i],creatediamond)<200){
                    diamondsound.play();
                    creatediamond.remove();
                    diamonds.splice(0,1)
                    diamond+=1;
                    return
                }
            }
        });
    }
    
}
function math(elem1,elem2){
    let x1=elem1.offsetLeft;
    let y1=elem1.offsetTop;
    let x2=elem2.offsetLeft;
    let y2=elem2.offsetTop;
    let dx=x1-x2;
    let dy=y1-y2;
    return Math.sqrt(dx*dx+dy*dy);
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
diamond_num.addEventListener('mouseenter',()=>{
    diamond_num.style.opacity=0.5;
});
diamond_num.addEventListener('mouseleave',()=>{
    diamond_num.style.opacity=1;
});
document.addEventListener("mousemove",(event)=>{
    x=event.clientX;
    y=event.clientY;
});
function gold_make(){
    setTimeout(()=>{
        create_gold();
        gold_make();
    },Math.floor(5000+(Math.random()*(15000-5000))))
}
function tree_make(){
    setTimeout(()=>{
        create_tree();
        tree_make();
    },Math.floor(5000+(Math.random()*(15000-5000))))
}
function rock_make(){
    setTimeout(()=>{
        create_rock();
        rock_make();
    },Math.floor(5000+(Math.random()*(15000-5000))))
}
function diamond_make(){
    setTimeout(()=>{
        create_diamond();
        diamond_make();
    },Math.floor(50000+(Math.random()*(150000-50000))))
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
            all[i__].style.left=String(parseInt(all[i__].style.left.replace('px',''))+n_)+"px";
        }else if (xxy<0){
            all[i__].style.left=String(parseInt(all[i__].style.left.replace('px',''))-n_)+"px";
        }
        if (yyx>0){
            all[i__].style.top=String(parseInt(all[i__].style.top.replace('px',''))+n_)+"px";
        }else if (yyx<0){
            all[i__].style.top=String(parseInt(all[i__].style.top.replace('px',''))-n_)+"px";
        }
    }
}
function yee(){
    if (taketree.style.display=='block'){
        iftaketreebutton.style.left='50vw'
        taketree_in_1.style.display='block'
        taketree_in_2.style.display='block'
        taketree_in_3.style.display='block'
        taketree_in_4.style.display='block'
        taketree_in_5.style.display='block'
    }else{
        iftaketreebutton.style.left='0vw'
        taketree_in_1.style.display='none'
        taketree_in_2.style.display='none'
        taketree_in_3.style.display='none'
        taketree_in_4.style.display='none'
        taketree_in_5.style.display='none'
    }
    if (taketree_second.style.display=='block'){
        iftaketreebutton_second.style.left='50vw'
        taketree2_in_1.style.display='block'
        taketree2_in_2.style.display='block'
    }else{
        iftaketreebutton_second.style.left='0vw'
        taketree2_in_1.style.display='none'
        taketree2_in_2.style.display='none'
    }
    if (follow.includes(true)){
        grass.style.cursor='crosshair';
    }else{
        grass.style.cursor='default';
    }
    need_money=all.length*10;
    popki.textContent=String(need_money);
    golder.textContent=String(gold);
    tree_num.textContent=String(tree);
    rock_num.textContent=String(rock);
    diamond_num.textContent=String(diamond);
    for (var i=0; i<all.length; i++){
        var l=parseInt(all[i].style.left.replace('px',''))+35;
        var t=parseInt(all[i].style.top.replace('px',''))+35;
        var xx=x-l
        var yy=y-t
        move(i,xx,yy,1);
    }
    requestAnimationFrame(yee);
}
yee();
function start_credits(){
    credits_music.play();
    grass.style.display='none'
    document.querySelectorAll('[id="span"]').forEach(el => {
        el.style.display = 'block';
    });
    credits_music.addEventListener('ended',()=>{
        credits_music.play()
    })
}