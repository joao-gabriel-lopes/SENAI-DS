<?php

for ($i = 1; $i <= 1; $i++) {
    $json = file_get_contents("https://pokeapi.co/api/v2/pokemon/$i");
    
    $pokemon = json_decode($json, true);

    print "<pre>";
    print_r($pokemon);
    print "</pre>";
}


?>