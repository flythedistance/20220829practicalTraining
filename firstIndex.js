window.onload = function(){
    let div = document.getElementsByClassName('cont_banner')[0]
    console.log(div)
    let bannerList = div.children
    console.log(bannerList)
    let bannerListLength = bannerList.length
    var countNum = 0
    var timer
    fengzhuangbanner = function(){
         timer = setInterval(function(){        
            if(countNum+1 == bannerListLength){
                bannerList[countNum].classList.remove('activeClass') 
                countNum = 0
                bannerList[countNum].classList.add('activeClass')
            }else{
                bannerList[countNum].classList.remove('activeClass')        
                countNum ++
                bannerList[countNum].classList.add('activeClass')
            }        
        },2000)
    }
    fengzhuangbanner()
    bindCursor = function(){
        console.log(111)
        clearInterval(timer)
    }
    bindLeave = function(){
        console.log(222)
        fengzhuangbanner()
    }
}