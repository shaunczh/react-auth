const Home = ({name}) => {
    
    return (
        <div>
            <h1>{name ? 'Hi ' + name:'You are not logged in'} </h1>
        </div>
    )
}

export default Home
