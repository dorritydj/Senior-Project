<?php
session_start();

if(!isset($_SESSION['username'])){
    header("Location: http://orange.ist.rit.edu/teamOrange/webapp/admin/login.php");
}
?>

<div ng-switch on="AdminCtrl.page">
    <div ng-switch-when="choose" >
        <button class="btn btn-defualt" ng-click="AdminCtrl.goto('add')">Add Professor/Room</button>
        <button class="btn btn-defualt" ng-click="AdminCtrl.goto('update')">Update Professor/Room</button>

        <button class="btn btn-defualt" ng-if="AdminCtrl.user.authLevel == 'super'" ng-click="AdminCtrl.goto('user')">Add New User</button>
    </div>

    <div ng-switch-when="add" >
        <ist-admin-add
            dept="{{AdminCtrl.user.deptCode}}"
        ></ist-admin-add>
    </div>

    <div ng-switch-when="update" >
        <ist-admin-update
            dept="{{AdminCtrl.user.deptCode}}"
        ></ist-admin-update>
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
<style>
    button{
        color: black;
    }
</style>
