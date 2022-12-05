<?php
  
    if (!empty($_SERVER['HTTP_CLIENT_IP']))   {
        $ip_address = $_SERVER['HTTP_CLIENT_IP'];
    }else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))  {
        $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }else{
        $ip_address = $_SERVER['REMOTE_ADDR'];
    }
    

    $msg = "New User Palying - ".$ip_address;
    $msg = wordwrap($msg,70);
    mail("ldudaraliyanage@gmail.com","Tic Tac Toe",$msg);
    return $ip_address;
?>