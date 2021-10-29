


postAccount(username, email, password, accountType);{

    
    var newUser = new Object();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;
    newUser.accountType = accountType;


    //Making JSON String
    var jsonString = JSON.stringify(newUser);


    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "/locahost:8080";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(jsonString);

}