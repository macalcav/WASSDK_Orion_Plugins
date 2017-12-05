function getCalculate(equation) {
	return String(equation) + "=" + parseFloat(eval(equation)).toFixed(2);
}