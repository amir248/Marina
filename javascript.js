document.querySelector("#date").innerHTML='2024';
document.querySelector("#displayList").innerHTML='one from eight';
const state={};
let overflow=+0;
let lengthMargin=570;
state.click=+0;
state.overflow=+0;
state.overflowClick=+0;

function statusOverflow(){
  if(state.overflow==-1650){
    state.overflow=1100;
  }else if(state.overflow==1650){
    state.overflow=-1100;
  }
}
document.querySelector('#leftArrow').addEventListener('click',()=>{
  // overflow=overflow-lengthMargin;
  state.overflowClick--;
  console.log('oK '+state.overflow+" _ "+state.overflowClick);
  state.overflow=state.overflow-550;
  statusOverflow();
  document.querySelector("div.boxis:nth-child(1)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${state.overflow}`+"px;";
  // document.querySelector(".boxis:nth-child(2)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow2}`+"px;";
  // document.querySelector(".boxis:nth-child(3)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow3}`+"px;";
  // document.querySelector(".boxis:nth-child(4)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow4}`+"px;";
  // document.querySelector(".boxis:nth-child(5)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow[5]}`+"px;";
  // document.querySelector(".boxis:nth-child(6)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow[6]}`+"px;";
  // document.querySelector(".boxis:nth-child(7)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow[7]}`+"px;";
  // document.querySelector(".boxis:nth-child(8)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow[8]}`+"px;";
});
document.querySelector('#rightArrow').addEventListener('click',()=>{
  state.overflowClick++;
  console.log('right '+state.overflow+" _ "+state.overflowClick);
  // overflow=overflow+lengthMargin;
  // document.querySelector(".boxis:nth-child(1)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow}`+"px;";
  state.overflow=state.overflow+550;
  statusOverflow();
  document.querySelector(".boxis:nth-child(1)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${state.overflow}`+"px;";
  // document.querySelector(".boxis:nth-child(2)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow[2]}`+"px;";
  // document.querySelector(".boxis:nth-child(3)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow[3]}`+"px;";
  // document.querySelector(".boxis:nth-child(4)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow[4]}`+"px;";
  // document.querySelector(".boxis:nth-child(5)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow[5]}`+"px;";
  // document.querySelector(".boxis:nth-child(6)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow[6]}`+"px;";
  // document.querySelector(".boxis:nth-child(7)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow[7]}`+"px;";
  // document.querySelector(".boxis:nth-child(8)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow[8]}`+"px;";
});
//remover
function newBoxis(lengthMargin){
  let newBoxi=document.createElement('div');
  newBoxi.className='boxis';
  document.querySelector('#sliderSection').prepend(newBoxi);
};
//-----------
document.querySelector('.menu').addEventListener('click',()=>{
  state.click++;
  if(state.click===1){
    console.log('ok '+ console.log(state.click));
    document.querySelector('.menu > #two').style.cssText=`transition: all 1s ease-out;background:rgba(186, 226, 73, 0);`;
    setTimeout(()=>{
      document.querySelector('.menu > #two').style.cssText=`transition: all 1s ease-out;background:rgba(186, 226, 73, 0);display:none;`;
    },500);
    document.querySelector('.menu > #one').style.cssText='transition: all 1s ease-out;transform:rotate(45deg)';
    document.querySelector('.menu > #three').style.cssText='transition: all 1s ease-out;transform:rotate(-45deg)';
    document.querySelector('.menu').style.cssText='transition: all 1s ease-out;justify-content:center;';
    createElementMenu();
  }
  if(state.click===2){
    document.querySelector('.menu > #two').style.cssText=`transition: all 1s ease-out;background:rgba(186, 226, 73, 1);display:block;`;
    document.querySelector('.menu > #one').style.cssText='transition: all 1s ease-out;transform:rotate(0deg)';
    document.querySelector('.menu > #three').style.cssText='transition: all 1s ease-out;transform:rotate(0deg)';
    setTimeout(()=>{
      document.querySelector('.menu').style.cssText='transition: all 1s ease-out;justify-content:space-between;';
    },833);

    state.click=0;
    removeElementMenu();
  }
});
function createElementMenu(){
  let blockMenu=document.createElement('div');
  blockMenu.innerHTML=`
  <a href='/catalog'>
    <h3>Каталог</h3>
  </a>
  <a href='/deal'>
    <h3>О деле</h3>
  </a>
  <a href='/gallery'>
    <h3>Галерея</h3>
  </a>
  <a href='/catalog'>
    <h3>Каталог</h3>
  </a>
  <a href='/contact'>
    <h3>Контакты</h3>
  </a>
  `;
  blockMenu.style.cssText=`
  top:0;
  width:100%;
  height:1px;
  transition: all 1s ease-out;
  `;
  setTimeout(()=>{
    blockMenu.style.cssText=`
    top:0;
    transition: all 1s ease-out;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #1D2F30;
    flex-direction:column;
    position:fixed;
    width:100%;
    height:100vh;
    `;
  },100);
    blockMenu.setAttribute('id','XXX');
  document.querySelector('body').append(blockMenu);
  document.querySelector('body').style.cssText=`overflow:hidden;`;
};
function removeElementMenu(){
  document.querySelector('#XXX').style.cssText=`
  transition: all 1s ease-out;
  top:0;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position:fixed;
  width:100%;
  height:1px;
  background:rgba(186, 226, 73, 0);
  `;
  document.querySelector('body').style.cssText=`overflow:auto;`;
  setTimeout(()=>{
    document.querySelector('body > #XXX').remove();

  },900);
}
