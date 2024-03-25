document.querySelector("#date").innerHTML='2024';
document.querySelector("#displayList").innerHTML='one from five';
let overflow=+0;
let lengthMargin=570;
document.querySelector('#leftArrow').addEventListener('click',()=>{
  overflow=overflow-lengthMargin;
  console.log('oK');
  if(lengthMargin==-470){

    newBoxis();
  }
  document.querySelector(".boxis:nth-child(1)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow}`+"px;"
});
document.querySelector('#rightArrow').addEventListener('click',()=>{
  console.log('right');
  overflow=overflow+lengthMargin;
  document.querySelector(".boxis:nth-child(1)").style.cssText="animation-name:sliden;animation-duration: 4s;margin-left:"+`${overflow}`+"px;";

});

function newBoxis(lengthMargin){
  let newBoxi=document.createElement('div');
  newBoxi.className='boxis';
  document.querySelector('#sliderSection').prepend(newBoxi);
}
