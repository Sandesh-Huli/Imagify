import { stepsData } from "../assets/assets";
const Steps = () => {
    return (
        <div className="steps flex items-center flex-col justify-center my-32">
            <h1 className="text-3xl sm:text-5xl font-semibold text-center mb-2">How it works?</h1>
            <p className="text-center text-lg sm:text-2xl text-gray-500 mb-10">transform words into stunning images</p>
            <div className="space-y-4 w-full max-w-3xl">
                {stepsData.map( (d,index) => (
                    <div key={d.id} className="flex items-center p-5 px-8 gap-4 bg-white/40 shadow-md border border-gray-200 rounded-lg cursor-pointer hover:scale-[1.02] transition-all duration-300">
                        <img width={40} src={d.icon} alt="icon" />
                        <div key={index}>
                            <h2 className="font-semibold text-xl font-medium">{d.title}</h2>
                            <p className="text-gray-500 text-sm sm:text-base">{d.description}</p>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    )
}
export default Steps;