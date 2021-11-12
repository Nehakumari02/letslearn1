<html>
    <head>
        <title>login</title>
        <script src="script1.js"></script>

    </head>
    <body>
        <div class="top">
            <h2 class="head">credit management system</h2>
        </div>
        <div class="content">
            <form action="/login" method="post">
                <div class="form-head">
                    <h2 class="login">LOGIN</h2>
                </div>
                <div class="container">
                    <div class="input-group">
                        <input id="uid" type="text" oninput="changeUn()" onfocus="changeUn()" onfocusout="" name="username"/>
                        <div id="user-text">Username</div>
                    </div>
                    <div class="input-group">
                        <input id="pw" type="password" oninput="changePw()" onfocusout="" name="password"/>
                        <div id="pwd-text">Password</div>
                    </div>
                    <div>
                        <button class="login-btn" type="submit" name="submit" value="login">Login</button>
                        <button class="login-btn" type="submit" name="submit" value="change-password">Change Password</button>
                    </div>
                </div>
            </form>
        </div>
    </body>
</html>
