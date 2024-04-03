import './cursosTecnicos.css'

const CursosTecnicos = () => {
    return (
        <div className='cursosTecnicos'>
            <h1>Cursos técnicos</h1>
            <section className="containerCursos">
                <div className="containerCursosGrid">
                   <span>
                    <img src="./images/vacina.png" alt="" />
                    <p>Enfermagem</p>
                   </span>
                   <span>
                   <img src="./images/computador.png" alt="" />
                    <p>Desenvolvimento de Sistemas</p>
                   </span>
                   <span>
                    <img src="./images/processo.png" alt="" />
                    <p>Recursos Humanos</p>
                   </span>
                   <span>
                    <img src="./images/despesas.png" alt="" />
                    <p>Administração</p>
                   </span>
                   <span>
                    <img src="./images/cana-de-acucar.png" alt="" />
                    <p>Açucar e álcool</p>
                   </span>
                   <span>
                   <img src="./images/agricultura.png" alt="" />
                    <p>Agropecuária</p>
                   </span>
                   <span>
                    <img src="./images/vaca.png" alt="" />
                    <p>zootecnia</p>
                   </span>
                   <span>
                   <img src="./images/financeiro.png" alt="" />
                    <p>agronegócio</p>
                   </span>
                   
                </div>
            </section>
        </div>
    )
}

export default CursosTecnicos