var library = [
 { author: 'John Grisham', title: 'The Reckoning', readingStatus: true },
 { author: 'Nicholas Sparks', title: 'Every Breath', readingStatus: true },
 { author: 'Stephen King', title: 'Elevation', readingStatus: false }
 ];

 for(i = 0; i< library.length; i++){
 	if(library[i].readingStatus == true){
 		document.getElementById("display").innerHTML +=  'Already read ' + library[i].title + ' by ' + library[i].author + '.' + '<br>';
 	}else{
 		document.getElementById("display").innerHTML +=  'You still need to read ' + library[i].title + ' by ' + library[i].author + '.' + '<br>';
 	}
 }