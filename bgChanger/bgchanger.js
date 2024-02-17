const buttons = document.querySelectorAll(".btn");
const body= document.querySelector("body");

buttons.forEach((btn)=>{
    // console.log(btn);
    btn.addEventListener("click",(e)=>{
        // console.log(e);
        // console.log(e.target);
        switch(e.target.id)
        {
            case 'red':
                {
                    body.style.backgroundColor="rgb(240, 76, 76)";
                    body.style.color="black";
                    break;
                }  
            case 'yellow':
                {
                    body.style.backgroundColor="rgb(238, 238, 50)";
                    body.style.color="black";
                    break;
                }
            case 'purple':
                {
                    body.style.backgroundColor="rgb(210, 90, 210)";
                    body.style.color="black";
                    break;
                }
            case 'orange':
                {
                    body.style.backgroundColor="rgb(247, 187, 74)";
                    body.style.color="black";
                    break;
                }
        }

    })
});
