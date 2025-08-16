import { Link } from 'react-router-dom'

export function ErrorPage () {
    return (
        <div className='flex w-full min-h-screen justify-center items-center flex-col'>
            <h1 className='font-bold text-4xl mb-4 text-white'>Página nao encontrada</h1>
            
            <Link className='bg-gray-50/20 text-white py-1 px-4 rounded-md' to="/">
                Voltar para Home
            </Link>

        </div>
    )
}