

//Submit username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
  //make a request to the server and send the name
      //Create the request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                //Capture a list of names and render it as a list
                console.log('user logged in');
                alert('logged in succesfully');
            }else if(request.status === 403){
                alert('username/password is incorrect');
            }else if(request.status === 500){
                alert('something went wrong on the server');
            }
      }
      // Not done yet  
    };
    //make the request 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://sanjaysaravanan38.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password:password}));
};