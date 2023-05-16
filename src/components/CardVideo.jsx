import React from 'react';
import InfosUsuario from './InfosUsuario.jsx';

export function reproduzVideo() {
    alert('O vídeo está sendo reproduzido');
}

export function CardVideo(props) {
    const { imagem, titulo } = props;
    const autor = 'Amanda';
    return (
        <div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                {imagem}
                <h4>{titulo}</h4>
                <InfosUsuario autor={autor} />
            </div>
        </div>
    );
}
