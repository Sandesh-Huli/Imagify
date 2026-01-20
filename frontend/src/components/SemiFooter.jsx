import GenerateButton from "./GenerateButton"
const SemiFooter = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-8 sm:mb-14 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">See the magic. Try now</h1>
            <GenerateButton />
        </div>
    );
}
export default SemiFooter;