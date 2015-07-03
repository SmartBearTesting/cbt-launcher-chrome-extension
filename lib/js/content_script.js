
if( document.querySelector('body').getAttribute("data-cbt-open") === true ){
    document.querySelector('body').setAttribute("data-cbt-open", false);
    document.getElementById("cbtDiv").style.display='none';
    document.getElementById("cbtDiv").style.visibility='hidden';
} else if( document.querySelector('body').getAttribute("data-cbt-open") === false ){
    document.querySelector('body').setAttribute("data-cbt-open", true);
    document.getElementById("cbtDiv").style.display='block';
    document.getElementById("cbtDiv").style.visibility='visible';
} else {
    var cbt_script=document.createElement('SCRIPT');
    cbt_script.type='text/javascript';
    cbt_script.src='https://crossbrowsertesting.com/cbt_bookmarklet.js.php?random='+ +new Date();
    document.getElementsByTagName('head')[0].appendChild(cbt_script);
    document.querySelector('body').setAttribute("data-cbt-open", true);
    function updateDataCbt(e){
        setTimeout(function(){
            if ( document.getElementById("cbtDiv") && document.defaultView.getComputedStyle(document.getElementById("cbtDiv"),null).getPropertyValue("display") === "none" ){
                document.querySelector('body').setAttribute("data-cbt-open", false);
            }
        },100);
    }
    function closeOnEscape(e){
        if (e.keyCode && e.keyCode === 27){
            var event = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });
            try {
                document.querySelector("#cbtDiv button").dispatchEvent(event);
            } catch (e){}
        }
        updateDataCbt();
    }
    document.querySelector('body').addEventListener("click", updateDataCbt, false);
    document.addEventListener("keyup", closeOnEscape, false);
}
