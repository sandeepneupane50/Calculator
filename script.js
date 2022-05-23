(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btns');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let slice = document.querySelector('.btn-slice');

    buttons.forEach(function(button) {
        button.addEventListener('click' , function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener('click', function(e){
        if(screen.value ===''){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener('click' , function(e){
        screen.value = "";
    })
    slice.addEventListener('click', function(e){
        screen.value = screen.value.slice(0, -1);
    })

}) ();