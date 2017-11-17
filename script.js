window.onload=function()
{
	var fieldCoord=field.getBoundingClientRect();
	var fieldInnerCoord={
		top: fieldCoord.top+field.clientTop,
		left: fieldCoord.left+field.clientLeft
	}
	field.onclick=function(event)
	{
		var ballCoord={
			top: event.clientY-fieldInnerCoord.top-ball.clientHeight/2,
			left: event.clientX-fieldInnerCoord.left-ball.clientWidth/2
		}

		if(ballCoord.top<0)
			ballCoord.top=0;
		if(ballCoord.left<0)
			ballCoord.left=0;
		if(ballCoord.left+ball.clientWidth>field.clientWidth)
			ballCoord.left=field.clientWidth-ball.clientWidth;
		if(ballCoord.top+ball.clientHeight>field.clientHeight)
			ballCoord.top=field.clientHeight-ball.clientHeight;

		ball.style.left = ballCoord.left+'px';
      ball.style.top = ballCoord.top+'px';
	}
}