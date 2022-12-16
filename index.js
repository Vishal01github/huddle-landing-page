function inputValidation(){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const value = document.getElementById('input1').value;
    var x = document.getElementById('validation');
    if(!re.test(value)){
        console.log('hello')
        x.style.display = 'inline-block';
    }else{
        x.style.display = 'none';
    }
}