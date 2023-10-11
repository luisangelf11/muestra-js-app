let $z = document.getElementById('z'),
    $p = document.getElementById('p'),
    $q = document.getElementById('q'),
    $e = document.getElementById('e'),
    $muestra = document.getElementById('muestra');

const getMuestra = () =>{
    let z = parseFloat($z.value),
    p = parseFloat($p.value),
    q = parseFloat($q.value),
    e = parseFloat($e.value);
    
    let muestra = ((Math.pow(z, 2) * p * q)) / (Math.pow(e, 2));
    console.log(muestra)
    $muestra.value = Math.round(muestra);
}

document.addEventListener('submit', (e)=>{
    e.preventDefault();
    getMuestra();
});