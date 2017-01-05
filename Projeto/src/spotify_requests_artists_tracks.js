var Spotify = require('spotify-web-api-js')
var s = new Spotify();
var position = 0;
var top100 = ["The Beatles",	
"Bob Dylan",	
"Elvis Presley",	
"The Rolling Stones",	
"Chuck Berry",	
"Jimi Hendrix",	
"James Brown",	
"Little Richard",	
"Aretha Franklin",	
"Ray Charles",	
"Bob Marley",	
"The Beach Boys",	
"Buddy Holly",	
"Led Zeppelin",
"Stevie Wonder",	
"Sam Cooke",	
"Muddy Waters",	
"Marvin Gaye",	
"The Velvet Underground",
"Bo Diddley",	
"Otis Redding",	
"U2",	
"Bruce Springsteen",	
"Jerry Lee Lewis",	
"Fats Domino",	
"Ramones",	
"Prince",	
"The Clash",
"The Who",	
"Nirvana",	
"Johnny Cash",	
"Smokey Robinson",	
"The Everly Brothers",	
"Neil Young",	
"Michael Jackson",	
"Madonna",
"Roy Orbison",
"John Lennon",	
"David Bowie",	
"Simon & Garfunkel",	
"The Doors",	
"Van Morrison",	
"Sly Stone",
"Public Enemy",
"The Byrds",
"Janis Joplin",
"Patti Smith",
"Run-D.M.C.",
"Elton John",
"The Band",
"Pink Floyd",
"Queen",
"The Allman Brothers Band", 
"Howlin Wolf",	
"Eric Clapton",	
"Dr. Dre",
"Grateful Dead",
"Funkadelic Parliament",
"Aerosmith"	,
"The Sex Pistols",
"Metallica",
"Joni Mitchell",
"Tina Turner",
"Phil Spector",
"The Kinks",
"Al Green",
"Cream",
"The Temptations",
"Jackie Wilson",
"The Police",
"Frank Zappa",
"AC/DC",
"Radiohead",
"Hank Williams",
"Eagles",
"The Shirelles",
"Beastie Boys",
"The Stooges",
"The Four Tops",
"Elvis Costello",
"The Drifters",
"Creedence Clearwater Revival",
"Eminem",
"James Taylor",
"Black Sabbath",
"Tupac Shakur",
"Gram Parsons",
"Jay Z",
"The Yardbirds",
"Carlos Santana",
"Tom Petty",
"Guns N' Roses",
"Booker T. & the M.G.s",
"Nine Inch Nails",
"Lynyrd Skynyrd",
"The Supremes",
"R.E.M.",
"Curtis",
"Carl Perkins",
"Talking Heads"]
var artists = [
    {
      "name": "The Beatles",
      "id": "3WrFJ7ztbogyGnTHbHJFl2",
      "position": 1
    },
    {
      "name": "Bob Dylan",
      "id": "74ASZWbe4lXaubB36ztrGX",
      "position": 2
    },
    {
      "name": "The Rolling Stones",
      "id": "22bE4uQ6baNwSHPVcDxLCe",
      "position": 3
    },
    {
      "name": "Elvis Presley",
      "id": "43ZHCT0cAZBISjO8DG9PnE",
      "position": 4
    },
    {
      "name": "Chuck Berry",
      "id": "293zczrfYafIItmnmM3coR",
      "position": 5
    },
    {
      "name": "Jimi Hendrix",
      "id": "776Uo845nYHJpNaStv1Ds4",
      "position": 6
    },
    {
      "name": "James Brown",
      "id": "7GaxyUddsPok8BuhxN6OUW",
      "position": 7
    },
    {
      "name": "Little Richard",
      "id": "4xls23Ye9WR9yy3yYMpAMm",
      "position": 8
    },
    {
      "name": "Aretha Franklin",
      "id": "7nwUJBm0HE4ZxD3f5cy5ok",
      "position": 9
    },
    {
      "name": "Ray Charles",
      "id": "1eYhYunlNJlDoQhtYBvPsi",
      "position": 10
    },
    {
      "name": "Bob Marley & The Wailers",
      "id": "2QsynagSdAqZj3U9HgDzjD",
      "position": 11
    },
    {
      "name": "The Beach Boys",
      "id": "3oDbviiivRWhXwIE8hxkVV",
      "position": 12
    },
    {
      "name": "Buddy Holly",
      "id": "3wYyutjgII8LJVVOLrGI0D",
      "position": 13
    },
    {
      "name": "Led Zeppelin",
      "id": "36QJpDe2go2KgaRleHCDTp",
      "position": 14
    },
    {
      "name": "Stevie Wonder",
      "id": "7guDJrEfX3qb6FEbdPA5qi",
      "position": 15
    },
    {
      "name": "Sam Cooke",
      "id": "6hnWRPzGGKiapVX1UCdEAC",
      "position": 16
    },
    {
      "name": "Muddy Waters",
      "id": "4y6J8jwRAwO4dssiSmN91R",
      "position": 17
    },
    {
      "name": "Marvin Gaye",
      "id": "3koiLjNrgRTNbOwViDipeA",
      "position": 18
    },
    {
      "name": "The Velvet Underground",
      "id": "1nJvji2KIlWSseXRSlNYsC",
      "position": 19
    },
    {
      "name": "Bo Diddley",
      "id": "2bmixwMZXlkl2sbIbOfviq",
      "position": 20
    },
    {
      "name": "Otis Redding",
      "id": "60df5JBRRPcnSpsIMxxwQm",
      "position": 21
    },
    {
      "name": "U2",
      "id": "51Blml2LZPmy7TTiAg47vQ",
      "position": 22
    },
    {
      "name": "Bruce Springsteen",
      "id": "3eqjTLE0HfPfh78zjh6TqT",
      "position": 23
    },
    {
      "name": "Jerry Lee Lewis",
      "id": "2zyz0VJqrDXeFDIyrfVXSo",
      "position": 24
    },
    {
      "name": "Fats Domino",
      "id": "09C0xjtosNAIXP36wTnWxd",
      "position": 25
    },
    {
      "name": "Ramones",
      "id": "1co4F2pPNH8JjTutZkmgSm",
      "position": 26
    },
    {
      "name": "Prince",
      "id": "5a2EaR3hamoenG9rDuVn8j",
      "position": 27
    },
    {
      "name": "The Clash",
      "id": "3RGLhK1IP9jnYFH4BRFJBS",
      "position": 28
    },
    {
      "name": "The Who",
      "id": "67ea9eGLXYMsO2eYQRui3w",
      "position": 29
    },
    {
      "name": "Nirvana",
      "id": "6olE6TJLqED3rqDCT0FyPh",
      "position": 30
    },
    {
      "name": "Johnny Cash",
      "id": "6kACVPfCOnqzgfEF5ryl0x",
      "position": 31
    },
    {
      "name": "Smokey Robinson",
      "id": "0h9smro0z3HqUbD94jotU8",
      "position": 32
    },
    {
      "name": "The Everly Brothers",
      "id": "4ACplpEqD6JIVgKrafauzs",
      "position": 33
    },
   {
      "name": "Neil Young",
      "id": "6v8FB84lnmJs434UJf2Mrm",
      "position": 34
    },
    {
      "name": "Michael Jackson",
      "id": "3fMbdgg4jU18AjLCKBhRSm",
      "position": 35
    },
    {
      "name": "Madonna",
      "id": "6tbjWDEIzxoDsBA1FuhfPW",
      "position": 36
    },
    {
      "name": "Roy Orbison",
      "id": "0JDkhL4rjiPNEp92jAgJnS",
      "position": 37
    },
    {
      "name": "John Lennon",
      "id": "4x1nvY2FN8jxqAFA0DA02H",
      "position": 38
    },
    {
      "name": "David Bowie",
      "id": "0oSGxfWSnnOXhD2fKuz2Gy",
      "position": 39
    },
    {
      "name": "Simon & Garfunkel",
      "id": "70cRZdQywnSFp9pnc2WTCE",
      "position": 40
    },
    {
      "name": "The Doors",
      "id": "22WZ7M8sxp5THdruNY3gXt",
      "position": 41
    },
    {
      "name": "Van Morrison",
      "id": "44NX2ffIYHr6D4n7RaZF7A",
      "position": 42
    },
    {
      "name": "Sly Stone",
      "id": "6hA6GJ2yJA08ifsAplkUr0",
      "position": 43
    },
    {
      "name": "Public Enemy",
      "id": "6Mo9PoU6svvhgEum7wh2Nd",
      "position": 44
    },
   {
      "name": "The Byrds",
      "id": "1PCZpxHJz7WAMF8EEq8bfc",
      "position": 45
    },
    {
      "name": "Janis Joplin",
      "id": "4NgfOZCL9Ml67xzM0xzIvC",
      "position": 46
    },
    
    {
      "name": "Patti Smith",
      "id": "0vYkHhJ48Bs3jWcvZXvOrP",
      "position": 47
    },
    {
      "name": "Run–D.M.C.",
      "id": "3CQIn7N5CuRDP8wEI7FiDA",
      "position": 48
    },
    {
      "name": "Elton John",
      "id": "3PhoLpVuITZKcymswpck5b",
      "position": 49
    },
    {
      "name": "The Band",
      "id": "4vpDg7Y7fU982Ds30zawDA",
      "position": 50
    },
    {
      "name": "Pink Floyd",
      "id": "0k17h0D3J5VfsdmQ1iZtE9",
      "position": 51
    },
    {
      "name": "Queen",
      "id": "1dfeR4HaWDbWqFHLkxsg1d",
      "position": 52
    },
    {
      "name": "The Allman Brothers Band",
      "id": "4wQ3PyMz3WwJGI5uEqHUVR",
      "position": 53
    },
    {
      "name": "Howlin' Wolf",
      "id": "0Wxy5Qka8BN9crcFkiAxSR",
      "position": 54
    },
    {
      "name": "Eric Clapton",
      "id": "6PAt558ZEZl0DmdXlnjMgD",
      "position": 53
    },
    {
      "name": "Dr. Dre",
      "id": "6DPYiyq5kWVQS4RGwxzPC7",
      "position": 56
    },
    {
      "name": "Grateful Dead",
      "id": "4TMHGUX5WI7OOm53PqSDAT",
      "position": 57
    },
    {
      "name": "Parliament",
      "id": "5SMVzTJyKFJ7TUb46DglcH",
      "position": 58
    },
    {
      "name": "Aerosmith",
      "id": "7Ey4PD4MYsKc5I2dolUwbH",
      "position": 59
    },
    {
      "name": "Sex Pistols",
      "id": "1u7kkVrr14iBvrpYnZILJR",
      "position": 60
    },
    {
      "name": "Metallica",
      "id": "2ye2Wgw4gimLv2eAKyk1NB",
      "position": 61
    },
    {
      "name": "Joni Mitchell",
      "id": "5hW4L92KnC6dX9t7tYM4Ve",
      "position": 62
    },
    {
      "name": "Tina Turner",
      "id": "1zuJe6b1roixEKMOtyrEak",
      "position": 63
    },
    {
      "name": "Phil Spector",
      "id": "3jVMgT4X7YeuYE4aludcmE",
      "position": 64
    },
    {
      "name": "The Kinks",
      "id": "1SQRv42e4PjEYfPhS0Tk9E",
      "position": 65
    },
    {
      "name": "Al Green",
      "id": "3dkbV4qihUeMsqN4vBGg93",
      "position": 66
    },
    {
      "name": "Cream",
      "id": "74oJ4qxwOZvX6oSsu1DGnw",
      "position": 67
    },
    {
      "name": "The Temptations",
      "id": "3RwQ26hR2tJtA8F9p2n7jG",
      "position": 68
    },
    {
      "name": "Jackie Wilson",
      "id": "4VnomLtKTm9Ahe1tZfmZju",
      "position": 69
    },
    {
      "name": "The Police",
      "id": "5NGO30tJxFlKixkPSgXcFE",
      "position": 70
    },
    {
      "name": "Frank Zappa",
      "id": "6ra4GIOgCZQZMOaUECftGN",
      "position": 71
    },
    {
      "name": "AC/DC",
      "id": "711MCceyCBcFnzjGY4Q7Un",
      "position": 72
    },
    {
      "name": "Radiohead",
      "id": "4Z8W4fKeB5YxbusRsdQVPb",
      "position": 73
    },
    {
      "name": "Hank Williams",
      "id": "1FClsNYBUoNFtGgzeG74dW",
      "position": 74
    },
    {
      "name": "Eagles",
      "id": "0ECwFtbIWEVNwjlrfc6xoL",
      "position": 75
    },
    {
      "name": "The Shirelles",
      "id": "0x83OBqixqdCHnStP5VMcn",
      "position": 76
    },
    {
      "name": "Beastie Boys",
      "id": "03r4iKL2g2442PT9n2UKsx",
      "position": 77
    },
    {
      "name": "The Stooges",
      "id": "4BFMTELQyWJU1SwqcXMBm3",
      "position": 78
    },
    {
      "name": "The Four Tops",
      "id": "7fIvjotigTGWqjIz6EP1i4",
      "position": 79
    },
    {
      "name": "Elvis Costello",
      "id": "2BGRfQgtzikz1pzAD0kaEn",
      "position": 80
    },
    {
      "name": "The Drifters",
      "id": "1FqqOl9itIUpXr4jZPIVoT",
      "position": 81
    },
    {
      "name": "Creedence Clearwater Revival",
      "id": "3IYUhFvPQItj6xySrBmZkd",
      "position": 82
    },
    {
      "name": "Eminem",
      "id": "7dGJo4pcD2V6oG8kP0tJRR",
      "position": 83
    },
    {
      "name": "James Taylor",
      "id": "0vn7UBvSQECKJm2817Yf1P",
      "position": 84
    },
    {
      "name": "Black Sabbath",
      "id": "5M52tdBnJaKSvOpJGz8mfZ",
      "position": 85
    },
    {
      "name": "2Pac",
      "id": "1ZwdS5xdxEREPySFridCfh",
      "position": 86
    },
    {
      "name": "Gram Parsons",
      "id": "1KA3WXYMPLxomNuoE22LYd",
      "position": 87
    },
    {
      "name": "JAY Z",
      "id": "3nFkdlSjzX9mRTtwJOzDYB",
      "position": 88
    },
    {
      "name": "The Yardbirds",
      "id": "2lxX1ivRYp26soIavdG9bX",
      "position": 89
    },
    {
      "name": "Santana",
      "id": "6GI52t8N5F02MxU0g5U69P",
      "position": 90
    },
    {
      "name": "Tom Petty",
      "id": "2UZMlIwnkgAEDBsw1Rejkn",
      "position": 91
    },
    {
      "name": "Guns N' Roses",
      "id": "3qm84nBOXUEQ2vnTfUTTFC",
      "position": 92
    },
    {
      "name": "Booker T. & the M.G.'s",
      "id": "2vDV0T8sxx2ENnKXds75e5",
      "position": 93
    },
    {
      "name": "Nine Inch Nails",
      "id": "0X380XXQSNBYuleKzav5UO",
      "position": 94
    },
   
    {
      "name": "Lynyrd Skynyrd",
      "id": "4MVyzYMgTwdP7Z49wAZHx0",
      "position": 95
    },
    {
      "name": "The Supremes",
      "id": "57bUPid8xztkieZfS7OlEV",
      "position": 96
    },
    {
      "name": "R.E.M.",
      "id": "4KWTAlx2RvbpseOGMEmROg",
      "position": 97
    },
    {
      "name": "Curtis Mayfield ",
      "id": "2AV6XDIs32ofIJhkkDevjm",
      "position": 98
    },
    {
      "name": "Carl Perkins",
      "id": "5hIClg6noTaCzMu2s5wp4f",
      "position": 99
    },
    {
      "name": "Talking Heads",
      "id": "2x9SpqnPi8rlE9pjHBwmSC",
      "position": 100
    },
  ]

var artistTracks = [];
requestArtistTopTracks(position);

/*function requestArtist (){

	//we need to get Artist id
	for (var i =0;i<top100.length;i++){
		s.searchArtists(top100[i], {limit: 1})
			  .then(function(data) {
			    addArtist(data);
			  }, function(err) {
			    console.error(err);
		});
	}
	
}*/


function requestArtistTopTracks (position){
	
		s.getArtistTopTracks(artists[position].id, "BR")
			  .then(function(data) {
			    console.log('Search artists ', artists[position].name, ' top tracks ', data);
			    addArtistTopTracks(data);
			   // addArtist(data);
			  }, function(err) {
			    console.error(err);
		});
}


/*function requestArtist20Tracks (position){
	
		s.searchTracks(artists[position].name,{limit: 30})
			  .then(function(data) {
			    console.log('Search artists ', artists[position].name, ' tracks ', data);
			    addArtistTopTracks(data);
			   // addArtist(data);
			  }, function(err) {
			    console.error(err);
		});
}
*/
/*function addArtist(band){
	position = position+1;
	var aux = band.artists.items;
	var obj = {
		name: aux[0].name,
		id : aux[0].id,
		position : position
	};
	console.log("Procurando ",top100[position-1]," >>>>> ",obj.name);
	artists.push(obj);
	if(position ===100){
		var jsonString = JSON.stringify({"artists":artists});
		console.log(jsonString);
	}
}*/

/*function addArtistTopTracks(band){
	position = position+1;
	var aux = band.tracks;
	var musics = [];
	for (var i = 0; i < aux.length; i++){
		var music = {
			name : aux[i].name,
			id : aux[i].id
		};
		musics.push(music);
	}
	var obj = {
		name: artists[position-1],
		id : artists[position-1].id,
		topMusics : musics,
		position : position
	};
	artistTopTracks.push(obj);
	if(position === 100){
		var jsonString = JSON.stringify({"artistTopTracks" : artistTopTracks});
		console.log(jsonString);
	} else {
		requestArtistTopTracks(position);
	}
}*/
