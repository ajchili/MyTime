<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:th="http://www.thymeleaf.org">
<head>
    <%@ page isELIgnored="false" %>
    <title>MyTime</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
          crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron container-fluid">
        <h1 class="display-3">MyTime</h1>
        <hr class="my-4">
        <p class="lead">A simple web based solution to keeping track of time spent on tasks.</p>
    </div>

    <div class="container-fluid">
        <table class="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Current Time</th>
                    <th>Total Time</th>
                    <th>
                        <form action="#" method="GET">
                            <div class="input-group">
                                <input class="form-control" placeholder="New task name" aria-label="New task name">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button">Add</button>
                                </span>
                            </div>
                        </form>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr th:each="task : ${tasks}">
                    <td th:text="${task.TITLE}">Title</td>
                    <td th:text="${task.currentTime}">00:00:0000</td>
                    <td th:text="${task.totalTime}">00:00:0000</td>
                    <td>
                        <form>
                            <button class="btn btn-primary btn-block">Start</button>
                            <button class="btn btn-warning btn-block">Reset</button>
                            <button class="btn btn-danger btn-block">Remove</button>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
            integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
            crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
            integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1"
            crossorigin="anonymous"></script>
</body>
</html>
