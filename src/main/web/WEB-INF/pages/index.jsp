<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html lang="en"
      xmlns="http://www.w3.org/1999/xhtml">
<head>
    <%@ page isELIgnored="false" %>
    <title>MyTime</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
</head>
<body onload="load()">
    <div class="jumbotron container-fluid">
        <h1 class="display-3">MyTime</h1>
        <p class="lead">A simple web based solution to keeping track of time spent on tasks.</p>
        <hr class="my-4">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="http://www.kirinpatel.com" target="_blank">More of my work</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/ajchili/MyTime" target="_blank">Info</a>
            </li>
        </ul>
    </div>
    <div class="container-fluid">
        <table class="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Current Time</th>
                    <th>Total Time</th>
                    <th>
                        <form action="javascript:addTask($('#newTaskName').val());" method="GET">
                            <div class="input-group">
                                <input id="newTaskName" class="form-control" placeholder="New task name" aria-label="New task name">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary">Add</button>
                                </span>
                            </div>
                        </form>
                    </th>
                </tr>
            </thead>
            <tbody id="taskContainer">
                <c:forEach items="${taskContainer.tasks}" var="Task" varStatus="i" begin="0">
                    <tr class="task">
                        <td><form:input cssClass="form-control" path="taskContainer.tasks[${i.index}].title" id="title${i.index}" readonly="true"/></td>
                        <td><form:input cssClass="form-control" path="taskContainer.tasks[${i.index}].formattedCurrentTime" id="currentTime${i.index}" readonly="true"/></td>
                        <td><form:input cssClass="form-control" path="taskContainer.tasks[${i.index}].formattedTotalTime" id="totalTime${i.index}" readonly="true"/></td>
                        <td>
                            <p hidden><form:input id="${i.index}" class="taskData" path="taskContainer.tasks[${i.index}].active" readonly="true"/></p>
                            <button id="start_stop${i.index}" class="btn btn-primary btn-block" onclick="startStopTimer(this, ${i.index})"></button>
                            <button id="reset" class="btn btn-warning btn-block" onclick="resetTask(${i.index})">Reset</button>
                            <button id="remove" class="btn btn-danger btn-block" onclick="removeTask(${i.index})">Remove</button>
                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    <script>
        function load() {
            var activeTimers = false;
            for (var data in document.getElementsByClassName('taskData')) {
                if ($('#' + data).val() === 'true') {
                     $('#start_stop' + data).html('Stop');
                     activeTimers = true;
                } else {
                     $('#start_stop' + data).html('Start');
                }
            }
            if (activeTimers) {
                setTimeout(function () {
                    window.location.replace("/update");
                }, 3000);
            }
        }

        function addTask(title) {
            if (title.length > 0) {
                $("#newTaskName").removeClass("is-invalid");
                window.location.replace("/" + title);
            } else {
                $("#newTaskName").addClass("is-invalid");
            }
        }

        function removeTask(index) {
            window.location.replace("/remove_" + index);
        }

        function resetTask(index) {
            window.location.replace("/reset_" + index);
        }

        function startStopTimer(button, index) {
            if (button.innerHTML === 'Start') {
                window.location.replace("/start_" + index);
            } else {
                window.location.replace("/stop_" + index);
            }
        }
    </script>
</body>
</html>
