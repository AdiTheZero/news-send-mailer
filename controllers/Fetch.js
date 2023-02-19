const fetch =require("node-fetch");

function callfetchapi()
{
    let url="https://content.guardianapis.com/technology?api-key=test";
    fetch(url).then((res)=>{
        res.json().then((res1)=>{
            console.log(res1);
        })
    })
}


