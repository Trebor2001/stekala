alert('alert 2.');

function wyswAlert() {
    alert('Ala ma kota.');
}

var but10 = document.getElementById('but1');
but10.addEventListener('click', wyswAlert);
but10.addEventListener('mouseover', function() {
    but10.textContent = 'AFSFASASD';
});

var but11 = document.querySelector('#but2');
but11.addEventListener('click', function() {
    document.getElementById('div1').innerHTML = 'cokolwiek aGDUQVUFahvfJVSNBDVbnvbnavsdfgjwfdgjdbnzd,J';
});

var but22 = document.querySelector('#but3');
but22.addEventListener('click', function() {
    console.log('wypisane w konsoli')
})