let TutorialButton=document.getElementById('tutorialbutton')
let StartButton=document.getElementById('Starter');
let startimg=document.getElementById('startimg');
let credits=document.getElementById('credits')
let popki=document.getElementById('popki');
let grass=document.getElementById('world');
let golder=document.getElementById('money');
let tree_num=document.getElementById('tree_num');
let rock_num=document.getElementById('rock_num');
let diamond_num=document.getElementById('diamond_num');
let techtree=document.getElementById('techtree');
let iftechtreebutton=document.getElementById('iftechtreebutton');
let techtree_second=document.getElementById('techtree_second');
let iftechtreebutton_second=document.getElementById('iftechtreebutton_second');
let techtree_in_1=document.getElementById('techtree_in_1');
let techtree_in_2=document.getElementById('techtree_in_2');
let techtree_in_3=document.getElementById('techtree_in_3');
let techtree_in_4=document.getElementById('techtree_in_4');
let techtree_in_5=document.getElementById('techtree_in_5');
let techtree2_in_1=document.getElementById('techtree2_in_1');
let techtree2_in_2=document.getElementById('techtree2_in_2');
let build=document.getElementById('build');
let buildbutton=document.getElementById('buildbutton');
let build_what=document.getElementById('build_what');
let build_next=document.getElementById('build_next')
let nobuild=document.getElementById('nobuild')
let time=document.getElementById('time')
let timebutton=document.getElementById('timebutton')
let diedimg=document.getElementById('died')
let noi=document.getElementById('noi')
document.querySelectorAll('.span').forEach(el=>{
el.style.display='none';
});
let ifhit=true
let ifhit_2=true
let ifhit_3=true
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
let music=new Audio('Sound/dark.mp3')
let credits_music=new Audio('Sound/main.mp3')
let war_music=new Audio('Sound/war.mp3')
let scream=new Audio('Sound/scream.mp3')
let damage=new Audio('Sound/damage.mp3')
let damage_time=new Audio('Sound/damage.mp3')
let damage_build=new Audio('Sound/damage.mp3')
let diedsound=new Audio('Sound/died.mp3')
let opener=new Audio('Sound/opener.mp3')
let cancelsound=new Audio('Sound/cancel.mp3')
let clicksound=new Audio('Sound/click.mp3')
let ifstart=false;
let ifcredits=false;
let money=0;
function VhToPx(vh){
    return window.innerHeight*(vh/100);
}
let all=[];
let golds=[];
let trees=[];
let rocks=[];
let diamonds=[];
let entity=['Northpolebear','Firebear','Whatgo','Fiveridecoo','Twistworm','Realdotdog','Blackpig','Silverlongfish'];
let boss_entity=['TheRifleHunter','','','','','','','','']
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
    움집:true,
    초가집:false,
    성:false,
    주택:false,
    국방부:false
}
let house_=['움집','초가집','성','주택','국방부','end']
let house_what=0
let yosae={
    토성:true,
    감시초소:false,
    탑:false,
    전망대:false,
    스나이퍼타워:false
}
let yosae_=['토성','감시초소','탑','전망대','스나이퍼타워','end']
let yosae_what=0
let sangsan={
    공방:true,
    대장간:false,
    공장:false,
    ai공장:false
}
let sangsan_=['공방','대장간','공장','ai공장','end']
let sangsan_what=0
let doback={
    주점:true,
    아지트:false,
    카지노:false
}
let doback_=['주점','아지트','카지노','end']
let doback_what=0
let cheeryo={
    온천:true,
    의원:false,
    동네병원:false,
    대학병원:false
}
let cheeryo_=['온천','의원','동네병원','대학병원','end']
let wheels=['움집','초가집','성','주택','국방부','토성','감시초소','탑','전망대','스나이퍼타워','공방','대장간',
    '공장','ai공장','주점','아지트','카지노','온천','의원','동네병원','대학병원']
let cheeryo_what=0
let need_diamond=[1,1,1,1,1]
let build_thing=[]
let wheels_build={
    움집:{
        id:'움집',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:15,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/house_1.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    초가집:{
        id:'초가집',
        height:'150px',
        width:'150px',
        cursor:'pointer',
        display:'block',
        hp:20,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 150px 150px 0px',
        background_color:'black',
        background_image:'url(Image/house_2.png)',
        background_size:'150px 150px',
        color:'white',
        font_size:'30px'
    },
    성:{
        id:'성',
        height:'150px',
        width:'150px',
        cursor:'pointer',
        display:'block',
        hp:25,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 150px 150px 0px',
        background_color:'black',
        background_image:'url(Image/house_3.png)',
        background_size:'150px 150px',
        color:'white',
        font_size:'30px'
    },
    주택:{
        id:'주택',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:35,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/house_4.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    국방부:{
        id:'국방부',
        height:'200px',
        width:'200px',
        cursor:'pointer',
        display:'block',
        hp:50,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 200px 200px 0px',
        background_color:'black',
        background_image:'url(Image/house_5.png)',
        background_size:'200px 200px',
        color:'white',
        font_size:'30px'
    },
    토성:{
        id:'토성',
        height:'80px',
        width:'80px',
        cursor:'pointer',
        display:'block',
        hp:15,
        power:1,
        sagury:120,
        cheeryo:0,
        padding:'0px 80px 80px 0px',
        background_color:'black',
        background_image:'url(Image/yosae_1.png)',
        background_size:'80px 80px',
        color:'white',
        font_size:'30px'
    },
    감시초소:{
        id:'감시초소',
        height:'80px',
        width:'80px',
        cursor:'pointer',
        display:'block',
        hp:20,
        power:2,
        sagury:150,
        cheeryo:0,
        padding:'0px 80px 80px 0px',
        background_color:'black',
        background_image:'url(Image/yosae_2.png)',
        background_size:'80px 80px',
        color:'white',
        font_size:'30px'
    },
    탑:{
        id:'탑',
        height:'50px',
        width:'50px',
        cursor:'pointer',
        display:'block',
        hp:30,
        power:2,
        sagury:150,
        cheeryo:0,
        padding:'0px 50px 50px 0px',
        background_color:'black',
        background_image:'url(Image/yosae_3.png)',
        background_size:'50px 50px',
        color:'white',
        font_size:'30px'
    },
    전망대:{
        id:'전망대',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:30,
        power:3,
        sagury:200,
        cheeryo:0,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/yosae_4.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    스나이퍼타워:{
        id:'스나이퍼타워',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:50,
        power:5,
        sagury:300,
        cheeryo:0,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/yosae_5.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    공방:{
        id:'공방',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:15,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/sangsan_1.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    대장간:{
        id:'대장간',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:20,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/sangsan_2.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    공장:{
        id:'공장',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:25,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/sangsan_3.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    ai공장:{
        id:'ai공장',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:40,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/sangsan_4.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    주점:{
        id:'주점',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:15,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/doback_1.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    아지트:{
        id:'아지트',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:20,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/doback_2.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    카지노:{
        id:'카지노',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:30,
        power:0,
        sagury:0,
        cheeryo:0,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/doback_3.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    온천:{
        id:'온천',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:15,
        power:0,
        sagury:0,
        cheeryo:1,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/cheeryo_1.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    의원:{
        id:'의원',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:20,
        power:0,
        sagury:0,
        cheeryo:2,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/cheeryo_2.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    동네병원:{
        id:'동네병원',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:25,
        power:0,
        sagury:0,
        cheeryo:3,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/cheeryo_3.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    },
    대학병원:{
        id:'대학병원',
        height:'100px',
        width:'100px',
        cursor:'pointer',
        display:'block',
        hp:30,
        power:0,
        sagury:0,
        cheeryo:4,
        padding:'0px 100px 100px 0px',
        background_color:'black',
        background_image:'url(Image/cheeryo_4.png)',
        background_size:'100px 100px',
        color:'white',
        font_size:'30px'
    }
}
let need_wheels={
    움집:{
        tree:10,
        rock:0,
        gold:1,
        diamond:0
    },
    초가집:{
        tree:12,
        rock:5,
        gold:5,
        diamond:2
    },
    성:{
        tree:15,
        rock:20,
        gold:10,
        diamond:5
    },
    국방부:{
        tree:20,
        rock:20,
        gold:20,
        diamond:10
    },
    토성:{
        tree:10,
        rock:0,
        gold:1,
        diamond:0
    },
    감시초소:{
        tree:12,
        rock:5,
        gold:10,
        diamond:1
    },
    탑:{
        tree:10,
        rock:20,
        gold:15,
        diamond:3
    },
    전망대:{
        tree:10,
        rock:15,
        gold:30,
        diamond:5
    },
    스나이퍼타워:{
        tree:0,
        rock:35,
        gold:40,
        diamond:10
    },
    공방:{
        tree:10,
        rock:0,
        gold:1,
        diamond:0
    },
    대장간:{
        tree:10,
        rock:10,
        gold:5,
        diamond:0
    },
    공장:{
        tree:10,
        rock:25,
        gold:20,
        diamond:5
    },
    ai공장:{
        tree:0,
        rock:50,
        gold:30,
        diamond:10
    },
    주점:{
        tree:10,
        rock:0,
        gold:1,
        diamond:0
    },
    아지트:{
        tree:10,
        rock:10,
        gold:10,
        diamond:5
    },
    카지노:{
        tree:20,
        rock:20,
        gold:25,
        diamond:10
    },
    온천:{
        tree:0,
        rock:10,
        gold:1,
        diamond:2
    },
    의원:{
        tree:10,
        rock:10,
        gold:10,
        diamond:5
    },
    동네병원:{
        tree:10,
        rock:30,
        gold:40,
        diamond:10
    },
    대학병원:{
        tree:10,
        rock:30,
        gold:30,
        diamond:20
    }
}
let follow=[];
let name=''
let ifwar=false;
let ifmouseinthebuildwhat=false
let ifbuild=false
let enemy=[]
let enemy_bow=[]
let enemy_rifle
let warman_num=0
let until_time=0
let ifcandie_enemy=true
popki.style.display='none';
golder.style.display='none';
tree_num.style.display='none';
rock_num.style.display='none';
diamond_num.style.display='none';
techtree.style.display='none';
iftechtreebutton.style.display='none';
techtree_second.style.display='none';
iftechtreebutton_second.style.display='none';
techtree_in_1.style.display='none'
techtree_in_2.style.display='none'
techtree_in_3.style.display='none'
techtree_in_4.style.display='none'
techtree_in_5.style.display='none'
techtree2_in_1.style.display='none'
techtree2_in_2.style.display='none'
build.style.display='none';
buildbutton.style.display='none';
build_what.style.display='none'
startimg.style.display='block'
nobuild.style.display='none'
time.style.display='none'
timebutton.style.display='none'
diedimg.style.display='none'
music.volume=0.8
credits_music.volume=0.3
war_music.volume=0.5
async function wait(timeout){
    await new Promise(resolve=>setTimeout(resolve(),timeout));
}
noi.addEventListener('click',()=>{
    noi.style.display='none'
    opener.play()
})
function starttutorial(){
    alert('이 게임은 "북쪽의 푸바오"이며 오랜 역사를 거쳐 내려왔습니다.')
    alert('먼저, 당신 앞에 지렁이가 놓여져 있는 게 보일 겁니다. 이들은 당신의 지휘 아래에 움직입니다. 이들은 "아군"이라 칭합니다. 모든 사물의 HP는 사물의 좌측 상단에 표시됩니다.')
    alert('당신의 아군을 클릭한 후 이동시킬 위치를 클릭합니다. 아군들이 당신을 따라오는 것을 멈추고 싶다면 해당 아군을 다시 클릭하세요.')
    alert('이 게임의 목표는 연어를 사살하는 것입니다.')
    alert('일정 시간마다 사냥꾼들이 몰려옵니다. 거기까지 남은 시간은 화면 상단의 "time"을 눌러 확인합니다.')
    alert('총 9번의 보스몹이 나옵니다. 마지막 보스가 바로 연어입니다.')
    alert('당신은 다음과 같은 일을 할 수 있습니다. [채집],[개발],[건설],[전투],[생산*개발중],[치료],[도박*개발중]')
    alert('[채집]:아군에게는 각각의 사거리가 존재합니다. 채집을 위해서는 물질이 사거리 안에 들어올 때까지 아군을 이동시킨 후, 물질을 클릭하여 완료합니다.')
    alert('당신이 채집한 물질은 우측 상단 UI에 표시됩니다. 이는 클릭하면 반투명해집니다.')
    alert('우측 하단 알 버튼에는 숫자가 적혀 있습니다. 그만큼의 금을 모은 후 알을 클릭하면 새로 당신의 아군을 얻게 됩니다.')
    alert('[개발]:당신은 다이아몬드를 모아야 합니다. 그리고 좌측의 "techtree1"을 클릭합니다. 그곳에서 각각의 건설 수준을 알 수 있고, 각 숫자만큼 다이아몬드를 모아 개발할 수 있습니다.')
    alert('개발한 건축물은 건설에서 해금되어 당신을 도울 수 있습니다. techtree1의 버튼은 5개이며 각각 "방어벽"-"요새"-"생산"-"도박"-"치료"입니다.')
    alert('[건설]:당신이 모은 자원을 사용할 수단이 필요합니다. 먼저 좌측의 "build"를 클릭합니다. 처음에는 null로 표시됩니다. 이제 당신이 해금한 건축물을 "next"를 눌러 선택합니다.')
    alert('이후 건축물의 이름을 클릭하면 건설이 시작됩니다. 당신이 원하는 위치를 누르면 건설이 되며, 만약 취소를 원한다면 좌측 상단의 cancel을 클릭하세요.')
    alert('각각의 건축물의 능력을 설명드리겠습니다.')
    alert('<방어벽>:이는 가장 기본적인 건축물입니다. 큰 크기로 적들의 통과를 막고, 그 안의 아군을 방어합니다.')
    alert('<요새>:이는 굉장히 효율적인 건축물입니다. 크기는 작으나 적들을 공격할 수 있습니다.')
    alert('<생산>:이는 당신의 중심이 되는 건축물입니다. 무기를 생산할 수 있고, 공장을 지으면 채집을 도와주기도 합니다.')
    alert('<도박>:이는 당신의 도파민을 책임지는 건축물입니다. 도박을 통해 금의 수가 대량 증감합니다.')
    alert('<치료>:이는 생존의 핵심이 되는 건축물입니다. 아군을 이 위에 올려놓으면 서서히 HP를 치료합니다. 그러나 여전히 최대는 10입니다.')
    alert('건축물들은 모두 공격당해 부서질 수 있습니다.')
    alert('[전투]:적들을 클릭하십시오. 아군의 사거리 안에 있는 한, 적들의 HP가 당신 아군의 공격력만큼 감소하고, 결국 사망합니다.')
    alert('지금부터 적의 종류를 말씀드리겠습니다.')
    alert('<칼 사냥꾼>:근거리입니다. 당신의 소유권 중 가장 가까운 것을 향해 다가가고, 70px 거리에서 공격합니다.')
    alert('<활 사냥꾼>:중거리입니다. 가만히 있지만 칼 사냥꾼보다 크기가 좀 더 큽니다. 250px거리에서 공격합니다')
    alert('<산탄총 사냥꾼>:원거리입니다. 당신의 소유권 중 가장 가까운 것을 향해 다가가고, 350px거리에서 공격합니다.')
    alert('<연어>:개발중...')
    alert('[생산]:개발중...')
    alert('[치료]:치료 건축물을 건설합니다. 그리고 아군을 그 안으로 들여보냅니다. 계속 그 안에 있는 한, HP가 10이 되기 전까지 5초마다 HP를 회복합니다.')
    alert('[도박]:개발중...')
}
opener.addEventListener('ended',()=>{
    opener.play()
})
function update(){
    if (ifstart){
        StartButton.style.display='none';
        TutorialButton.style.display='none';
        credits.style.display='none';
        startimg.style.display='none'
        create(entity[4]);
        popki.style.display='block'
        golder.style.display='block'
        tree_num.style.display='block'
        rock_num.style.display='block'
        diamond_num.style.display='block'
        iftechtreebutton.style.display='block';
        iftechtreebutton_second.style.display='block';
        buildbutton.style.display='block';
        timebutton.style.display='block'
        gold_make();
        tree_make();
        rock_make();
        diamond_make();
    }else if(ifcredits){
        StartButton.style.display='none';
        TutorialButton.style.display='none';
        credits.style.display='none';
        startimg.style.display='none'
        start_credits();
    }else{
        StartButton.style.display='block';
        TutorialButton.style.display='block';
        credits.style.display='block';
    }
}
update();
iftechtreebutton.addEventListener('click',()=>{
    if (techtree.style.display=='block'){
        techtree.style.display='none'
        clicksound.play()
    }else{
        techtree.style.display='block'
        clicksound.play()
    }
});
iftechtreebutton_second.addEventListener('click',()=>{
    if (techtree_second.style.display=='block'){
        techtree_second.style.display='none'
        clicksound.play()
    }else{
        techtree_second.style.display='block'
        clicksound.play()
    }
});
buildbutton.addEventListener('click',()=>{
    if (build.style.display=='block'){
        build.style.display='none'
        clicksound.play()
    }else{
        build.style.display='block'
        clicksound.play()
    }
});
timebutton.addEventListener('click',()=>{
    if (time.style.display=='block'){
        time.style.display='none'
        clicksound.play()
    }else{
        time.style.display='block'
        clicksound.play()
    }
});
let war_num=1
function create_enemy(n,nhp,npower,nspeed){
    let creater=document.createElement('button');
    creater.id=n;
    creater.hp=nhp
    creater.power=npower
    creater.speed=nspeed
    creater.sagury=70
    creater.className='enemy';
    creater.type='button';
    creater.style.position='absolute';
    creater.style.left=String(Math.floor(Math.random()*(window.innerWidth-151)))+'px';
    creater.style.top=String(Math.floor(100+Math.random()*(window.innerHeight-300)))+'px';
    document.body.appendChild(creater);
    enemy.push(creater);
    creater.addEventListener('click',()=>{
        for(var i=0;i<all.length;i++){
            if (math(creater,all[i])<all[i].sagury){
                if (ifcandie_enemy){
                    ifcandie_enemy=false
                    creater.hp-=all[i].power
                    scream.play()
                    setTimeout(()=>{
                        ifcandie_enemy=true
                    },1);
                }
            }
        }
    });
    
}
function create_bow_enemy(n,nhp,npower){
    let creater=document.createElement('button');
    creater.id=n;
    creater.hp=nhp
    creater.power=npower
    creater.speed=0
    creater.sagury=250
    creater.className='enemy_bow';
    creater.type='button';
    creater.style.position='absolute';
    creater.style.left=String(Math.floor(Math.random()*(window.innerWidth-151)))+'px';
    creater.style.top=String(Math.floor(100+Math.random()*(window.innerHeight-300)))+'px';
    document.body.appendChild(creater);
    enemy.push(creater);
    creater.addEventListener('click',()=>{
        for(var i=0;i<all.length;i++){
            if (math(creater,all[i])<all[i].sagury){
                if (ifcandie_enemy){
                    ifcandie_enemy=false
                    creater.hp-=all[i].power
                    scream.play()
                    setTimeout(()=>{
                        ifcandie_enemy=true
                    },1);
                }
            }
        }
    });
    
}
function create_boss_enemy_TheRifleHunter(n,nhp,npower,nspeed){
    let creater=document.createElement('button');
    creater.id=n;
    creater.hp=nhp
    creater.power=npower
    creater.speed=nspeed
    creater.sagury=350
    creater.className='TheRifleHunter';
    creater.type='button';
    creater.style.position='absolute';
    creater.style.left=String(Math.floor(Math.random()*(window.innerWidth-151)))+'px';
    creater.style.top=String(Math.floor(100+Math.random()*(window.innerHeight-300)))+'px';
    document.body.appendChild(creater);
    enemy.push(creater);
    creater.addEventListener('click',()=>{
        for(var i=0;i<all.length;i++){
            if (math(creater,all[i])<all[i].sagury){
                if (ifcandie_enemy){
                    ifcandie_enemy=false
                    creater.hp-=all[i].power
                    scream.play()
                    setTimeout(()=>{
                        ifcandie_enemy=true
                    },1);
                }
            }
        }
    });
    
}
function the_sixth_war(){}
function the_fifth_war_boss(){
    until_time=150
    warman_num=0
    setTimeout(()=>{
        for(var i=0;i<5;i++){ 
            war_num=5
            warman_num+=1
            create_bow_enemy(warman_num,5,1)
        }
        warman_num+=1
        create_boss_enemy_TheRifleHunter(warman_num,20,3,1)
    }, 150000);
}
function the_fourth_war(){
    until_time=100
    warman_num=0
    setTimeout(()=>{
        war_num=4
        for(var i=0;i<5;i++){
            warman_num+=1
            create_enemy(warman_num,5,1,2)
        }
        for(var i=0;i<5;i++){
            warman_num+=1
            create_bow_enemy(warman_num,3,1)
        }
    }, 100000);
}
function the_third_war(){
    until_time=100
    warman_num=0
    setTimeout(()=>{
        war_num=3
        for(var i=0;i<10;i++){
            warman_num+=1
            create_enemy(warman_num,5,2,1)
        }
    }, 100000);
}
function the_second_war(){
    until_time=50
    warman_num=0
    setTimeout(()=>{
        war_num=2
        for(var i=0;i<6;i++){
            warman_num+=1
            create_enemy(warman_num,5,1,1)
        }
    }, 50000);
}
function the_first_war(){
    warman_num=0
    for(var i=0;i<3;i++){
        war_num=1
        warman_num+=1
        create_enemy(warman_num,3,1,1)
    }
    ifwar=true
    music.pause()
    music.currentTime=0
    war_music.play()
    war_music.addEventListener('ended',()=>{
        war_music.play()
    })
}
function startwar(){
    war_num=0
    until_time=10
    setTimeout(()=>{
        the_first_war()
    },10000);
}
war_num=0
StartButton.addEventListener('click',()=>{
    clicksound.play()
    ifstart=true;
    opener.pause()
    music.play();
    update();
    startwar()
});
TutorialButton.addEventListener('click',()=>{
    clicksound.play()
    ifstart=true;
    opener.pause()
    music.play();
    update();
    startwar()
    setTimeout(()=>{
        starttutorial()
    },10);
});
credits.addEventListener('click',()=>{
    ifcredits=true;
    update();
    opener.pause()
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
        reterner=0;
    }
    return reterner;
}   
function create(wt){
    let createrplayer=document.createElement('button');
    createrplayer.id=wt;
    createrplayer.className=wt;
    createrplayer.type='button';
    createrplayer.style.position='absolute';
    createrplayer.hp=10
    createrplayer.power=entity_all[wt+'_all']['power']
    createrplayer.sagury=200
    createrplayer.speed=1
    createrplayer.style.left=String(Math.floor(Math.random()*(window.innerWidth-151)))+'px';
    createrplayer.style.top=String(Math.floor(100+Math.random()*(window.innerHeight-300)))+'px';
    document.body.appendChild(createrplayer);
    all.push(createrplayer);
    follow=[]
    for (var i=0; i<all.length; i++){
        follow.push(false);
    }
    follow.push(false);
    const i_=all.length-1
    createrplayer.addEventListener('click',()=>{
        if (follow[i_]===true){
            follow[i_]=false
        }else{
            if (!follow[i_]){
                follow[i_]=true;
            }
        } 
    });
}
function create_gold(){
    if (golds.length<20){
        let xrandom=Math.floor(Math.random()*(window.innerWidth-151));
        let yrandom=Math.floor(100+Math.random()*(window.innerHeight-300));
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
        let xrandom=Math.floor(Math.random()*(window.innerWidth-151));
        let yrandom=Math.floor(100+Math.random()*(window.innerHeight-300));
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
        let xrandom=Math.floor(Math.random()*(window.innerWidth-151));
        let yrandom=Math.floor(100+Math.random()*(window.innerHeight-300));
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
        let xrandom=Math.floor(Math.random()*(window.innerWidth-151));
        let yrandom=Math.floor(100+Math.random()*(window.innerHeight-300));
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
    if (!elem1||!elem2||!elem1.style||!elem2.style)return Infinity;
    let x1=parseInt(elem1.style.left.replace('px',''));
    let y1=parseInt(elem1.style.top.replace('px',''));
    let x2=parseInt(elem2.style.left.replace('px',''));
    let y2=parseInt(elem2.style.top.replace('px',''))
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
document.addEventListener('mousemove',(event)=>{
    x=event.clientX;
    y=event.clientY;
});
function gold_make(){
    setTimeout(()=>{
        create_gold();
        gold_make();
    },Math.floor(1000+(Math.random()*(8000-1000))))
}
function tree_make(){
    setTimeout(()=>{
        create_tree();
        tree_make();
    },Math.floor(2000+(Math.random()*(10000-2000))))
}
function rock_make(){
    setTimeout(()=>{
        create_rock();
        rock_make();
    },Math.floor(2000+(Math.random()*(10000-2000))))
}
function diamond_make(){
    setTimeout(()=>{
        create_diamond();
        diamond_make();
    },Math.floor(5000+(Math.random()*(15000-5000))))
}
popki.addEventListener('click',()=>{
    if (gold>=need_money){
        gold-=need_money;
        create(entity[__random__()]);
        clicksound.play()
    }else{
        cancelsound.play()
    }
});
function move(i__,xxy,yyx,n_){
    if (follow[i__]){
        if (xxy>0){
            all[i__].style.left=String(parseInt(all[i__].style.left.replace('px',''))+n_)+'px';
        }else if (xxy<0){
            all[i__].style.left=String(parseInt(all[i__].style.left.replace('px',''))-n_)+'px';
        }
        if (yyx>0){
            all[i__].style.top=String(parseInt(all[i__].style.top.replace('px',''))+n_)+'px';
        }else if (yyx<0){
            all[i__].style.top=String(parseInt(all[i__].style.top.replace('px',''))-n_)+'px';
        }
    }
}
damage.addEventListener('ended',()=>{
    ifhit=true;
});
damage_time.addEventListener('ended',()=>{
    setTimeout(() => {
        ifhit_2=true
    }, 100);
})
damage_build.addEventListener('ended',()=>{
    setTimeout(() => {
        ifhit_3=true
    }, 100);
})
function set(){
    setTimeout(() => {
        if (until_time>0){
            until_time-=1
        }
        set()
    }, 1000);
}
set()
function died(){
    diedsound.play()
    diedsound.addEventListener('ended',()=>{
        diedsound.play();
    });
    diedimg.style.display='block'
}
function moveEnemy(enemys){
    var who_is_it=true
    var what_the_small=0
    if (all.length!=0){
        for (var i=0;i<enemys.length;i++){
            for (var ii=0;ii<all.length;ii++){
                if (math(enemys[i],all[ii])<math(enemys[i],all[what_the_small])){
                    what_the_small=ii
                }
            }
            for (var iii=0;iii<build_thing.length;iii++){
                if (who_is_it){
                    if (math(enemys[i],all[what_the_small])>math(enemys[i],build_thing[iii])){
                        who_is_it=false
                        what_the_small=iii
                    }
                }else{
                    if (math(enemys[i],build_thing[what_the_small])>math(enemys[i],build_thing[iii])){
                        what_the_small=iii
                    }
                }
            }
            if (who_is_it){
                if (parseInt(all[what_the_small].style.left.replace('px',''))<parseInt(enemys[i].style.left.replace('px',''))){
                    enemys[i].style.left=String(parseInt(enemys[i].style.left.replace('px',''))-enemys[i].speed)+'px'
                }else{
                    enemys[i].style.left=String(parseInt(enemys[i].style.left.replace('px',''))+enemys[i].speed)+'px'
                }
                if (parseInt(all[what_the_small].style.top.replace('px',''))<parseInt(enemys[i].style.top.replace('px',''))){
                    enemys[i].style.top=String(parseInt(enemys[i].style.top.replace('px',''))-enemys[i].speed)+'px'
                }else{
                    enemys[i].style.top=String(parseInt(enemys[i].style.top.replace('px',''))+enemys[i].speed)+'px'
                }
            }else{
                console.log(math(build_thing[what_the_small],enemys[i]),(parseInt(build_thing[what_the_small].style.width.replace('px','')))/2)
                if (math(build_thing[what_the_small],enemys[i])>(parseInt(build_thing[what_the_small].style.width.replace('px','')))/2){
                    if (parseInt(build_thing[what_the_small].style.left.replace('px',''))<parseInt(enemys[i].style.left.replace('px',''))){
                        enemys[i].style.left=String(parseInt(enemys[i].style.left.replace('px',''))-enemys[i].speed)+'px'
                    }else{
                        enemys[i].style.left=String(parseInt(enemys[i].style.left.replace('px',''))+enemys[i].speed)+'px'
                    }
                    if (parseInt(build_thing[what_the_small].style.top.replace('px',''))<parseInt(enemys[i].style.top.replace('px',''))){
                        enemys[i].style.top=String(parseInt(enemys[i].style.top.replace('px',''))-enemys[i].speed)+'px'
                    }else{
                        enemys[i].style.top=String(parseInt(enemys[i].style.top.replace('px',''))+enemys[i].speed)+'px'
                    }
                }else{
                    if(ifhit_3){
                        build_thing[what_the_small].hp-=enemys[i].power
                        damage_build.play()
                        ifhit_3=false
                    }
                }
            }
        }
    }
}
function whatdied(){
    if (all.length==0 && ifstart){
        ifstart=false
        war_music.pause()
        music.pause()
        credits_music.pause()
        died()
    }
}
function SeeHP(){
    for (var i=0;i<all.length;i++){
        all[i].textContent=all[i].hp
    }
    for (var i=0;i<enemy.length;i++){
        enemy[i].textContent=enemy[i].hp
    }
    for (var i=0;i<build_thing.length;i++){
        build_thing[i].textContent=build_thing[i].hp
    }
}
let keep=true
let cheeryo_player_bool=[]
function start_cheeryo(i__,ii__){
    keep=true
    let i_=i__
    let ii_=ii__
    cheeryo_player_bool[i_]=false
    for (var is=0;is<50;is++){
        if (keep){
            setTimeout(()=>{
                if (math(all[i_],build_thing[ii_])<parseInt(build_thing[ii_].style.width.replace('px',''))/2){
                }else{
                    keep=false
                }
            },is*100);
        }
    }
    setTimeout(()=>{
        if (keep && all[i_].hp<10){
        all[i_].hp+=build_thing[ii_].cheeryo
        }
        cheeryo_player_bool[i_]=true
    },5000);
    
}
function cheeryo_player(){
    while (all.length>cheeryo_player_bool.length){
        if (all.length>cheeryo_player_bool.length){
            cheeryo_player_bool.push(true)
        }
    }
    for (var i=0;i<all.length;i++){
        for (var ii=0;ii<build_thing.length;ii++){
            if (math(all[i],build_thing[ii])<parseInt(build_thing[ii].style.width.replace('px',''))/2 && cheeryo_player_bool[i]){
                start_cheeryo(i,ii)
            }
        }
    }
}
function roof_thing(){
    for (var i=0; i<enemy.length; i++){
        if (ifcandie_enemy){
            if (enemy[i].hp<0){
                var target=enemy[i]
                enemy[i].remove()
                enemy=enemy.filter(n=>n!==target)
                warman_num-=1
                break
            }
        }
        
    }
    for (var i=0;i<all.length;i++){
        for (var ii=0;ii<enemy.length;ii++){
            if (math(all[i],enemy[ii])<enemy[ii].sagury && ifhit){
                all[i].hp-=enemy[ii].power
                damage.play()
                ifhit=false
            }
        }
    }
    for (var i=0;i<build_thing.length;i++){
        for (var ii=0;ii<enemy.length;ii++){
            if (math(build_thing[i],enemy[ii])<enemy[ii].sagury && ifhit_3){
                build_thing[i].hp-=enemy[ii].power
                damage_build.play()
                ifhit_3=false
            }
        }
    }
    for (var i=0;i<build_thing.length;i++){
        for (var ii=0;ii<enemy.length;ii++){
            if (math(build_thing[i],enemy[ii])<build_thing[i].sagury && ifhit_2){
                enemy[ii].hp-=build_thing[i].power
                damage_time.play()
                ifhit_2=false
            }
        }
    }
    for (var i=0;i<all.length;i++){
        if (all[i].hp<0){
            let target=all[i]
            follow.splice(all.indexOf(target),1)
            cheeryo_player_bool.splice(all.indexOf(target),1)
            all[i].remove()
            all=all.filter(n=>n!==target)
            break
        }
    }
    for (var i=0;i<build_thing.length;i++){
        if (build_thing[i].hp<0){
            let target=build_thing[i]
            build_thing[i].remove()
            build_thing=build_thing.filter(n=>n!==target)
            break
        }
    }
}
function blockandnone(){
    techtree_in_1.textContent=house_[house_what]+' '+need_diamond[0]
    techtree_in_2.textContent=yosae_[yosae_what]+' '+need_diamond[1]
    techtree_in_3.textContent=sangsan_[sangsan_what]+' '+need_diamond[2]
    techtree_in_4.textContent=doback_[doback_what]+' '+need_diamond[3]
    techtree_in_5.textContent=cheeryo_[cheeryo_what]+' '+need_diamond[4]
    if (techtree.style.display=='block'){
        iftechtreebutton.style.left='50vw'
        techtree_in_1.style.display='block'
        techtree_in_2.style.display='block'
        techtree_in_3.style.display='block'
        techtree_in_4.style.display='block'
        techtree_in_5.style.display='block'
    }else{
        iftechtreebutton.style.left='0vw'
        techtree_in_1.style.display='none'
        techtree_in_2.style.display='none'
        techtree_in_3.style.display='none'
        techtree_in_4.style.display='none'
        techtree_in_5.style.display='none'
    }
    if (techtree_second.style.display=='block'){
        iftechtreebutton_second.style.left='50vw'
        techtree2_in_1.style.display='block'
        techtree2_in_2.style.display='block'
    }else{
        iftechtreebutton_second.style.left='0vw'
        techtree2_in_1.style.display='none'
        techtree2_in_2.style.display='none'
    }
    if (build.style.display=='block'){
        buildbutton.style.left='50vw'
        build_what.style.display='block'
        build_next.style.display='block'
    }else{
        buildbutton.style.left='0vw'
        build_what.style.display='none'
        build_next.style.display='none'
    }
    if (time.style.display=='block'){
        timebutton.style.top='10vh'
    }else{
        timebutton.style.top='0vh'
    }
    if (follow.includes(true)){
        grass.style.cursor='crosshair';
    }else{
        grass.style.cursor='default';
    }
}
function yee(){
    if (warman_num<1 && war_num && until_time==0){
        ifwar=false
        music.play()
        war_music.pause()
        war_music.currentTime=0
        switch (war_num) {
            case 1:
                the_second_war();
                break;
            case 2:
                the_third_war();
                break;
            case 3:
                the_fourth_war();
                break;
            case 4:
                the_fifth_war_boss();
                break;
        }
    }
    roof_thing()
    cheeryo_player()
    SeeHP()
    whatdied()
    moveEnemy(enemy);
    blockandnone()
    need_money=all.length*10;
    popki.textContent=String(need_money);
    golder.textContent=String(gold);
    tree_num.textContent=String(tree);
    rock_num.textContent=String(rock);
    diamond_num.textContent=String(diamond);
    time.textContent='Until the next wave       '+until_time+'sec'
    for (var i=0; i<all.length; i++){
        var l=parseInt(all[i].style.left.replace('px',''))+35;
        var t=parseInt(all[i].style.top.replace('px',''))+35;
        var xx=x-l
        var yy=y-t
        move(i,xx,yy,all[i].speed);
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
function build_what_move(){
    if (build_what.textContent=='null'){
        build_what.textContent=wheels[0]
        if (house[build_what.textContent]){
            build_what.style.border='5px solid cyan'
        }else{
            build_what.style.border='5px solid red'
        }
    }else{
        var what_the_textContent_in_build_what=null
        what_the_textContent_in_build_what=wheels[wheels.indexOf(build_what.textContent)]
        if (house_.includes(what_the_textContent_in_build_what)){
            if (what_the_textContent_in_build_what==house_[house_.length-2]){
                build_what.textContent=yosae_[0]
                build_what.style.border='5px solid cyan'
            }else{
                if (what_the_textContent_in_build_what==null){
                    build_what.textContent=house_[1]
                }
                else{
                    build_what.textContent=house_[house_.indexOf(what_the_textContent_in_build_what)+1]
                }
                if (house[build_what.textContent]){
                    build_what.style.border='5px solid cyan'
                }else{
                    build_what.style.border='5px solid red'
                }
            }
            
        }
        if (yosae_.includes(what_the_textContent_in_build_what)){
            if (what_the_textContent_in_build_what==yosae_[yosae_.length-2]){
                build_what.textContent=sangsan_[0]
                build_what.style.border='5px solid cyan'
            }else{
                if (what_the_textContent_in_build_what==null){
                    build_what.textContent=yosae_[1]
                }
                else{
                    build_what.textContent=yosae_[yosae_.indexOf(what_the_textContent_in_build_what)+1]
                }
                if (yosae[build_what.textContent]){
                    build_what.style.border='5px solid cyan'
                }else{
                    build_what.style.border='5px solid red'
                }
            }
        }
        if (sangsan_.includes(what_the_textContent_in_build_what)){
            if (what_the_textContent_in_build_what==sangsan_[sangsan_.length-2]){
                build_what.textContent=doback_[0]
                build_what.style.border='5px solid cyan'
            }else{
                if (what_the_textContent_in_build_what==null){
                    build_what.textContent=sangsan_[1]
                }
                else{
                    build_what.textContent=sangsan_[sangsan_.indexOf(what_the_textContent_in_build_what)+1]
                }
                if (sangsan[build_what.textContent]){
                    build_what.style.border='5px solid cyan'
                }else{
                    build_what.style.border='5px solid red'
                }
            }
            
        }
        if (doback_.includes(what_the_textContent_in_build_what)){
            if (what_the_textContent_in_build_what==doback_[doback_.length-2]){
                build_what.textContent=cheeryo_[0]
                build_what.style.border='5px solid cyan'
            }else{
                if (what_the_textContent_in_build_what==null){
                    build_what.textContent=doback_[1]
                }
                else{
                    build_what.textContent=doback_[doback_.indexOf(what_the_textContent_in_build_what)+1]
                }
                if (doback[build_what.textContent]){
                    build_what.style.border='5px solid cyan'
                }else{
                    build_what.style.border='5px solid red'
                }
            }
        }
        if (cheeryo_.includes(what_the_textContent_in_build_what)){
            if (what_the_textContent_in_build_what==cheeryo_[cheeryo_.length-2]){
                build_what.textContent=house_[0]
                build_what.style.border='5px solid cyan'
            }else{
                if (what_the_textContent_in_build_what==null){
                    build_what.textContent=cheeryo_[1]
                }
                else{
                    build_what.textContent=cheeryo_[cheeryo_.indexOf(what_the_textContent_in_build_what)+1]
                }
                if (cheeryo[build_what.textContent]){
                    build_what.style.border='5px solid cyan'
                }else{
                    build_what.style.border='5px solid red'
                }
            }
            
        }
    }
}
techtree_in_1.addEventListener('click',()=>{
    if (diamond>need_diamond[0]-1 && house_what<5){
        house_what+=1
        diamondsound.play()
        diamond-=need_diamond[0]
        need_diamond[0]=need_diamond[0]*3
        house[house_[house_what-1]]=true
    }else{
        cancelsound.play()
    }
});
techtree_in_2.addEventListener('click',()=>{
    if (diamond>need_diamond[1]-1 && yosae_what<5){
        yosae_what+=1
        diamondsound.play()
        diamond-=need_diamond[1]
        need_diamond[1]=need_diamond[1]*3
        yosae[yosae_[yosae_what-1]]=true
    }else{
        cancelsound.play()
    }
});
techtree_in_3.addEventListener('click',()=>{
    if (diamond>need_diamond[2]-1 && sangsan_what<4){
        sangsan_what+=1
        diamondsound.play()
        diamond-=need_diamond[2]
        need_diamond[2]=need_diamond[2]*3
        sangsan[sangsan_[sangsan_what-1]]=true
    }else{
        cancelsound.play()
    }
});
techtree_in_4.addEventListener('click',()=>{
    if (diamond>need_diamond[3]-1 && doback_what<3){
        doback_what+=1
        diamondsound.play()
        diamond-=need_diamond[3]
        need_diamond[3]=need_diamond[3]*3
        doback[doback_[doback_what-1]]=true
    }else{
        cancelsound.play()
    }
});
techtree_in_5.addEventListener('click',()=>{
    if (diamond>need_diamond[4]-1 && cheeryo_what<4){
        cheeryo_what+=1
        diamondsound.play()
        diamond-=need_diamond[4]
        need_diamond[4]=need_diamond[4]*3
        cheeryo[cheeryo_[cheeryo_what-1]]=true
    }else{
        cancelsound.play()
    }
});
build_what.addEventListener('mouseenter',()=>{
    ifmouseinthebuildwhat=true
});
build_what.addEventListener('mouseleave',()=>{
    ifmouseinthebuildwhat=false
});
build_what.addEventListener('wheel',()=>{
    if (ifmouseinthebuildwhat){
        build_what_move()
        clicksound.play()
    }
});
build_next.addEventListener('click',()=>{
    build_what_move()
    clicksound.play()
})
let iffirstbuild=true
build_what.addEventListener('click',()=>{
    if (house[build_what.textContent] | yosae[build_what.textContent] | sangsan[build_what.textContent] |
        doback[build_what.textContent] | cheeryo[build_what.textContent]){
        build.style.display='none'
        buildbutton.style.left='0vw'
        clicksound.play()
        if (iffirstbuild){
            alert('Click to build. Right click to cancel.')
            iffirstbuild=false
        }
        nobuild.style.display='block'
        ifbuild=true
    }else{
        cancelsound.play()
    }
    
});
grass.addEventListener('click',(event)=>{
    if (ifbuild){
        thebuild()
        ifbuild=false;
        clicksound.play()
    }
});
nobuild.addEventListener('click',()=>{
    ifbuild=false
    nobuild.style.display='none'
    cancelsound.play()
})
function thebuild(){
    var createrbuild=build_what.textContent;
    if (tree>=need_wheels[createrbuild]['tree']){
        if (rock>=need_wheels[createrbuild]['rock']){
            if (gold>=need_wheels[createrbuild]['gold']){
                if (diamond>=need_wheels[createrbuild]['diamond']){
                    tree-=need_wheels[createrbuild]['tree']
                    rock-=need_wheels[createrbuild]['rock']
                    gold-=need_wheels[createrbuild]['gold']
                    diamond-=need_wheels[createrbuild]['diamond']
                    createbuild(createrbuild)
                }else{
                    alert('No diamond!')
                }
            }else{
                alert('No gold!')
            }
        }else{
            alert('No rock!')
        }
    }else{
        alert('No wood!')
    }
}
let x_;
let y_;
document.addEventListener('mousemove',(event)=>{
    x_=event.clientX;
    y_=event.clientY;
})
function createbuild(listener){
    listener=wheels_build[listener]
    let creater_build_what=document.createElement('button')
    creater_build_what.id=listener['id']
    creater_build_what.style.position='absolute'
    creater_build_what.style.height=listener['height']
    creater_build_what.style.width=listener['width']
    creater_build_what.style.top=String(y_)+'px'
    creater_build_what.style.left=String(x_)+'px'
    creater_build_what.style.cursor=listener['cursor']
    creater_build_what.style.display=listener['display']
    creater_build_what.hp=listener['hp']
    creater_build_what.power=listener['power']
    creater_build_what.sagury=listener['sagury']
    creater_build_what.cheeryo=listener['cheeryo']
    creater_build_what.style.padding=listener['padding']
    creater_build_what.style.textAlign='left';
    creater_build_what.style.verticalAlign='top';
    creater_build_what.style.backgroundColor=listener['background_color']
    creater_build_what.style.backgroundImage=listener['background_image']
    creater_build_what.style.backgroundSize=listener['background_size']
    creater_build_what.style.color=listener['color']
    creater_build_what.style.fontSize=listener['font_size']
    creater_build_what.style.zIndex='4'
    document.body.appendChild(creater_build_what)
    build_thing.push(creater_build_what)
}