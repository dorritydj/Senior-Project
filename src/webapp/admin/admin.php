<?php
session_start();

if(!isset($_SESSION['username'])){
    header("Location: http://orange.ist.rit.edu/teamOrange/webapp/admin/login.php");
}
?>

<div ng-switch on="AdminCtrl.page">
    <div ng-switch-when="choose" >
        <button ng-click="AdminCtrl.goto('add')">Add Professor/Room</button>
        <button ng-click="AdminCtrl.goto('update')">Update Professor/Room</button>

        <button ng-if="AdminCtrl.user.authLevel == 'super'" ng-click="AdminCtrl.goto('user')">Add New User</button>
    </div>

    <div ng-switch-when="add" >
        add something
    </div>

    <div ng-switch-when="update" >
        update something
    </div>

    <div ng-switch-when="user"  >
        <div ng-if="AdminCtrl.user.authLevel == 'super'" >
            load directive
        </div>

        <div ng-if="AdminCtrl.user.authLevel !== 'super'" >
            You do not have the proper authorization to access this page
        </div>
    </div>
</div>