import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import Logo from '../../assets/LogoFabricio.png'
import Fabricio from '../../assets/Fabricio.png'
import { Separator } from '../ui/separator';

export default function Profile() {

    const typedTextRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['FrontEnd Developer', 'Software Engineer'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        };

        const typed = new Typed(typedTextRef.current, options);

        return () => {
            typed.destroy();
        };
    }, [])

    const ProfileData = [
        {
            title: 'Pais:',
            subtitle: 'Brasil'
        },
        {
            title: 'Cidade:',
            subtitle: 'Natal RN'
        },
        {
            title: 'Idade:',
            subtitle: '22 Anos'
        },
    ]

    const ProfessionalData = [
        {
            language: 'HTML',
            percent: '100%'
        },
        {
            language: 'CSS',
            percent: '100%'
        },
        {
            language: 'JavaScript',
            percent: '80%'
        },
        {
            language: 'React',
            percent: '70%'
        },
        {
            language: 'TypeScript',
            percent: '70%'
        },
        {
            language: 'NextJs',
            percent: '50%'
        },
        {
            language: 'Git',
            percent: '80%'
        },
        {
            language: 'Tailwind',
            percent: '80%'
        },
    ]

    return (
        <div className="flex flex-col w-3/12">
            <div className="flex flex-col w-full h-5 justify-start items-start -mb-2 trapezium">
                <img src={Logo} width="18%" alt="Logo" className='mt-2 pl-2' />
            </div>
            <div className="flex flex-col w-full h-auto justify-center items-center rounded-lg bg-[#10152A] py-3 gap-y-2">
                <img src={Fabricio} width="40%" alt="Fabricio" className=' rounded-full border-8 border-gray-600/20' />
                <h2 className=' text-white text-2xl font-bold'>Fabricio Dantas Alves</h2>
                <div className='flex text-sky-500'>
                    <span ref={typedTextRef}></span>
                </div>
                <Separator className="mt-2 bg-gray-100/10 w-9/12 h-0.5" />
                <div className='flex flex-col w-9/12 h-auto justify-center items-center gap-y-2'>
                    {ProfileData.map((item, index) => (
                        <div key={index} className='flex flex-row w-full justify-between items-center'>
                            <h3 className='text-white font-semibold'>
                                {item.title}
                            </h3>
                            <h3 className='text-white font-light'>
                                {item.subtitle}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col bg-[#242C4D] w-11/12 justify-center items-center mt-5 rounded-lg py-2 gap-y-4'>
                    <h3 className='text-white font-bold'>Ferramentas</h3>
                    <div className='flex flex-wrap w-10/12 justify-center items-center gap-y-2'>
                        {ProfessionalData.map((item, index) => (
                            <div key={index} className='flex flex-col justify-around items-center gap-x-5 gap-y-2'>
                                <div className='w-12 h-12 ml-2 mr-2 justify-center items-center rounded-full border-2 border-sky-500'>
                                    <p className='text-white text-center mt-2.5 font-light text-[14px]'>{item.percent}</p>
                                </div>
                                <p className='text-white font-regular'>{item.language}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}