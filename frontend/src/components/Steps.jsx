import { stepsData } from "../assets/assets";
const Steps = () => {
    return (
        <div className="steps flex items-center flex-col justify-center my-12 sm:my-20 md:my-32 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-2">How it works?</h1>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 mb-6 sm:mb-10">transform words into stunning images</p>
            <div className="space-y-3 sm:space-y-4 w-full max-w-3xl">
                {stepsData.map( (d,index) => (
                    <div key={d.id} className="flex items-center p-4 sm:p-5 px-4 sm:px-6 md:px-8 gap-3 sm:gap-4 bg-white/40 shadow-md border border-gray-200 rounded-lg hover:scale-[1.02] transition-all duration-300">
                        <img width={32} className="sm:w-10 md:w-12" src={d.icon} alt="icon" />
                        <div key={index}>
                            <h2 className="font-semibold text-base sm:text-lg md:text-xl font-medium">{d.title}</h2>
                            <p className="text-gray-500 text-xs sm:text-sm md:text-base">{d.description}</p>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    )
}
export default Steps;