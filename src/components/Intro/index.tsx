import { Home } from "lucide-react";

export default function Intro() {
    return (
        <div className="flex flex-col gap-y-10">
            <div className="flex w-44 h-auto justify-center items-center rounded-full border-2 border-sky-500/20 py-2 gap-x-4">
                <Home className="text-sky-500" size="16px" />
                <h3 className="text-white text-[12px]">INTRODUÇÃO</h3>
            </div>
            <div className="flex flex-col w-full h-auto justify-center items-start gap-y-5">
                <div className="flex w-8/12 h-auto">
                    <h1 className="text-subtitle text-white font-bold">
                        Especialista em
                        Desenvolvimento de Software
                    </h1>
                </div>
                <div className="flex w-11/12 h-auto">
                    <h4 className="text-min text-white text-justify font-light">
                        Minha habilidade técnica se destaca na criação de soluções inovadoras em
                        computação em nuvem e desenvolvimento full stack, projetadas para superar
                        expectativas e impulsionar o sucesso de cada projeto.
                    </h4>
                </div>
            </div>
        </div>
    )
}