/*
*@author Senio Caires
*/
var path = "fotos/";
var fotos = [ 
				{"nome" : "00001.jpg", "cima" : "00101.jpg", "direita" : "00011.jpg", "esquerda" : "00002.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00002.jpg", "cima" : "", "direita" : "00001.jpg", "esquerda" : "00003.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00003.jpg", "cima" : "", "direita" : "00002.jpg", "esquerda" : "00004.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00004.jpg", "cima" : "", "direita" : "00003.jpg", "esquerda" : "00005.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00005.jpg", "cima" : "", "direita" : "00004.jpg", "esquerda" : "00006.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00006.jpg", "cima" : "", "direita" : "00005.jpg", "esquerda" : "00007.jpg", "baixo" : "00107.jpg", "legenda" : "Sala 1"},
				{"nome" : "00007.jpg", "cima" : "", "direita" : "00006.jpg", "esquerda" : "00008.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00008.jpg", "cima" : "", "direita" : "00007.jpg", "esquerda" : "00009.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00009.jpg", "cima" : "", "direita" : "00008.jpg", "esquerda" : "00010.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00010.jpg", "cima" : "", "direita" : "00009.jpg", "esquerda" : "00011.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00011.jpg", "cima" : "", "direita" : "00010.jpg", "esquerda" : "00001.jpg", "baixo" : "", "legenda" : "Sala 1"},

				{"nome" : "00101.jpg", "cima" : "00201.jpg", "direita" : "00111.jpg", "esquerda" : "00102.jpg", "baixo" : "00001.jpg", "legenda" : "Sala 1"},
				{"nome" : "00102.jpg", "cima" : "", "direita" : "00101.jpg", "esquerda" : "00103.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00103.jpg", "cima" : "", "direita" : "00102.jpg", "esquerda" : "00104.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00104.jpg", "cima" : "", "direita" : "00103.jpg", "esquerda" : "00105.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00105.jpg", "cima" : "", "direita" : "00104.jpg", "esquerda" : "00106.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00106.jpg", "cima" : "", "direita" : "00105.jpg", "esquerda" : "00107.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00107.jpg", "cima" : "00006.jpg", "direita" : "00106.jpg", "esquerda" : "00108.jpg", "baixo" : "00207.jpg", "legenda" : "Sala 1"},
				{"nome" : "00108.jpg", "cima" : "", "direita" : "00107.jpg", "esquerda" : "00109.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00109.jpg", "cima" : "", "direita" : "00108.jpg", "esquerda" : "00110.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00110.jpg", "cima" : "", "direita" : "00109.jpg", "esquerda" : "00111.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00111.jpg", "cima" : "", "direita" : "00110.jpg", "esquerda" : "00101.jpg", "baixo" : "", "legenda" : "Sala 1"},

				{"nome" : "00201.jpg", "cima" : "", "direita" : "00211.jpg", "esquerda" : "00202.jpg", "baixo" : "00101.jpg", "legenda" : "Sala 1"},
				{"nome" : "00202.jpg", "cima" : "", "direita" : "00201.jpg", "esquerda" : "00203.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00203.jpg", "cima" : "", "direita" : "00202.jpg", "esquerda" : "00204.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00204.jpg", "cima" : "", "direita" : "00203.jpg", "esquerda" : "00205.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00205.jpg", "cima" : "", "direita" : "00204.jpg", "esquerda" : "00206.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00206.jpg", "cima" : "", "direita" : "00205.jpg", "esquerda" : "00207.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00207.jpg", "cima" : "00107.jpg", "direita" : "00206.jpg", "esquerda" : "00208.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00208.jpg", "cima" : "", "direita" : "00207.jpg", "esquerda" : "00209.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00209.jpg", "cima" : "", "direita" : "00208.jpg", "esquerda" : "00210.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00210.jpg", "cima" : "", "direita" : "00209.jpg", "esquerda" : "00211.jpg", "baixo" : "", "legenda" : "Sala 1"},
				{"nome" : "00211.jpg", "cima" : "", "direita" : "00210.jpg", "esquerda" : "00201.jpg", "baixo" : "", "legenda" : "Sala 1"}
			];

/*
*@author Senio Caires
*/
function init() {
	document.getElementById("imagemAtual").src = "fotos/00001.jpg";
	atualizaBotoes();
}
/*
*@author Senio Caires
*/
function proximaFoto(acao) {
	var nomeFoto = nomeFotoAtual();
	var proximaFoto = buscarFoto(nomeFoto, acao);
	if (proximaFoto != "") {
		document.getElementById("imagemAtual").src = "fotos/" + proximaFoto;
	}
	atualizaBotoes();
}
/*
*@author Senio Caires
*/
function atualizaLegenda() {
	var nomeFoto = nomeFotoAtual();
	var legenda = buscarLegenda(nomeFoto);
	if (legenda != "") {
		document.getElementById("legenda").innerHTML = legenda;
	}
}
/*
*@author Senio Caires
*/
function atualizaBotoes() {
	var nomeFoto = nomeFotoAtual();
	var fotoDireita = buscarFoto(nomeFoto, "direita");
	if (fotoDireita == "") {
		document.getElementById("botaoDireita").style.visibility = "hidden";
	} else {
		document.getElementById("botaoDireita").style.visibility = "visible";
	}

	var fotoEsquerda = buscarFoto(nomeFoto, "esquerda");
	if (fotoEsquerda == "") {
		document.getElementById("botaoEsquerda").style.visibility = "hidden";
	} else {
		document.getElementById("botaoEsquerda").style.visibility = "visible";
	}

	var fotoCima = buscarFoto(nomeFoto, "cima");
	if (fotoCima == "") {
		document.getElementById("botaoCima").style.visibility = "hidden";
	} else {
		document.getElementById("botaoCima").style.visibility = "visible";
	}

	var fotoBaixo = buscarFoto(nomeFoto, "baixo");
	if (fotoBaixo == "") {
		document.getElementById("botaoBaixo").style.visibility = "hidden";
	} else {
		document.getElementById("botaoBaixo").style.visibility = "visible";
	}
	atualizaLegenda();
}
/*
*@author Senio Caires
*/
function nomeFotoAtual() {
	var imagemAtual = document.getElementById("imagemAtual").src;
	var vetPath = imagemAtual.split("fotos/");
	return vetPath[1];
}
/*
*@author Senio Caires
*/
function buscarFoto(nomeFoto, acao) {
	for(i = 0; i < fotos.length; i++) {
		if (fotos[i].nome == nomeFoto) {
			if (acao == "direita") {
				return fotos[i].direita;
			}
			if (acao == "esquerda") {
				return fotos[i].esquerda;
			}
			if (acao == "cima") {
				return fotos[i].cima;
			}
			if (acao == "baixo") {
				return fotos[i].baixo;
			}
		}
	}
}
/*
*@author Senio Caires
*/
function buscarLegenda(nomeFoto) {
	for(i = 0; i < fotos.length; i++) {
		if (fotos[i].nome == nomeFoto) {
			return fotos[i].legenda;
		}
	}
	return "";
}
/*
*@author Senio Caires
*/
document.onkeydown = function(e) {
	switch (e.keyCode) {
		case 37:
			 proximaFoto("esquerda");
			break;
		case 38:
			proximaFoto("cima");
			break;
		case 39:
			proximaFoto("direita");
			break;
		case 40:
			proximaFoto("baixo");
			break;
	}
};