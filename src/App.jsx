import { useEffect, useState } from 'react'
import {Header} from './components/Header'
import {Formulario} from './components/Formulario'
import {ListaPacientes} from './components/ListaPacientes'

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPac = id => {
    const pacientesAct =  pacientes.filter(pac => pac.id !== id)
    setPacientes(pacientesAct)
  }

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);
  
  // UseEffect al agregar o modificar el array de pacientes.
  useEffect(() => {
    if(pacientes.length){
      localStorage.setItem('pacientes', JSON.stringify( pacientes ));
      console.log(pacientes)
    }
  }, [pacientes])

  return (
    <div className="container mt-10 mx-auto">
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          paciente={paciente}
        />
        <ListaPacientes 
          pacientes={pacientes}        
          setPaciente={setPaciente}
          eliminarPac={eliminarPac}
        />
      </div>
    </div>
  )
}
 
export default App 
