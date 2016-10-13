window.onload=function(){
    var telInput=document.getElementById('tel')
    var subm = document.getElementById('subm');
    var popup = document.getElementById('popup');
    var tip = document.getElementById('tip');
    var ok = document.getElementById('ok');
    telInput.addEventListener('keyup',function () {
    	if(/^1\d{10}$/.test(telInput.value)){
    	    subm.className='effective';
    	    subm.addEventListener('touchend', function(event) { 
    	      popup.style.display='block';  
    	      window.onbeforeunload=function(){
    	          tip.style.display='block';
    	          ok.subm.addEventListener('touchend', function(event) { 
    	              tip.style.display='none';
    	          })
    	      }
    	    })
    	}
    })
}
