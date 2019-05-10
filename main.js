
 // Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyBxQUY7-aEBCMUHRdQU3cW0QXRwoGTlPDI",
  authDomain: "annotator-e263c.firebaseapp.com",
  databaseURL: "https://annotator-e263c.firebaseio.com",
  projectId: "annotator-e263c",
  storageBucket: "annotator-e263c.appspot.com",
  messagingSenderId: "684775160149",
  appId: "1:684775160149:web:4065bbc47901e7d2"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messagesRef=firebase.database().ref('Annotations');

window.onload=function(){
  document.getElementById('contactForm').addEventListener('submit',submitForm);
}

document.getElementById('contactForm').onsubmit = function(e) {
    // reference to select list using this keyword and form elements collection
    // no callback function used this time
    var Discourse1 = getInputList( this.elements['Discourse1'] );
    
    //alert( 'The number of options selected is: ' + opts.length ); //  number of selected options
    
    return false; // don't return online form
};

function getInputList(id){
	var opts = [], opt;
    
    // loop through options in select list
    for (var i=0, len=id.options.length; i<len; i++) {
        opt = id.options[i];
        
        // check if selected
        if ( opt.selected ) {
            // add to array of option elements to return from this function
            opts.push(opt);
        }
    }
    
    // return array containing references to selected option elements
    return opts;
}
//Submit form
function submitForm(e){
 e.preventDefault();

//Get values
var Comment1=getInputVal('Comment1');
var Comment2=getInputVal('Comment2');
//var Discourse1=getInputList(this.elements['Discourse1'] );
var Discourse2=getInputList(this.elements['Discourse2']); 

//Save message
saveMessage(Comment1,Comment2,Discourse1,Discourse2);

//Show alert
document.querySelector('.alert').style.display='block';

//Hide alert after 3 seconds
setTimeout(function(){
	document.querySelector('.alert').style.display='none';
},3000);

//Clear form
document.getElementById('contactForm').reset();
 }
//Function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

 
//Save message to firebase
function saveMessage(Comment1,Comment2,Discourse1,Discourse2){
	var newMessageRef=messagesRef.push();
	newMessageRef.set({
		Comment1: Comment1,
		Comment2: Comment2,
		Discourse1: Discourse1,
		Discourse2: Discourse2
	});
}

