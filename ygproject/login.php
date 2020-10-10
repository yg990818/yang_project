<?php
    header("Content-type:text/html;charset=utf-8");
    //模拟官方的返回，生成对应的内容
    $responseData = array("code" => 0, "msg" => "");

    $username = $_POST['username'];
    $password = $_POST['password'];

    if(!$username){
        $responseData['code'] = 1;
        $responseData['msg'] = "用户名不能为空";
        echo json_encode($responseData);
        exit;
    }
    if(!$password){
        $responseData['code'] = 2;
        $responseData['msg'] = "密码不能为空";
        echo json_encode($responseData);
        exit;
    }

    $link = mysql_connect("localhost", "root", "123456");

    if(!$link){
        $responseData['code'] = 3;
        $responseData['msg'] = "服务器忙";
        echo json_encode($responseData);
        exit;
    }

    mysql_set_charset("utf8");

    mysql_select_db("zhaodanyang");
    $password = md5(md5(md5($password)."qianfeng")."qingdao");

    
    $sql = "select * from user where username='{$username}' AND password='{$password}'";
    
    $res = mysql_query($sql);
    

    $row = mysql_fetch_assoc($res);
    if($row){
        $responseData['msg'] = "登陆成功";
        echo json_encode($responseData);
    }else{
        $responseData['code'] = 4;
        $responseData['msg'] = "登录失败";
        echo json_encode($responseData);
        exit;
    }

    mysql_close($link);
?>