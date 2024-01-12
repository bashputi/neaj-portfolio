

const Home = () => {
    return (
        <div id="home" className="pt-14 text-white container mx-auto">
            <div className="flex lg:py-8 mt-5 lg:mt-16 justify-center gap-8 lg:gap-24">
            <h1 className="font-bold text-2xl lg:text-4xl">Creative</h1>
            <h1 className="mt-6 font-bold text-4xl lg:text-7xl text-[#9acd32]">Animator</h1>
            </div>
            <div className="flex justify-center ">
           <video controls autoPlay muted loop src="neaj_02.mp4" className="w-[80vw] h-[60vh]"></video>

            </div>
        </div>
    );
};

export default Home;
