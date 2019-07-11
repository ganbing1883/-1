<?php
$user= @$_REQUEST["user"];
$pass= @$_REQUEST["pass"];
if($user=="admin"&& $pass=="123"){
    echo "登录成功!";
}else{
    echo "用户名或密码不正确!";
};
// echo '{"msg":"这是就收到的数据","user":"'.$user.'","pass":"'.$pass.'"}';

?>