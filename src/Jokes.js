export default function Jokes(props) {
    return(
        <div>
            <h1>Joke: {props.joke}</h1>
            <p>Punchline: {props.punchline}</p>
            <hr/>
        </div>
    )
}