<?php
$user= @$_REQUEST["user"];
$pass= @$_REQUEST["pass"];

// echo '{"msg":"这是接受到的数据","user":"'.$user.'","pass":"'.$pass.'"}';
$link= @new mysqli("localhost:3306","root","root","test");
if($link->connect_error){
    echo '{"msg":"连接失败"}';
}
$sql="INSERT login (user,pass) VALUES('".$user."','".$pass."')";
$q=$link->query($sql);
if($q){
    echo '注册成功!';
}else{
    echo '注册失败!';
}

?>