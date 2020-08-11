<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>NumberQuiz</title>
	</head>
	<body>
		<form action="quiz" method='post'>
			<h3>Have fun with NumberQuiz!</h3>
			<p>Your current score is: ${quiz.getNumCorrect()}</p>
			<p>Guess the next number in the sequence! ${quiz.getCurrentQuestion()}</p>
			<p>Your answer:<input type='text' name='answer' value='' /></p>
			<c:if test="${error}">
				<p style='color:red'>Your last answer was not correct! Please try again</p>
		    </c:if>
			<p><input type='submit' name='btnNext' value='Next' /></p>
		</form>
	</body>
</html>
