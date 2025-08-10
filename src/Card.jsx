import profilePic from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img className = "card-image" src={profilePic} alt="Minha foto de perfil"></img>
            <h2 className='card-title'>Gabriel Henrique</h2>
            <p className='card-text'> Estudante de Ciências da Computação!</p>
        </div>
    );
}

export default Card