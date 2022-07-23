import './app3.css'
import $ from 'jquery'
const $square= $('.square')
$square.on('mouseenter',()=>{
    $square.toggleClass('active')
    console.log('hello')
})
