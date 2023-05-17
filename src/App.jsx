import React from 'react';
import { CardVideo } from './components/CardVideo';
import './styles.css';
export default function App() {
    const infosVideo = [
        {
            imagem: <img src="https://picsum.photos/400/400?a=1 " alt="" />,
            titulo: 'Título 1',
        },
        {
            imagem: <img src="https://picsum.photos/400/400?a=2 " alt="" />,
            titulo: 'Título 2',
        },
        {
            imagem: <img src="https://picsum.photos/400/400?a=3 " alt="" />,
            titulo: 'Título 3',
        },
        {
            imagem: <img src="https://picsum.photos/400/400?a=4 " alt="" />,
            titulo: 'Título 4',
        },
        {
            imagem: <img src="https://picsum.photos/400/400?a=5 " alt="" />,
            titulo: 'Título 5',
        },
        {
            imagem: <img src="https://picsum.photos/400/400?a=6 " alt="" />,
            titulo: 'Título 6',
        },
        {
            imagem: <img src="https://picsum.photos/400/400?a=7 " alt="" />,
            titulo: 'Título 7',
        },
        {
            imagem: <img src="https://picsum.photos/400/400?a=8 " alt="" />,
            titulo: 'Título 8',
        },
    ];

    return (
        <div>
            <div className="tela-inteira">
                <header>
                    <h1>LabeTube</h1>
                    <input type="text" placeholder="Busca" id="campoDeBusca" />
                </header>

                <main>
                    <nav className="menu-vertical">
                        <ul>
                            <li className="botoes-meunu-vertical">Início</li>
                            <li className="botoes-meunu-vertical">Em alta</li>
                            <li className="botoes-meunu-vertical">
                                Inscrições
                            </li>
                            <hr />
                            <li className="botoes-meunu-vertical">Originais</li>
                            <li className="botoes-meunu-vertical">Histórico</li>
                        </ul>
                    </nav>

                    <section className="painel-de-videos">
                        {infosVideo.map((item) => {
                            // console.log(item)
                            return <CardVideo infosVideo={item} />;
                        })}
                    </section>
                </main>

                <footer>
                    <h4>Oi! Eu moro no footer!</h4>
                </footer>
            </div>
        </div>
    );
}
