import { plans } from "../assets/assets"
import PlanCard from "../components/PlanCard"

export default function BuyCredit() {
    return (
        <div className="py-8 px-4">
            <div className="text-center flex flex-col items-center justify-center gap-8 sm:gap-16">
                <p className="bg-white/100 px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-neutral-700 w-fit text-xs sm:text-sm bg-blue-100">OUR PLANS</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold ">Choose the plan</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-16 items-center justify-center">
                {
                    plans.map((plan, index) => (
                        <PlanCard
                            key={index}
                            id={plan.id}
                            desc={plan.desc}
                            price={plan.price}
                            credits={plan.credits}
                        />
                    ))
                }
            </div>
        </div>
    )
}