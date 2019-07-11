<?php
$user= @$_REQUEST["user"];
$pass= @$_REQUEST["pass"];
@header("content-Type: text/html; charset=utf-8"); //语言强制
$link=@new mysqli("localhost:3306","root","root","test");
if($link->connect_error){
    echo '{"code":0,"msg":"连接失败"}';
}else{
    echo '['.select().']';
}

function select(){
    global $link;
    $q=$link->query("select * from login");
    $str="";
    while($arr=$q->fetch_assoc()){
        $str=$str.json_encode($arr).",";
    }
    return substr($str,0,-1);
    }




?>