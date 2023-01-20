// $('tr').click(function()
// {
// 	/*$(this).css('color', 'gray');
// 	$(this).css('text-decoration', 'line-through');*/
// 	/*создаем объект*/
// 	if($(this).css('color') === 'rgb(128, 128, 128)'){
// 		$(this).css({
// 			color: 'black',
// 		textDecoration: 'none'
// 		});
// 	}
// 	else {
// 		$(this).css({
// 		color: 'gray',
// 		textDecoration: 'line-through'
// 	});
// 	}
// });

$('ul').on('click', 'li', function()
{
	$(this).toggleClass('done');
});

$('ul').on('click', 'span', function(event)
{
	event.stopPropagation();
	$(this).parent().fadeOut(function(){
			$(this).remove();
		});
})

$('input').keypress(function(event)
{
	if(event.which === 13) {
		var item = $(this).val();
		$(this).val('');
		$('ul').append('<li> ' + item + '<span><i class="fas fa-backspace"></i></span></li>');
	}
})

$('h2 span').click(function(){
	$('input').fadeToggle();
})