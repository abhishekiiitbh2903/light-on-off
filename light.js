const onButton=document.querySelector(".turnonbtn");
onButton.addEventListener('click',()=>{
    document.querySelector("img").src="light2.gif";
});
const offButton=document.querySelector(".turnoffbtn");
offButton.addEventListener('click',()=>{
    document.querySelector("img").src="light1.gif";
});


