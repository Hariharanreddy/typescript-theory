const superHeros: string[] = []
// const heroPower: number[] = []
const heroPower: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

const MLModels: number[][] = [
    [255, 255, 255],
    []
]


superHeros.push("spiderman")
heroPower.push(2)

allUsers.push({name: "", isActive: true})


//Readonly + Array
type happy = {
    readonly movies: Array<string>
}

function movie(movie: happy){

    //this is allowed in readonly
    movie.movies.push("hari");

    //this is not allowed
    movie.movies = ["hari"]

}

movie({movies: ["hari"]})

export {}