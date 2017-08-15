//Counter Code
var button = document.getElementById('counter');

button.onclick = function(){

    
    //Create the request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();

            }
      }
      // Not done yet  
    };
    //make the request 
    request.open('GET','http://http://sanjaysaravanan38.imad.hasura-app.io/counter', true);
    request.send(null);
};    