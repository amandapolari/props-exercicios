import React from 'react';
import InfosUsuario from './InfosUsuario.jsx';

export function reproduzVideo() {
    alert('O vídeo está sendo reproduzido');
}

export function CardVideo({ infosVideo }) {
    // const { infosVideo } = props;
    const autor = 'Amanda';
    return (
        <div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                {infosVideo.imagem}
                <h4>{infosVideo.titulo}</h4>
                <InfosUsuario autor={autor} />
            </div>
        </div>
    );
}
