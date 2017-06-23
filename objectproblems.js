var movies=[
{title:"mad max",rating:5,hasWatched: true},
{title:"inception",rating:5,hasWatched: true},
{title:"love",rating:1,hasWatched: false},
{title:"shakthi",rating:1,hasWatched: false}];

for(var i=0;i<movies.length;i++){

    if (movies[i].hasWatched==false){

        console.log("You have not watched "+ movies[i].title+"- " +movies[i].rating +" stars");
    }

    if (movies[i].hasWatched==true){

        console.log("You have watched "+ movies[i].title+"- " +movies[i].rating +" stars");
    }
}



