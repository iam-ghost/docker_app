var ip ="192.168.29.64"

function del(){

    var xhr = new XMLHttpRequest()
    
    xhr.open("GET", `http://${ip}/cgi-bin/cgi_server.py?x=`+document.getElementById("in1").value, true);
    
    xhr.send();
    xhr.onload = function (){
        var output = xhr.responseText;
        document.getElementById("d1").innerHTML = output;
    }

}


function dis_image(){

    var xhr = new XMLHttpRequest()
        
    xhr.open("GET", `http://${ip}/cgi-bin/cgi_server.py?x=docker images`, true);
        
    xhr.send();
    xhr.onload = function (){
        var output = xhr.responseText;
        document.getElementById("t1").innerHTML = output;
    }

}

function pull_image(){

    var xhr = new XMLHttpRequest()
    
    xhr.open("GET", `http://${ip}/cgi-bin/cgi_server.py?x=docker pull`+document.getElementById("in1").value, true);
    
    xhr.send();
    xhr.onload = function (){
        var output = xhr.responseText;
        document.getElementById("t1").innerHTML = output;
    }

}

function launch_con(){

    var xhr = new XMLHttpRequest()
    
    xhr.open("GET", `http://${ip}/cgi-bin/cgi_server.py?x=docker run -dit --name `  + document.getElementById("in1").value + " " + document.getElementById("in2").value, true);
    
    xhr.send();
    xhr.onload = function (){
        var output = xhr.responseText;
        document.getElementById("t1").innerHTML = output;
    }

}

function show_run(){

    var xhr = new XMLHttpRequest()
        
    xhr.open("GET", `http://${ip}/cgi-bin/cgi_server.py?x=docker container ls`, true);
        
    xhr.send();
    xhr.onload = function (){
        var output = xhr.responseText;
        document.getElementById("t1").innerHTML = output;
    }

}


function show_all(){

    var xhr = new XMLHttpRequest()
        
    xhr.open("GET", `http://${ip}/cgi-bin/cgi_server.py?x=docker container ls -a`, true);
        
    xhr.send();
    xhr.onload = function (){
        var output = xhr.responseText;
        document.getElementById("t1").innerHTML = output;
    }

}

function start_con(){

    var xhr = new XMLHttpRequest()
    
    xhr.open("GET", `http://${ip}/cgi-bin/cgi_server.py?x=docker start `+document.getElementById("in1").value, true);
    
    xhr.send();
    xhr.onload = function (){
        var output = xhr.responseText;
        document.getElementById("t1").innerHTML = output;
    }

}

function stop_con(){

    var xhr = new XMLHttpRequest()
    
    xhr.open("GET", `http://${ip}/cgi-bin/cgi_server.py?x=docker stop `+document.getElementById("in1").value, true);
    
    xhr.send();
    xhr.onload = function (){
        var output = xhr.responseText;
        document.getElementById("t1").innerHTML = output;
    }

}

function del_con(){

    var xhr = new XMLHttpRequest()
    
    xhr.open("GET", `http://${ip}/cgi-bin/cgi_server.py?x=docker rm -f  `+document.getElementById("in1").value, true);
    
    xhr.send();
    xhr.onload = function (){
        var output = xhr.responseText;
        document.getElementById("t1").innerHTML = output;
    }

}