// Initialize Firebase
var config = {
    apiKey: "AIzaSyAY6D5duYTAbfO0zz9GZDLA7F0VdaHSpQw",
    authDomain: "sandbox-b4c75.firebaseapp.com",
    databaseURL: "https://sandbox-b4c75.firebaseio.com",
    projectId: "sandbox-b4c75",
    storageBucket: "sandbox-b4c75.appspot.com",
    messagingSenderId: "85762222100"
};

firebase.initializeApp(config);

var database = firebase.database();
//
// $("#submit").click(function () {
//     var result = database.ref().push(
//         {
//             name: $("#name").val(),
//             role: $("#role").val(),
//             startDate: $("#start-date").val(),
//             rate: $("#rate").val(),
//             dateAdded: firebase.database.ServerValue.TIMESTAMP
//         });
//     console.log("result: " + result);
// });
//
// database.ref().on("child_added", function(snapshot)
//     {
//         console.log(snapshot.key + ": " + JSON.stringify(snapshot,null,'\t'));
//         var tr = $("<tr>").attr("id",snapshot.key);
//         var child = snapshot.val();
//
//         $(tr).append($("<td>").text(child.name));
//         $(tr).append($("<td>").text(child.role));
//         $(tr).append($("<td>").text(child.startDate));
//         $(tr).append($("<td>").text("months-worked"));
//         $(tr).append($("<td>").text(child.rate));
//
//         $("#employees").append(tr);
//
//     }
// );
