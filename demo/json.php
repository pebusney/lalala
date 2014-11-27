<?php
	$user = $_POST['user'];
	$password = $_POST['password'];
	//connect to mysql
	if($user && $password) {
		$arr = array(
			'name' => 'younger',
			'age' => '21',
			'school'=> 'hfut'
		);
		echo json_encode($arr);
	} else {
		echo 'input error!lalala!';
	}
	
?>