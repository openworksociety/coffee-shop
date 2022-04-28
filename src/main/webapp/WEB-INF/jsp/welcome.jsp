<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>welcome</title>
<script src="jquery/jquery-3.6.0.min.js"></script>
<script>
    $(function(){
      $("#nav-placeholder").load("nav.html");
    });
</script>
</head>
<body>
	<!--Navigation bar-->
	<div id="nav-placeholder"></div>
	<h2>${message}</h2>
	<%-- <a href="${pageContext.request.contextPath}/personList">Person List</a> --%>
</body>
</html>