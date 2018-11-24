<?php

// $arr = array(
//     ['id'=>1,'name'=>'宝马','ctime'=>time()],
//     ['id'=>2,'name'=>'奔驰','ctime'=>time()],
// );

// $myfile = fopen("testfile.txt", "w") or die("Unable to open file!");
// $txt = json_encode($arr);
// fwrite($myfile,$txt);
// fclose($myfile);

// var_dump(json_encode($arr));

$myfile = fopen("testfile.txt", "r") or die("Unable to open file!");
$txt = fread($myfile,filesize("testfile.txt"));
fclose($myfile);

// var_dump(json_decode($txt,true));
exit(json_encode(
    array(
        'status'=>'0',
        'message'=>json_decode($txt)
    )
));