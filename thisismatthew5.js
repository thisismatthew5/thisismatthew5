






  	function background() {
  		var element = document.body;
  		element.classList.toggle("white-mode");
  	}
 




                      
		const ability = ['a front-end Developer','web Tutor'];
		var index = 0;
		var count = 0;
		var text = '';
		var letter = '';

		function textType(){
		if (index == ability.length)  {
			index = 0;
		}
		text = ability[index];
		letter = text.slice(0, ++count);
		document.getElementById('show').
		textContent = letter;
		if(letter.length == text.length)
		{
			index++;
			count = 0;
		}
			setTimeout(textType, 300);

		}
		textType();
