var
   lineH, tOrigin, mH, hH, sH, br, ht, mt, st
    type = 0,
       t = -90,
 vendors = [
     
     "msTransform",
     "webkitTransform",
     "mozTransform",
     "oTransform",
     "transform"
     
 ];
 
function newTime() {

    var 
    
    newDate = new Date(),
    newHour = newDate.getHours(),
    newMins = newDate.getMinutes(),
    newSecs = newDate.getSeconds(),
    
    secArr = document.querySelector("#sec"),
    minArr = document.querySelector("#min"),
    hrsArr = document.querySelector("#hrs"),
        cl = document.querySelector("#text"),
    
    degSec = newSecs * 6,
    degMin = newMins * 6 + degSec/60,
    degHrs = newHour * 30 + degMin/12;
    
    if ( newHour > 12 )
        
        newHour -= 12;
        
    if ( degHrs > 360 ) 
        
        degHrs -= 360;
        
    newHour = fix( newHour );
    newMins = fix( newMins );
    newSecs = fix( newSecs );
  
    cl.innerText = newHour+' : '+newMins+' : '+newSecs;
    
    _transform( secArr, degSec );
    _transform( minArr, degMin );
    _transform( hrsArr, degHrs );
    
    change();
    
}

setInterval( newTime, 100 );

function changeType(){
        
    type = ( type === 0 ) ? 1 : 0;
    
}
    
function fix ( param ) {
    
    if ( param < 10 )
    
        param = "0" + param;
    
    return param;
    
}

function _transform ( param, deg ) {
    
    t = ( type === 0 ) ? -50 : -90;
    
    var
    se = 'translate(-50%,'+t+'%) rotate('+deg+'deg)';
    
    for ( e = 0; e < 5; e++ )

        param.style[vendors[e]] = se
        
}

function change(){
   
    var
    secArr = document.querySelector("#sec"),
    minArr = document.querySelector("#min"),
    hrsArr = document.querySelector("#hrs"),
        cl = document.querySelector("#text");
    
    
    if ( type === 0 ) {
        
        lineH = "100pt";
        tOrigin = "50% 50%";
        mH = "140pt";
        hH = "130pt";
        sH = "170pt";
        br = "0 none";
        ht = ".";
        mt = '"';
        st = "'";
    }
    
    else {
        
        lineH = "230pt";
        tOrigin = "50% 90%";
        mH = "40pt";
        hH = "30pt";
        sH = "47pt";
        br = "1px solid grey";
        ht = mt = st = null;
    }
    
    hrsArr.innerText = ht
    minArr.innerText = mt
    secArr.innerText = st
    
    cl.style.lineHeight = lineH;
    minArr.style.height = mH;
    secArr.style.height = sH;
    hrsArr.style.height = hH;
    minArr.style.border = br;
    secArr.style.border = br;
    hrsArr.style.border = br;
    minArr.style.transformOrigin = tOrigin;
    secArr.style.transformOrigin = tOrigin;
    hrsArr.style.transformOrigin = tOrigin;
    
}