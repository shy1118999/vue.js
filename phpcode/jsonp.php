<?php

$myfile = fopen("testfile.txt", "r") or die("Unable to open file!");
$txt = fread($myfile,filesize("testfile.txt"));
fclose($myfile);


$callback = $_GET['callback'];
// var_dump(json_decode($txt,true));
$jsonstr = json_encode(
    array(
        'status'=>'0',
        'message'=>json_decode($txt)
    )
);
exit($callback .'('. $jsonstr . ')');