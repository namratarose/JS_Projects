const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector("#result");
    const addValue=document.querySelector("#result-bmi");

    if(height==="" || height<=0 || isNaN(height))
    {
        result.innerHTML=`Please give valid height. ${height} is not valid`;
    }
    else if(weight==="" || weight<=0 || isNaN(weight))
    {
        result.innerHTML=`Please give valid weight. ${weight} is not valid`;
    }
    else
    {
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>BMI value is:${bmi}</span>`;
        if(bmi<18.6)
        {
            addValue.innerHTML="<span>Under Weight</span>";
        }
        else if(bmi>=18.6 && bmi<=24.9)
        {
            addValue.innerHTML="<span>Normal Weight</span>";
        }
        else if(bmi>24.9)
        {
            addValue.innerHTML="<spanOver Weight</span>";
        }

    }    
    
});