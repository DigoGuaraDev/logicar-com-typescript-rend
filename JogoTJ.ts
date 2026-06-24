enum StatusDificudade { 
	Facil = "Facil",
        Medio = "Medio",
        Dificiol = "Dificiol",
       VaryHard = "VeryHard"	
};

interface Selecionafaase {
   id: number;
   nome: string;
   descrição: string;
   Ninimigos:  number| string;
   dificudade: StatusDificudade;
}

const meuChamado: Selecionafaase = {
 id: 573485203,
 nome: "Romulos",
 descrição:"A  fase tem um terrenno acintendado, é inmigos a esprita , então responda o que a luz não toca e sera prtejido",
Ninimigos: 120,
dificudade : StatusDificudade.Dificiol
}

const mensagem:string = "Ptimeira linha\nSegunda linha";

//function AtualizaStatus (
//dificudade:dificudade, novo Status:  StatusChamado):Chamado{
//Chamado.Status = novo Status
//return.Chamado
//};
console.log(mensagem)

console.log(`Chamado: ${meuChamado.nome}, descrição do mapa: ${meuChamado.descrição}, á quantedade de inimigos: ${meuChamado.Ninimigos}, - Dificudade: ${meuChamado.dificudade}`);
