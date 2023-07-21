var superHeros = [];
// const heroPower: number[] = []
var heroPower = [];
var allUsers = [];
var MLModels = [
    [255, 255, 255],
    []
];
superHeros.push("spiderman");
heroPower.push(2);
allUsers.push({ name: "", isActive: true });
function movie(movie) {
    movie.movies.push("hari");
    var x = movie;
    x.movies.push("y");
    console.log(x);
}
movie({ movies: ["hari"] });
