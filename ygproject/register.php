<?php
    header("Content-type:text/html;charset=utf-8");

    $responseDate = array("code" => 0, "msg" => "");

    $username = $_POST["username"];
    $password = $_POST["password"];
    $repassword = $_POST["repassword"];
    $createtime = $_POST["createtime"];

    if(!$username){
        $responseDate['code'] = 1;
        $responseDate['msg'] = "用户名不能为空";
        echo JSON_encode($responseDate);
        exit;
    }
    if(!$password){
        $responseDate['code'] = 2;
        $responseDate['msg'] = "密码不能为空";
        echo JSON_encode($responseDate);
        exit;
    }
    if($password != $repassword){
        $responseDate['code'] = 3;
        $responseDate['msg'] = "两次密码不一致";
        echo JSON_encode($responseDate);
        exit;
    }

    $link = mysql_connect("localhost", "root", "123456");

    if(!$link){
        $responseDate['code'] = 4;
        $responseDate['msg'] = "服务器忙";
        echo JSON_encode($responseDate);
        exit;
    }

    mysql_set_charset("utf8");

    mysql_select_db("zhaodanyang");

    $sql = "select * from user where username='{$username}'";

    $res = mysql_query($sql);

    $row = mysql_fetch_assoc($res);
    if($row){
        $responseDate['code'] = 5;
        $responseDate['msg'] = "用户名重复";
        echo JSON_encode($responseDate);
        exit;
    }
    $password = md5(md5(md5($password)."qianfeng")."qingdao");
    $sql1 = "insert into user(username, password, createtime) values('{$username}', '{$password}', {$createtime})";
    $res = mysql_query($sql1);

    if(!$res){
        $responseDate['code'] = 6;
        $responseDate['msg'] = "注册失败";
        echo JSON_encode($responseDate);
        exit;
    }
    $responseDate['msg'] = "注册成功";
    echo JSON_encode($responseDate);
?>
