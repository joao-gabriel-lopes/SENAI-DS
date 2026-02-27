using PilotoLib;
using EquipeLib;

PilotoModel piloto1 = new("Jonas", 16);
PilotoModel piloto2 = new("Larissa", 16);
PilotoModel piloto3 = new("Luís Otávio", 17);
PilotoModel piloto4 = new("Lívia", 17);

EquipeModel equipe1 = new("Ferrari");

equipe1.AdicionarPiloto(piloto1);
equipe1.AdicionarPiloto(piloto2);

foreach (var piloto in equipe1.Pilotos)
{
    Console.WriteLine($"Nome: {piloto.Nome}");
    Console.WriteLine($"Idade: {piloto.Idade}");
    Console.WriteLine("");
}