 var object = { 
 	h1: function () {
 		var doc = document;
 		 var h1 = doc.createElement('h1'); 
 		 h1.innerHTML = 'Тест по программированию';
 		 h1.style.textAlign = 'center'
 		 doc.body.appendChild(h1);
 	},
 	ul: function () {
 		 var doc = document;
 		 var form = doc.createElement('form');
 		 var ul = doc.createElement('ul');
 		 ul.insertAdjacentHTML('beforeEnd', '<li></li><li></li><li></li>');
  		 ul.children[0].innerHTML = 'Вариант №1';
  		 ul.children[0].className = 'list-group-item list-group-item-success';
 	 	 ul.children[1].innerHTML = 'Вариант №2';
		 ul.children[1].className =	'list-group-item list-group-item-info';
 		 ul.children[2].innerHTML = 'Вариант №3';
 		 ul.children[2].className =	'list-group-item list-group-item-warning';
 		 ul.style.width = '95%';
 		 ul.style.marginTop = '50px';
 		 ul.style.marginBottom = '30px';
 		 
 		 var subUl = doc.createElement('ul');
  		 subUl.insertAdjacentHTML('beforeEnd', '<li><label><input>Вариант ответа №1</label></li><li><label><input>Вариант ответа №2</label></li><li><label><input>Вариант ответа №3</label></li>'); 
  		 subUl.style.listStyle = 'none';

		 var count = ul.getElementsByTagName('li').length;

		 for (var i = 0; i < count; i++) { 
		 	var input = subUl.children[i].children[0].children[0];
		 	input.setAttribute('type', 'checkbox');
		 }
		 
 		 (function () {
	 		 var j = 0;
	 		 count;
	 		 outer: for (var i = 0; i < count; i++) {
	 		 	var clone = subUl.cloneNode(true);	
	 		 	
	 		 	for (j; j < count; j++) {
	 		 		ul.children[j].appendChild(clone);
	 		 		j++;
	 		 		 continue outer;
	 		 	}
	 		 } 
 		 })();

 		
 		 var submit = doc.createElement('input');
 		 submit.className = "btn btn-warning";

		 form.appendChild(ul);
		 form.appendChild(submit);
 		 doc.body.appendChild(form);
 		  		 
 		 form.children[1].setAttribute('type', 'submit');
 		 form.children[1].setAttribute('value', 'Проверить мои результаты');
 		 var widthForm = form.clientWidth/2;
 		 var widthSubmit = form.children[1].offsetWidth/2;
 		 form.children[1].style.marginLeft = widthForm - widthSubmit + 'px';
 	},
 
		
 	
 };

 object.h1();
object.ul();

 