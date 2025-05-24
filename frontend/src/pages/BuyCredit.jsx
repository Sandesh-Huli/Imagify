import { plans } from "../assets/assets"
import PlanCard from "../components/PlanCard"

export default function BuyCredit() {
    return (
        <div className="">
            <div className="text-center flex flex-col items-center justify-center gap-16">
                <p className="bg-white/100 px-8 py-3 rounded-full border border-neutral-700 w-fit text-xs bg-blue-100">OUR PLANS</p>
                <h1 className="text-3xl font-semibold ">Choose the plan</h1>
            </div>
            <div className="flex flex-row gap-12 mt-16 items-center justify-center">
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