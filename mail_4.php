<?php
if ($_POST) {
  $city = htmlspecialchars($_POST["city"]);
  $email = htmlspecialchars($_POST["email"]);
  $tel = htmlspecialchars($_POST["tel"]);

	$subject = 'Заказ на получение дилерского договора с сайта ' . $_SERVER['HTTP_HOST'];

	function mime_header_encode($str, $data_charset, $send_charset) {
	        if($data_charset != $send_charset)
        $str=iconv($data_charset,$send_charset.'//IGNORE',$str);
        return ('=?'.$send_charset.'?B?'.base64_encode($str).'?=');
    }



    class TEmail {
    public $from_email;
    public $from_name;
    public $to_email;
    public $to_name;
    public $subject;
    public $data_charset='UTF-8';
    public $send_charset='windows-1251';
    public $body='';
    public $type='text/plain';



    function send(){
        $dc=$this->data_charset;
        $sc=$this->send_charset;
        $enc_to=mime_header_encode($this->to_name,$dc,$sc).' <'.$this->to_email.'>';
        $enc_subject=mime_header_encode($this->subject,$dc,$sc);
        $enc_from=mime_header_encode($this->from_name,$dc,$sc).' <'.$this->from_email.'>';
        $enc_body=$dc==$sc?$this->body:iconv($dc,$sc.'//IGNORE',$this->body);
        $headers='';
        $headers.="Mime-Version: 1.0\r\n";
        $headers.="Content-type: ".$this->type."; charset=".$sc."\r\n";
        $headers.="From: site@rial.ru";
        return mail($enc_to,$enc_subject,$enc_body,$headers);
    }

    }

    $emailgo= new TEmail;
    $emailgo->from_email= "$name";
    $emailgo->from_name= $_SERVER['HTTP_HOST'];
    $emailgo->to_email= 'opt@azavod.ru';
    $emailgo->to_name= 'opt@azavod.ru';
    $emailgo->subject= $subject;
    $emailgo->body= "Город: $city\nE-mail: $email\nНомер телефона: $tel";

    $emailgo->send();

    $json['error'] = 0;

    echo json_encode($json);
} else {
    echo 'GET LOST!';
}
?>
