import React from 'react'

function Paciente({paciente, setPaciente, eliminarPac}) {
  const {mascota, dueño, email, telefono, date, diagnostico, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Desea eliminar a este paciente?')

    if(respuesta) eliminarPac(id)
  }

  return (
    <div className='mx-5 my-3 bg-white shadow-md px-3 py-5 rounded-xl'>
          <p className='font-bold m-3 text-gray-700 uppercase'>
            Nombre de la mascota:
            <span className='font-normal normal-case'> {mascota}</span>
          </p>
          
          <p className='font-bold m-3 text-gray-700 uppercase'>
            Nombre del propietario:
            <span className='font-normal normal-case'> {dueño}</span>
          </p>
          
          <p className='font-bold m-3 text-gray-700 uppercase'>
            Email:
            <span className='font-normal normal-case'> {email}</span>
          </p>
          
          <p className='font-bold m-3 text-gray-700 uppercase'>
            Teléfono de contacto:
            <span className='font-normal normal-case'> {telefono}</span>
          </p>

          <p className='font-bold m-3 text-gray-700 uppercase'>
            Fecha:
            <span className='font-normal normal-case'> {date}</span>
          </p>

          <p className='font-bold m-3 text-gray-700 uppercase'>
            Diagnóstico:
            <span className='font-normal normal-case'> {diagnostico}</span>
          </p>

        <div className='flex justify-between mx-4'>
          <button className='bg-orange-600 py-2 px-8 hover:bg-orange-700 font-bold uppercase rounded-lg text-white'
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          
          <button className='text-orange-600 py-2 px-8 hover:text-orange-700 font-bold uppercase rounded-lg border-2 border-orange-600'
            onClick={handleEliminar}
          >
            Eliminar
          </button>

        </div>
    </div>
  )
}

export {Paciente}