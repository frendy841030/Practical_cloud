
var inputnum ;

function myFunction(){
	"use strict" ;
	
	$.ajax({ 
    	type: 'GET', 
		url: inputnum, 
		dataType: 'json',
		
    	success: function (data) { 
			document.getElementById("change_h1").innerHTML = "The PosId You Search Is " + document.getElementById("search_input").value ;
			$.each( data, function(index, element) {
				var divRow = $("<div>").addClass("divTableRow");
				var divPostId = $("<div>").addClass("divTableCell").html(element.postId) ;
				var divCellId = $("<div>").addClass("divTableCell").html(element.id ) ;
				var divCellName = $("<div>").addClass("divTableCell").html(element.name) ;
				var divCellEmail = $("<div>").addClass("divTableCell").html(element.email ) ;
				var divCellBody = $("<div>").addClass("divTableCell").html(element.body) ;
				divRow.append(divPostId,divCellId,divCellName,divCellEmail,divCellBody) ;
				
				$(".divTableBody").append(divRow) ;
			});
		},
		error : function () {
			document.getElementById("loadError").innerHTML = "The number you input doesn't exist" ;
		} 
		
	});
} 

function testFunction() {
	
	"use strict" ;
	
	inputnum = 'https://jsonplaceholder.typicode.com/comments?postId='+ document.getElementById("search_input").value ;
	myFunction() ;
} 

function reset() {
	"use strict" ;
	window.location.reload() ;
} 
