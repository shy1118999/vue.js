<?php

$myfile = fopen("testfile.txt", "r") or die("Unable to open file!");
$txt = fread($myfile,filesize("testfile.txt"));
fclose($myfile);


// $name = $_POST['name'];
$id = $_GET['id'];
$txt = json_decode($txt,true);


// array_splice($txt,$id-1,1);
unset($txt[$id-1]);

echo "<pre>";
var_dump($txt);
// var_dump(count($txt));

$myfile = fopen("testfile.txt", "w") or die("Unable to open file!");
$txt = json_encode($txt);
fwrite($myfile,$txt);
fclose($myfile);