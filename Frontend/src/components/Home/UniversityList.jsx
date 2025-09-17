import soeImg from '../../assets/university/soe.png'
import cucekImg from '../../assets/university/cucek.jpg'
import tkmImg from  '../../assets/university/tkm.png'
import gecImg from '../../assets/university/gec.png'
import cetImg from '../../assets/university/cet.png'
import nitcImg from '../../assets/university/nitc.png'

function UniversityList() {
    
    const Universities = [
        {
            name: 'School of Engineering', location: 'Ernakulam', img: soeImg,
        },
        {
            name: 'Cochin University College of Engineering Kuttanad', location: 'Kuttanad', img: cucekImg,
        },
        {
            name: 'TKM  College of Engineering', location: 'Kollam', img: tkmImg,
        },
        {
            name: 'Govt Engineering College Thrissur', location: 'Thrissur', img: gecImg,
        },
        {
            name: 'College of Engineering Trivandrum', location: 'Thiruvananthapuram', img: cetImg,
        },
        {
            name: 'National Institute of Technology', location: 'Calicut', img: nitcImg,
        },
    ];

    return(
        <div className="p-8 PlayfairDisplay">
            <h1 className="text-5xl  md:text-7xl font-bold text-center mb-8 Centurygothics-font">Explore Top Universities</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Universities.map((uni, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img 
                            src={uni.img} 
                            alt={uni.name} 
                            className="w-full h-48 object-cover" 
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">{uni.name}</h2>
                            <p className="text-gray-600 mt-1">{uni.location}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default UniversityList;