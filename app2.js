import './app2.css'
import $ from 'jquery'

let $tabBar = $('.app2 .tab')
let $tabContent=$('.content')

$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    $li.addClass("selected")
        .siblings()
        .removeClass('selected')
    let index=$li.index()

    $tabContent
        .children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
})
