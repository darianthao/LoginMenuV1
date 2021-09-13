function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username="admin" && password=="root")
    {
        alert("shhhh, keep it a secret");
        return false;
    }
    else {
        alert("login failed");
    }
}