// function val(obj){
// 	return document.getElementById(obj);
// }
// val('bomb').onclick = function() {
// 	console.log('i am a meizi');
// };
$('#bomb').on('click', function() {
	console.log('i am a meizi');
});

$('#ajax').on('click', function() {
	$.ajax({
		url: 'lala.php',
		type: 'post', 
		data: {
			user: $('#user').val(),
			password: $('#password').val()
		},
		success: function(data) {
			console.log(data);
		},
		error: function() {
			console.log('hehe');
		}
	});

});
