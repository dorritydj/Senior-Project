<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ISTE Factulty Directory</title>
    <!-- inject:css -->
    <link rel="stylesheet" href="../../../dist/libs/bootstrap.min.css">
    <link rel="stylesheet" href="../../../dist/libs/ui-bootstrap-csp.css">
    <link rel="stylesheet" href="../styles/app.css">
    <!-- endinject -->

    <!-- inject:js -->
    <script src="../../../dist/libs/jquery.min.js"></script>
    <script src="../../../dist/libs/angular.js"></script>
    <script src="../../../dist/libs/angular-animate.min.js"></script>
    <script src="../../../dist/libs/angular-route.min.js"></script>
    <script src="../../../dist/libs/ui-bootstrap-tpls.js"></script>
    <script src="../app.module.js"></script>
    <script src="admin.module.js"></script>
    <script src="../bubble/bubble.module.js"></script>
    <script src="../start/start.module.js"></script>
    <script src="admin-update/adminUpdate.module.js"></script>
    <script src="admin-add/adminAdd.module.js"></script>
    <script src="../infoDisplay/deptDisplay/deptDisplay.module.js"></script>
    <script src="../infoDisplay/profDisplay/profDisplay.module.js"></script>
    <script src="../services/department/dept.module.js"></script>
    <script src="../infoDisplay/roomDisplay/roomDisplay.module.js"></script>
    <script src="../services/login/login.module.js"></script>
    <script src="../services/professor/professor.module.js"></script>
    <script src="../services/room/room.module.js"></script>
    <script src="admin.controller.js"></script>
    <script src="../bubble/bubble.controller.js"></script>
    <script src="../bubble/bubble.directive.js"></script>
    <script src="../infoDisplay/info.controller.js"></script>
    <script src="../services/http.factory.js"></script>
    <script src="../start/start.controller.js"></script>
    <script src="../start/start.directive.js"></script>
    <script src="admin-update/adminUpdate.controller.js"></script>
    <script src="admin-update/adminUpdate.directive.js"></script>
    <script src="admin-add/adminAdd.controller.js"></script>
    <script src="admin-add/adminAdd.directive.js"></script>
    <script src="../infoDisplay/deptDisplay/deptDisplay.controller.js"></script>
    <script src="../infoDisplay/deptDisplay/deptDisplay.directive.js"></script>
    <script src="../infoDisplay/profDisplay/profDisplay.controller.js"></script>
    <script src="../infoDisplay/profDisplay/profDisplay.directive.js"></script>
    <script src="../services/department/dept.services.js"></script>
    <script src="../infoDisplay/roomDisplay/roomDisplay.controller.js"></script>
    <script src="../infoDisplay/roomDisplay/roomDisplay.directive.js"></script>
    <script src="../services/login/login.service.js"></script>
    <script src="../services/professor/professor.service.js"></script>
    <script src="../services/room/room.service.js"></script>
    <!-- endinject -->
</head>
<body>
    <form method="POST" action="http://orange.ist.rit.edu/teamOrange/php/User/login.php">
        <label>User Name:</label><input name="userName" type="text"/>
        <label>Password:</label><input name="password" type="password"/>
        <button type="submit">Submit</button>
    </form>
</body>
</html>

