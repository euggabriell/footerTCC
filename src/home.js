import './home.css'

function Home (){
    return(
        <div className="corpo">
            <img className='Foto1' src={require('./FOTO5.jpg')} width={300}/>
            <img className='Foto2' src={require('./FOTO6.jpg')} width={300}/>
            <img className='Foto3' src={require('./FOTO7.jpg')} width={300}/>
            <img className='Foto4' src={require('./HOME.jpg')} width={300}/>

        </div>
    )
}

export default Home;

