import Intro from "../Intro";
import SmoothScroll from "../SmoothScroll"; // Importe o componente SmoothScroll

export default function Content() {
    return (
        <div className="flex flex-col w-8/12 h-[90vh] min-h-0 justify-start ml-80 gap-y-5">
            <SmoothScroll>
                <div className="flex flex-col w-full h-auto gap-y-5">
                    <div className="flex flex-col w-full h-[70vh] rounded-lg bg-[#10152A] flex-shrink-0 p-10 gap-y-10">
                        <Intro />
                    </div>
                    <div className="flex flex-col w-full h-[70vh] rounded-lg bg-[#10152A] flex-shrink-0 p-10 gap-y-10">
                        <Intro />
                    </div>
                    <div className="flex flex-col w-full h-[70vh] rounded-lg bg-[#10152A] flex-shrink-0 p-10 gap-y-10">
                        <Intro />
                    </div>
                    <div className="flex flex-col w-full h-[70vh] rounded-lg bg-[#10152A] flex-shrink-0 p-10 gap-y-10">
                        <Intro />
                    </div>
                </div>
            </SmoothScroll>
        </div>
    );
}
