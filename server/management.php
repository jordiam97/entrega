<?php

function management($option, $data) {
    
    if ($option == "getCatalog") {
        $jsonFile = file_get_contents("catalog.json");
        echo $jsonFile;//return jsonFile to client
    }

    if ($option == "updateCatalog") {
        if(file_put_contents("catalog.json", $data)) {
	        echo 'Data successfully saved';
	    }
    }
}

echo management(trim($_POST['option']), trim($_POST['data']));