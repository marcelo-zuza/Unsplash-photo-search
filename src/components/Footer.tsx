import MZ from '../assets/img/logo-neutral900-cut.jpg'

const Footer = () => {
  return (
    <div className='py-6 bg-neutral-900'>
        <div className="grid grid-cols-1 place-items-center">
            <div className="py-2">
                <img className="h-16" src={MZ} alt="mz" />
            </div>
            <p className="text-white md:text-xl hover:underline duration-700"><a href="https://marcelozuza.vercel.app/"><span className="font-bold text-sky-600">MARCELO ZUZA</span></a></p>
            <p className="text-white md:text-xl"><span className="font-bold text-sky-600">Web & Mobile</span></p>
            <p className="text-base text-white">&copy; 2024. All rights reserved  <span className="font-bold">2024</span></p>
        </div>
    </div>
  )
}

export default Footer