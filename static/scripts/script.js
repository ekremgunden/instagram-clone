var models = [
    {
        image: 'static/images/foto1.jpg'
    },
    {
        image: 'static/images/foto2.jpg'
    },
    {
        image: 'static/images/foto3.jpg'
    },
    {
        image: 'static/images/foto4.jpg'
    },
    {
        image: 'static/images/foto5.jpg'
    }
]

var index = 0;
var slaytCount = models.length;



var settings={
    duration : '3000',
    random : true
}

init(settings);

function init(settings) {
    
    setInterval(function(){

        if(slaytCount == index){
            index=0;
        }
        showSlides(index);

    },settings.duration)
}


function showSlides(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1 ;
    }
    if(i > slaytCount){
        index=0;
    }
    document.querySelector('.photo').setAttribute('src',models[index].image);
    index++;
    
}

var id = document.getElementById('username');
var pass = document.getElementById('password');


function sifreShow() {
    document.getElementById('password').setAttribute('type','text');
    document.getElementById('hidePass').style.display="block";
    document.getElementById('showPass').style.display="none";  
}

function sifreHide() {
    document.getElementById('password').setAttribute('type','password');
    document.getElementById('hidePass').style.display="none";
    document.getElementById('showPass').style.display="block";   
}


function dogrula() {
    if( id.value.length > 0 && pass.value.length > 5){
        document.getElementById('submitBtn').style.background="rgb(13, 170, 255)";
        document.getElementById('submitBtn').nodeType
        document.getElementById('submitBtn').removeAttribute('disabled');
    }
    else{
        document.getElementById('submitBtn').style.background="rgb(158, 216, 255)";
        document.getElementById('submitBtn').setAttribute('disabled','disabled');
    }
    if (pass.value.length < 9999999999) {
        document.getElementById('showPass').style.display="none";
    }
}

