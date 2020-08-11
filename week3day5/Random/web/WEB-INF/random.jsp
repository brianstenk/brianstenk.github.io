<%--
  Created by IntelliJ IDEA.
  User: CTI Telemedicine
  Date: 8/10/2020
  Time: 10:16 AM
  To change this template use File | Settings | File Templates.
--%>
<%-- <%@ page isELIgnored="false"%> --%>
<%@ taglib  prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html lang ="en">
<head>
    <title>Random Numbers</title>
</head>
<body>
<form action="<%=request.getContextPath()%>/random" method="get">
    <input type="text" name="amount">
    <input type="submit" value="Generate Random Number">
</form><br/>

<c:forEach var="i" begin="1" end = "${amount}" />
<c:out value = "${randomNumbers[i]}"/> <p>
</c:forEach>


</body>
</html>
