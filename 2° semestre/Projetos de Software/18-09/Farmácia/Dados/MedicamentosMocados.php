<?php
require_once '../Modelos/Medicamento.php';
require_once '../Modelos/Vacina.php';

$medicamentos = [
    new Medicamento(1, 'Paracetamol', 'Analgésico e antitérmico', 100, 'Farmácia A', '2023-01-01', '2025-01-01', 'paracetamol.jpg', 'Paracetamol', 'Oral', 'Analgésico', 'Classe C', false),
    new Medicamento(2, 'Ibuprofeno', 'Anti-inflamatório', 150, 'Farmácia B', '2023-02-01', '2026-02-01', 'ibuprofeno.jpg', 'Ibuprofeno', 'Oral', 'Anti-inflamatório', 'Classe B', false),
    new Medicamento(3, 'Amoxicilina', 'Antibiótico', 200, 'Farmácia C', '2023-03-01', '2025-03-01', 'amoxicilina.jpg', 'Amoxicilina', 'Oral', 'Antibiótico', 'Classe A', true),
    new Medicamento(4, 'Dexametasona', 'Corticosteroide', 80, 'Farmácia D', '2023-04-01', '2025-04-01', 'dexametasona.jpg', 'Dexametasona', 'Oral', 'Corticosteroide', 'Classe C', true),
    new Medicamento(5, 'Dipirona', 'Analgésico e antitérmico', 120, 'Farmácia E', '2023-05-01', '2025-05-01', 'dipirona.jpg', 'Dipirona', 'Oral', 'Analgésico', 'Classe B', false),
    new Medicamento(6, 'Cetirizina', 'Antialérgico', 90, 'Farmácia F', '2023-06-01', '2026-06-01', 'cetirizina.jpg', 'Cetirizina', 'Oral', 'Antialérgico', 'Classe B', false),
    new Medicamento(7, 'Losartana', 'Antihipertensivo', 130, 'Farmácia G', '2023-07-01', '2026-07-01', 'losartana.jpg', 'Losartana', 'Oral', 'Antihipertensivo', 'Classe C', false),
    new Medicamento(8, 'Omeprazol', 'Inibidor da bomba de prótons', 110, 'Farmácia H', '2023-08-01', '2025-08-01', 'omeprazol.jpg', 'Omeprazol', 'Oral', 'Antiácido', 'Classe A', false),
    new Medicamento(9, 'Clonazepam', 'Ansiolítico', 70, 'Farmácia I', '2023-09-01', '2026-09-01', 'clonazepam.jpg', 'Clonazepam', 'Oral', 'Ansiolítico', 'Classe A', true),
    new Medicamento(10, 'Ranitidina', 'Antiácido', 60, 'Farmácia J', '2023-10-01', '2025-10-01', 'ranitidina.jpg', 'Ranitidina', 'Oral', 'Antiácido', 'Classe B', false)
];

$vacinas = [
    new Vacina(1, 'Vacina contra Gripe', 'Vacina anual contra a gripe', 1000, 'Farmácia A', '2023-01-01', '2024-01-01', 'gripe.jpg', 'Gripe', 'Vírus inativado', '25% a 75%', '2°C a 8°C'),
    new Vacina(2, 'Vacina contra Hepatite B', 'Vacina contra a Hepatite B', 800, 'Farmácia B', '2022-06-01', '2024-06-01', 'hepatite_b.jpg', 'Hepatite B', 'Subunidade proteica', '30% a 80%', '2°C a 8°C'),
    new Vacina(3, 'Vacina contra Sarampo', 'Vacina combinada contra sarampo, caxumba e rubéola', 1500, 'Farmácia C', '2023-03-01', '2025-03-01', 'sarampo.jpg', 'Sarampo', 'Vírus vivo atenuado', '40% a 60%', '2°C a 8°C'),
    new Vacina(4, 'Vacina contra COVID-19', 'Vacina contra COVID-19', 5000, 'Farmácia D', '2023-01-01', '2024-12-31', 'covid19.jpg', 'COVID-19', 'Vírus inativado', '50% a 90%', '2°C a 8°C'),
    new Vacina(5, 'Vacina contra DTP', 'Vacina contra difteria, tétano e coqueluche', 1200, 'Farmácia E', '2023-05-01', '2025-05-01', 'dtp.jpg', 'Difteria', 'Vírus atenuado', '20% a 80%', '2°C a 8°C'),
    new Vacina(6, 'Vacina contra Pneumonia', 'Vacina contra pneumococo', 600, 'Farmácia F', '2023-07-01', '2025-07-01', 'pneumonia.jpg', 'Pneumonia', 'Polissacarídica', '30% a 70%', '2°C a 8°C'),
    new Vacina(7, 'Vacina contra Febre Amarela', 'Vacina contra a febre amarela', 700, 'Farmácia G', '2022-12-01', '2024-12-01', 'febre_amarela.jpg', 'Febre Amarela', 'Vírus atenuado', '10% a 50%', '2°C a 8°C'),
    new Vacina(8, 'Vacina contra HPV', 'Vacina contra o papilomavírus humano', 900, 'Farmácia H', '2023-08-01', '2026-08-01', 'hpv.jpg', 'HPV', 'Vírus inativado', '20% a 70%', '2°C a 8°C'),
    new Vacina(9, 'Vacina contra Raiva', 'Vacina contra a raiva', 500, 'Farmácia I', '2023-02-01', '2025-02-01', 'raiva.jpg', 'Raiva', 'Vírus inativado', '30% a 80%', '2°C a 8°C'),
    new Vacina(10, 'Vacina contra Tétano', 'Vacina contra o tétano', 400, 'Farmácia J', '2023-09-01', '2025-09-01', 'tetano.jpg', 'Tétano', 'Subunidade proteica', '20% a 60%', '2°C a 8°C')
];

?>