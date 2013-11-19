<?php
header('Content-type: application/x-javascript');
echo $_GET['callback']."([".json_encode($_GET)."])";
?>