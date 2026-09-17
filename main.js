function roll(name)
{
    let rand = Math.floor(Math.random()*6)+1;

    document.getElementById(name).innerHTML= `
        <h2>${rand}</h2>
    `;
}
function rollAll()
{
    for(i=0; i<5; i++)
    {
        console.log ("die"+i)
        roll("die"+i);
    }
}
