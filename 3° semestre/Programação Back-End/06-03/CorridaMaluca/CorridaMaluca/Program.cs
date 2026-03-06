using PilotoDomain;
using EquipeDomain;
using VendaDomain;

PilotoModel max = new PilotoModel("Max Verstappen", 25);
PilotoModel lewis = new PilotoModel("Lewis Hamilton", 36);

EquipeModel ferrari = new EquipeModel("Ferrari");

ferrari.AdicionarPiloto(max);
ferrari.AdicionarPiloto(lewis);

VendaModel venda1 = new VendaModel("Pedro Albergue");
VendaModel venda2 = new VendaModel("Carlos ALberto");
VendaModel venda3 = new VendaModel("Nilson Isaías");
VendaModel venda4 = new VendaModel("Lucas Ferrante");

Console.WriteLine(venda1.GerarIngresso("Assento 1", 350));
Console.WriteLine(venda2.GerarIngresso("Assento 23", 225));
Console.WriteLine(venda3.GerarIngresso("Assento 57", 110));
Console.WriteLine(venda4.GerarIngresso("Assento 249", 50));