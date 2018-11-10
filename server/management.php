<?php

function management($option) {
    
    if ($option == "getCatalog") {
        $jsonFile = file_get_contents("catalog.json");
        echo $jsonFile;
    }

    /*
    if ($option == "updateCatalog") {
        //TODO
    }
    */
}

echo management(trim($_POST['option']));