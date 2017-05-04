$(document).ready(function(){
var ScriptEders=["Joel" ,"Alan" , "Tushar" ,"Yanella", "odalysis" , "Josue"];
var ScriptEducators=["Aaron" ,"Justin" , "Zach" , "Julia" , "Alyxe"];
$( "#studentButton" ).click(function() {
    var randomstudents= Math.floor(Math.random()*ScriptEders.length);
  $( "#studentDisplay" ).append(ScriptEders[randomstudents]);
 
});
$( "#teacherButton" ).click(function() {
var random= Math.floor(Math.random()*ScriptEducators.length);
 $( "#teacherDisplay" ).append(ScriptEducators[random]);


});
});