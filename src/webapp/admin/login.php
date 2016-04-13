<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ISTE Factulty Directory</title>
</head>
<body>
<div class="formCircleContianer">
<div>
    <form class="form-horizontal" method="POST" action="https://orange.ist.rit.edu/teamOrange/php/User/login.php" id="loginForm">
    <h2>Login</h2> 
        <div class="form-group">
            <label class="col-sm-2 control-label">Username: </label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="userName"/>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Password: </label>
            <div class="col-sm-10">
                <input type="Password" name="password" class="form-control"/>
            </div>
        </div>
        <div>
        <button class="btn btn-default" type="submit" style="margin-top: 3%;" type="button">Submit</button>
        </div>
    </form>
</div>
</div>
</body>
<style type="text/css">
     .formCircleContianer{
        border-radius: 50%;
          background: #27588F;
          border: 3px solid white;
          width: 16%;
          height: auto;
          text-align: center;
          margin-top: 10%;
          margin-left: 39%;
     }
     form{
        margin: 0 auto;
        width: 100%;
        margin-top: 15%;
        margin-bottom: 10%;
    }
</style>
</html>

