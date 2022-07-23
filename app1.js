import $ from 'jquery'
import './app1.css'
const $numb=$('.number')
const $buttonAdd=$('.add')
const $buttonSub=$('.sub')
const $buttonMulti=$('.multi')
const $buttonDivede=$('.divide')
let n =localStorage.getItem('number')
$numb.text(n||100)

$buttonAdd.on('click',()=>{
    let n=parseInt($numb.text())
    n+=1
    $numb.text(n)
    localStorage.setItem('number',n)
})

$buttonSub.on('click',()=>{
    let n=parseInt($numb.text())
    n-=1
    $numb.text(n)
    localStorage.setItem('number',n)
})
$buttonMulti.on('click',()=>{
    let n=parseInt($numb.text())
    n*=2
    $numb.text(n)
    localStorage.setItem('number',n)
})
$buttonDivede.on('click',()=>{
    let n=parseInt($numb.text())
    n/=2
    $numb.text(n)
    localStorage.setItem('number',n)
})
