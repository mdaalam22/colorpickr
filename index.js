function changeRange(){
		var red = parseInt(document.getElementById('red').value);
		var blue = parseInt(document.getElementById('blue').value);
		var green = parseInt(document.getElementById('green').value);
		var colorVal= document.getElementById('colorvalue')

		var color = "#" + hex(red) + hex(green) + hex(blue);
		document.body.style.backgroundColor = color;
		colorVal.value = color;
		document.getElementById('r-label').innerText = red;
		document.getElementById('b-label').innerText = blue;
		document.getElementById('g-label').innerText = green;

		if(red < 100 && blue < 100 && green <100){
			document.body.style.color = '#ffffff';
		}else{
			document.body.style.color = '#000000';
		}

		colorVal.onclick=function(){
			colorVal.select();
			if(document.execCommand('Copy')){
				Swal.fire(
					  'Copied!',
					  'You choose '+colorVal.value+' color',
					  'success'
					)
			}
		}

	}
	function hex(val){
		var hexVal = val.toString(16);
		if(val<16){
			hexVal = "0"+hexVal;
		} 
		return hexVal;
	}
