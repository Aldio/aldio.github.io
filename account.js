var ref = new Firebase('https://hiveio.firebaseio.com/');

var user = 'loggedOut'
var token = localStorage.getItem('token');
if(token == null){
  token = "No Token"
}

var portAvailability = [] //true means available , false means not available

getPortAvailability()
//createUser('rohan@techlabeducation.com', 'jenga') //this should be called from html when a button is pressed or something

ref.authWithCustomToken(token, function(error, result) {
  if (error) {
    console.log("No pre-existing token found");
  } else {
    console.log("Pre-existing token found");
  }
});

function createUser(email, password){
    var newEmail = replacePeriods(email)
    ref.createUser({
        email    : email,
        password : password
    }, function(error, userData) {
        if (error) {
            console.log("Error creating user:", error);
        } else {
            console.log("Successfully created user account with uid:", userData.uid);
            ref.child('users').child(newEmail).set({
                ports: {
                    port1: {
                        type: 'empty',
                        value: 'empty',
                    },
                    port2: {
                        type: 'empty',
                        value: 'empty'
                    },
                    port3: {
                        type: 'empty',
                        value: 'empty'
                    },
                    port4: {
                        type: 'empty',
                        value: 'empty'
                    }
                } ,
                settings: {
                    email: email
                }
            })
        }
    });
}

function changeAvailability(num){
    var value = ''
    if(portAvailability[num-1] == 'empty'){
        value = 'please enter a sensor type'
    }else{
        value = 'empty'
    }

    ref.child('users').child(user).child('ports').child('port'+ num).update({
        type: value
    })

    getPortAvailability()
}

function getPortAvailability(){

    ref.child('users').child(user).child('ports').on("value", function(snapshot) {
        var index = 0
        snapshot.forEach(function(childSnapshot){
            //console.log(childSnapshot.child('type').val())
            portAvailability[index] = childSnapshot.child('type').val()


            index++
        })
    });

}

function replacePeriods(email){
    return email.replace(/\./g,'*')
}

function login(email, password){
    ref.authWithPassword({
        email    : email,
        password : password
    }, function authHandler(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
            token = authData.token;
            localStorage.setItem('token', token);
            user = replacePeriods(email)
        }
    });
}

function logout(){
    ref.unauth();
    localStorage.removeItem('token');
    user = 'loggedOut'
}

//checks any changes in user authentication
ref.onAuth(function(){
    if(ref.getAuth() == null){
        $("#loginstatus").css("color", "red");
    }else{
        $("#loginstatus").css("color", "green");
    }
});

// Debug code
function deleteUser(email, password){
    ref.removeUser({
        email: email,
        password: password
    }, function(error) {
        if (error) {
            switch (error.code) {
                case "INVALID_USER":
                    console.log("The specified user account does not exist.");
                    break;
                case "INVALID_PASSWORD":
                    console.log("The specified user account password is incorrect.");
                    break;
                default:
                    console.log("Error removing user:", error);
            }
        } else {
            ref.child("users").child(replacePeriods(email)).remove();
            console.log("User account deleted successfully!");
        }
    });
}
