function loadColor(value){
    switch(true){
        case (value <= 15):
            return '#f21111'
        case (value <= 25):
            return '#f23711'
        case (value <= 35):
            return '#f25c11'
        case (value <= 45):
            return '#f25c11'
        case (value <= 55):
            return '#f28211'
        case (value <= 65):
            return '#f2a711'
        case (value <= 75):
            return '#f2cc11'
        case (value <= 85):
            return '#f2f211'
        case (value <= 95):
            return '#cdf211'
        case (value <= 99):
            return '#a7f211'
        case (value >= 100):
            return 'rgb(8, 248, 48)'
        default: return '#f21111'

    }
}

function toggle(bool){
    if(bool){
        $('.progress').fadeIn(500)
    }else{
        $('.progress').fadeOut(500)
    }
}
function setProgress(text, value){
    if(value < 0){
        value = 0
    }
    if(value >= 100){
        value = 100
    }
    let color = loadColor(value)
    $('.progress > .progress-bar ').css('width', `${value}%`)
    $('.progress > .progress-bar ').css('background-color', color)
    
    $('.text').html(`${text} <span>${value}%</span>`)
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function load(text, time){
    for(var i = 1; i<101; i++){
        await delay(time / 100)
        setProgress(text, i)
    }
    setTimeout(() => {
        toggle(false)
        setProgress('', 0)
        $.post('https://dev-progress/OnFinish')
    }, 1000)

}


$(document).ready(() => {
    window.addEventListener('message', (data) => {
        let event = data.data;
        if(event.ui == 'show'){
            toggle(true)
            load(event.text, event.time)
        }else{
            toggle(false)
        }
    })
})