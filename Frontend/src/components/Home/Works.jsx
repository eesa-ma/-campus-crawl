import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { LuPackageCheck } from "react-icons/lu";

function Works() {

    const Steps = [
        {
            Icon: <CiSearch size={30} />,
            title: 'Search Your University',
            description: 'Enter your university to find everything you need for your move, all in one place.'
        },
        {
            Icon: <MdOutlineExplore size={30} />,
            title: 'Explore Your Options',
            description: 'Compare the best deals on travel, verified accommodation, and student-friendly food services.'
        },
        {
            Icon: <LuPackageCheck size={30} />,
            title: 'Plan With Confidence',
            description: 'Use our guides and tools to make your relocation smooth, simple, and stress-free.'
        },
    ];

    return (
        <>
            <div className="Centurygothics-font text-center space-y-10 p-10">
                <h1 className="text-5xl  md:text-7xl font-bold  mb-8">Getting Started Is Easy</h1>
                <p className="text-xl font-semibold">Follow these simple steps to begin your university journey.</p>
                <div className="flex ">
                    {Steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="p-6 rounded-full mb-5 border-2">{step.Icon}</div>
                            <h2 className="font-bold">{step.title}</h2>
                            <p className="max-w-">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Works