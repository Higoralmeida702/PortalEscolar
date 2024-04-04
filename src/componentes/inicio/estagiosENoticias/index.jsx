import './estagiosENoticias.css'

const EstagiosENoticias = () => {
    return (
        <div>
            <div className="containerEstagio">
            <h1>ESTÁGIOS E EMPREGOS</h1>
            <section className="sessaoEstagio">
                <div className='estagioConteudo'>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Publicado em 00/00/2000</p>
                    <a href="#">Mais sobre a vaga</a>
                </div>  
                <div className='estagioConteudo conteudoMeio'>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Publicado em 00/00/2000</p>
                    <a href="#">Mais sobre a vaga</a>
                </div>  
                <div className='estagioConteudo'>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Publicado em 00/00/2000</p>
                    <a href="#">Mais sobre a vaga</a>
                </div>  
            </section>
            </div>
                <h1 className='tituloNoticia'>Noticias</h1>
            <section className='sessaoNoticias'>
            <div className='sessaoNoticiasConteudo'>
                <div className='espacoImagem'></div>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <p>Postado em 00/00/2000</p>
                </div>
                <div className='sessaoNoticiasConteudo'>
                <div className='espacoImagem'></div>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <p>Postado em 00/00/2000</p>
                </div>
           <div className='sessaoNoticiasConteudo'>
                <div className='espacoImagem'></div>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <p>Postado em 00/00/2000</p>
                </div>    
            </section>
            <div className='btnVerMaisNoticias'><button id='designBtnMaisNoticias'>Ver mais notícias</button></div>
        </div>
    )
}

export default EstagiosENoticias