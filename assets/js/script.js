document.addEventListener("DOMContentLoaded", function() {
    
    refreshAdvice();

    document.getElementById('dice-circle').addEventListener('mouseenter', function() {
        document.getElementById('dice-circle').setAttribute('class', 'glow');
    });
    document.getElementById('dice-circle').addEventListener('mouseleave', function() {
        document.getElementById('dice-circle').setAttribute('class', '');
    });

    document.getElementById('dice-circle').addEventListener('click', function() {
        refreshAdvice();
        document.getElementById('dice-circle').style.backgroundColor = 'grey';
        document.getElementById('dice-circle').setAttribute('class', '');
        setTimeout(function() {         
            document.getElementById('dice-circle').style.backgroundColor = 'hsl(150, 100%, 66%)';
        }, 2000);


    });

});

function refreshAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => { 
        let adviceId  = data.slip.id ;
        let adviceText = data.slip.advice ;
        document.getElementsByClassName('box-header')[0].innerHTML = `ADVICE #${adviceId}`;
        document.getElementsByClassName('box-main')[0].innerHTML = `"${adviceText}"`;
    })
    .catch(err => {
        console.error(err);
    });
}
