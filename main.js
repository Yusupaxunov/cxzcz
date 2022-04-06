 
function nextPage() {
    location.href = 'login.html'
}

function loginBtn() {
    var code = document.getElementById('numCode').value
    localStorage.setItem('code',code)
    document.getElementById('logininp1').style.display = 'none '
    document.getElementById('logininp').style.display = 'none'
    document.getElementById('codeinp').style.display = 'block'
}

var country = document.getElementById('country');
var disinput = document.getElementById('disinput')

country.addEventListener('change',()=>{
    console.log(country.value);
    disinput.value = country.value
    concode = country.value
})