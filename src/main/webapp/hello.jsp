<%-- 
    Document   : hello
    Created on : Feb 7, 2018, 4:09:07 PM
    Author     : KS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Talk Like That !</title>
    </head>
    <body>
        <p>Text from server!</p>
        <h1>
            <%= request.getAttribute("hello") %>
        </h1>
    </body>
</html>
