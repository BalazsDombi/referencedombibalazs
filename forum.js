


function submitComment() {


    var x = document.getElementById("yourname").value;
    var y = docment.getElementById("yourcomment").value;
    document.getElementById("commentsplace").innerHTML = x+y;
    localStorage.setItem(x+y);


}

function click()
{
    document.write = "Entered text";
}

function Geeks() {
               
    var x = document.getElementById("yourname").value;
    document.getElementById("yourcommentsplace").innerHTML =
    "Entered Text: " + x;
    
}

localStorage.setItem("comment", x);
localStorage.getItem("comment");
document.getElementById("yourcommentsplace").innerHTML =
localStorage.getItem("comment");
