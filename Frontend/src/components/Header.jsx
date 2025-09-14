import bgheader from '../assets/banner/bg.mp4';

function Header() {
    return (
        <>
            <header className="w-full h-20 overflow-hidden border rounded-full bg-transparent">
                <div className="w-full h-full flex items-center justify-around px-4 z-10">
                    <a href="#home" className="gistesy-font text-5xl ">Campus Crawl</a>
                    <p className='Centurygothics-font text-xl'>Your smooth start to uni life</p>
                </div>
            </header>
        </>
    );
}

export default Header;