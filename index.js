const mainSection = document.querySelector(".main-section");
const p1 = document.querySelector("#p");
let month = 2;
// let i = 2;

function shotAlert() {
	let time = parseInt(document.querySelector("#tiempo").value, Number);
	const interesEnPorcentaje = parseFloat(
		document.querySelector("#interes").value,
		Number
	);
	const interes = (interesEnPorcentaje / 100).toFixed(3);
	let monto = parseFloat(document.querySelector("#monto").value, Number);
	const getIncome = (monto, interes) => {
		return (newMonto = monto * interes + monto);
	};
	mainSection.innerHTML = "Month 1 $" + getIncome(monto, interes);

	for (i = 2; i <= time; i++, month++) {
		const pTag = document.createElement("p");
		mainSection.appendChild(pTag);
		const content = document.createTextNode(
			` Month ${month} $${getIncome(newMonto, interes)}`
		);
		pTag.appendChild(content);
	}
	debugger;
}
