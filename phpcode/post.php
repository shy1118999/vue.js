<?php

$myfile = fopen("testfile.txt", "r") or die("Unable to open file!");
$txt = fread($myfile,filesize("testfile.txt"));
fclose($myfile);


$name = $_POST['name'];
// $name = $_GET['name'];
$txt = json_decode($txt,true);

$arr = array(
    'id'=>$txt[count($txt) - 1]['id']+1,
    'name'=>$name,
    'ctime'=>time()
);

array_push($txt,$arr);

echo "<pre>";
var_dump($txt);
// var_dump(count($txt));

$myfile = fopen("testfile.txt", "w") or die("Unable to open file!");
$txt = json_encode($txt);
fwrite($myfile,$txt);
fclose($myfile);