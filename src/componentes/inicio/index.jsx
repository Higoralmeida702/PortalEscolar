import EstagiosENoticias from "./estagiosENoticias"
import CursosTecnicos from "./cursosTecnicos"
import SubHeader from "./subHeader"

const Inicio = () => {
    return (
        <div>
        <SubHeader/>
        <CursosTecnicos/>
       <EstagiosENoticias/>
        </div>
    )
}

export default Inicio