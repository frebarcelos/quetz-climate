
import Icon from '../icon';

function Card() {
    return (<div className="w-80 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-[blue]">Pelotas</h5>
    <div className='flex items-center justify-end gap-x-5'>
        <Icon/>
        <p className="font-normal text-xl text-gray-600 dark:text-gray-300 text-[blue]">25º</p> 
    </div>
    
    </div>)
}

export default Card;