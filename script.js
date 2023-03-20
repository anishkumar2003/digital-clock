// let x=new Date;
//     let hour=x.getHours();
//     let min=x.getMinutes();
//     let second=x.getSeconds();
//     hours.innerHTML=hour;
//     minute.innerHTML=min;
//     sec.innerHTML=second;

setInterval(clock,0);
function clock()
{
    let x=new Date;
    let hour=x.getHours();
    let min=x.getMinutes();
    let second=x.getSeconds();
    hours.innerHTML=hour;
    minute.innerHTML=min;
    sec.innerHTML=second;
}


