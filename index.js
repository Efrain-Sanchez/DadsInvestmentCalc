let mainSection = document.getElementById('main-section');

function getValues() {
	interes = parseFloat(document.getElementById('interes').value);
	tiempo = parseFloat(document.getElementById('tiempo').value);
	monto = parseFloat(document.getElementById('monto').value);
	mainLogic(monto);
	function mainLogic (cantidad) {
		newMonto = ((cantidad * (interes/100)) + cantidad);
	
		let items = document.createElement('li');
		let contenidoTexto = document.createTextNode('$		' + newMonto.toFixed(3));
		
		items.appendChild(contenidoTexto);
		mainSection.appendChild(items);
	};
	
	for (i = 1; i < tiempo; i++) {
		mainLogic(newMonto);
	}
}