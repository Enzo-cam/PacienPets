import React from 'react'
import { Paciente } from './Paciente'


function ListaPacientes({pacientes, setPaciente, eliminarPac}) {

  return (
    <div  className="md:w-1/2 lg:w-3/5 md:h-screen">
        <h2 className='font-black text-3xl text-center'>
            Lista de Pacientes:
        </h2>

        <p className='text-xl mt-5 mb-3 text-center'>
          Administra tus 
          <span className='text-orange-600 font-bold'> pacientes</span>
        </p>

        {pacientes.map(paciente => (
          <Paciente 
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPac={eliminarPac}
          />

        ))}

    </div>

  )
}

export {ListaPacientes} 