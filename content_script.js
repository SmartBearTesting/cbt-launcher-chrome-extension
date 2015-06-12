// show CBT test panel
if("showCBTbookmarklet" in window){
    showCBTbookmarklet();
} else {
    var cbt_script=document.createElement('SCRIPT');
    cbt_script.type='text/javascript';
    cbt_script.src='https://crossbrowsertesting.com/cbt_bookmarklet.js.php?random='+ +new Date();
    document.getElementsByTagName('head')[0].appendChild(cbt_script);
}
