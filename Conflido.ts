let Guerra: unknown= "lealdade"
type Colerra = {
 nome: string;
 cabeças: number;
};

type ColerraioOpicional = Partial<Colerra>

const u1: ColerraioOpicional = {nome: "chama"};

//if (typeof Guerra === "string") {
  console.log(u1.nome);

