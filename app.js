const App = () => {
    return (
    <div>
        <Header></Header>
    </div>
    )
}

const Header = () => {
    return (
        <h1>Hello world!</h1>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))