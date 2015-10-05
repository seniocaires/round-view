/*
*@author Senio Caires
*/
function AbrePopup(url, nomeDaJanela, scrollbars, largura, altura) {

	var left = (screen.width-largura) / 2;

	if (screen.width <= 1024) {
		left = 0;
	}

	var top = (screen.height - altura) / 2;

	if (screen.height <= 768) {
		top = 0;
	}
	
	window.open(url, nomeDaJanela,'scrollbars=' + scrollbars + ',width=' + largura + ',height=' + altura + ',left=' + left + ',top=' + top + ', resizable=yes');
}