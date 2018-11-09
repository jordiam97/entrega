<?php

function management($option) {
    
    if ($option == "getCatalog") {
        $jsonFile = file_get_contents("catalog.json");
        echo $jsonFile;
    }
}

echo management(trim($_POST['option']));