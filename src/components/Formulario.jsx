import React, { useState } from 'react'
import { useEffect } from 'react'
import Error from './Error'

function Formulario({ pacientes, paciente, setPacientes, setPaciente }) {
  const [mascota, setMascota] = useState('')
  const [dueño, setDueño] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [date, setDate] = useState()
  const [diagnostico, setDiagnostico] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setMascota(paciente.mascota)
      setDueño(paciente.dueño)
      setEmail(paciente.email)
      setTelefono(paciente.telefono)
      setDate(paciente.date)
      setDiagnostico(paciente.diagnostico)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random+fecha;
  }

  const handleSubmit = e => {
    e.preventDefault()
    
    if([mascota,
      dueño,
      email,
      telefono,
      date,
      diagnostico].includes('')){
        setError(true)
        return
      }
      setError(false)

      // Creamos objeto paciente con la INFO que proviene de los inputs
      const objPaciente = {
        mascota,
        dueño,
        email,
        telefono,
        date,
        diagnostico
      }

      if(paciente.id){
        // Editando el paciente
        objPaciente.id = paciente.id;
        // Al detectar que el paciente del state tenga el mismo id del que estamos editando, reemplaza el que estamos pasando vs el que está en el state.
        const pacientesAct = pacientes.map(pacState => pacState.id === paciente.id ? objPaciente : pacState)

        setPacientes(pacientesAct)
        setPaciente({})
      }else{
        // Nuevo registro de paciente
        objPaciente.id = generarId() //Antes de que vaya para el array, generamos un ID para el objeto PACIENTE recién creado.
        // Agregar pacientes al array.
        setPacientes([...pacientes, objPaciente])  
      }

      // Reseteamos el formulario
      setMascota('')
      setDueño('')
      setEmail('')
      setTelefono('')
      setDate('')
      setDiagnostico('')
  }

  return ( 
    <div  className="md:w-1/2 lg:w-2/5 mb-10 mx-5 ">
      <h2 className='font-black text-3xl text-center'>Formulario acerca del animal</h2>

      <p className="mt-5 text-center text-xl mb-3">
        Añada sus pacientes y {''}
        <span className='text-orange-600 font-bold'>adminístrelos</span>
      </p>

      <form 
        className='bg-white shadow-md rounded-lg py-10 px-5'
        onSubmit={handleSubmit}
      >
        {error && <Error><p>Todos los campos son obligatorios.</p></Error>}
        <div className='mb-5'>
          <label htmlFor='mascotaName' className='block text-gray-700 uppercase font-bold'>
            Nombre de Mascota:
          </label>

          <input 
            placeholder='Ingrese el nombre de la mascota'
            type="text"
            id='mascotaName'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={mascota}
            onChange={e => setMascota(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietarioName' className='block text-gray-700 uppercase font-bold'>
            Nombre del Propietario:
          </label>

          <input 
            placeholder='Ingrese el nombre de propietario'
            type="text"
            id='propietarioName'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={dueño}
            onChange={e => setDueño(e.target.value)}
          />
        </div>
        
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
            Email:
          </label>

          <input 
            placeholder='Ingrese el mail del propietario'
            type="email"
            id='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='telefono' className='block text-gray-700 uppercase font-bold'>
            Teléfono de contacto:
          </label>

          <input 
            placeholder='Ingrese un teléfono de contacto'
            type="text"
            id='telefono'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
          />
        </div>
        
        <div className='mb-5'>
          <label htmlFor='fecha' className='block text-gray-700 uppercase font-bold'>
            Fecha:
          </label>

          <input 
            type="date"
            id='fecha'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        
        <div className='mb-5'>
          <label htmlFor='diagnóstico' className='block text-gray-700 uppercase font-bold'>
            Diagnóstico:
          </label>

          <textarea
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Ingrese el diagnóstico del paciente:'
            value={diagnostico}
            onChange={e => setDiagnostico(e.target.value)}
          />
        </div>

        <input 
          type="submit"
          className='bg-orange-500 w-full p-3 text-white uppercase font-bold
          hover:bg-orange-600 cursor-pointer transition-all
          '
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />

      </form>
    </div>
  )
}

export {Formulario}