async function Add()
{
    const num1 = document.getElementsByTagName('input')[0].value;
    const num2 = document.getElementsByTagName('input')[1].value;
    let sol = await fetch('https://dom-test-1.vercel.app/add2?a='+num1+'&b='+num2,{
        method : "POST",
        headers :{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
    sol = await sol.json();
    console.log(sol);
    document.getElementsByTagName('p')[0].innerHTML = sol.message;
}