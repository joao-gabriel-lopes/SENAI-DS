<?php
require_once '../Modelos/Localizacao.php';
require_once '../Modelos/Categoria.php';
require_once '../Modelos/ItemEstoque.php';

// Criando localizações
$local1 = new Localizacao(1, "Prateleira A3", "Seção de ferramentas");
$local2 = new Localizacao(2, "B7-C2", "Materiais elétricos");

// Criando categorias
$categoria1 = new Categoria(1, $local1, "Parafusos", "Parafusos diversos");
$categoria2 = new Categoria(2, $local2, "Ferramentas", "Ferramentas manuais");

// Criando itens
$itens = [
    new ItemEstoque(1, $categoria1, "Parafuso Sextavado 5mm", "Parafuso sextavado de aço carbono com 5mm de diâmetro e 20mm de comprimento. Revestimento zincado para maior resistência à corrosão.", 1250, "PSX-005", "parafuso.png"),
    new ItemEstoque(2, $categoria2, "Chave de Fenda Phillips", "Chave de fenda com ponta Phillips tamanho #2. Cabo ergonômico antiderrapante para melhor conforto e segurança durante o uso.", 18, "CFP-102", "chavephilips.png"),
    new ItemEstoque(3, $categoria1, "Tinta Spray Vermelha", "Tinta spray vermelha de alta cobertura. Secagem rápida, resistente à intempéries. Ideal para uso em metal, madeira e plástico.", 7, "TSV-300", "tintavermelha.png"),
    new ItemEstoque(4, $categoria2, "Lixa D'Água 600", "Lixa d'água grão 600 para acabamento fino. Pode ser usada com água para melhor desempenho e menos entupimento dos grãos.", 42, "LDA-600", "lixa.png"),
    new ItemEstoque(5, $categoria1, "Fita Isolante Preta", "Fita isolante preta de PVC, 10m de comprimento e 19mm de largura. Resistente a altas temperaturas e excelente isolamento elétrico.", 23, "FIP-010", "fitaisolante.png"),
    new ItemEstoque(6, $categoria2, "Broca para Concreto 6mm", "Broca para concreto com ponta de metal duro. Diâmetro de 6mm e comprimento total de 110mm. Ideal para perfuração em concreto e alvenaria.", 5, "BRC-006", "brocaconcreto.png"),
    new ItemEstoque(7, $categoria1, "Cola Epóxi 50g", "Cola epóxi bicomponente em bisnaga de 50g. Tempo de cura de 5 minutos. Resistente a água, óleos e produtos químicos após cura.", 14, "CEP-050", "colaepoxi50g.png"),
    new ItemEstoque(8, $categoria2, "Luvas de Proteção", "Luvas de proteção em látex com textura antiderrapante. Tamanho médio, resistentes a produtos químicos e perfurações.", 32, "LVP-001", "luvasproteção.png")
];
?>