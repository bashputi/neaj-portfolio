import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <div id="about" className=" py-12 lg:py-32 text-white max-w-7xl mx-auto">
            <h1 className="text-center pb-28 text-3xl font-bold uppercase lg:text-5xl text-amber-500"> About Me</h1>
         <div className="lg:flex justify-center">
         <div className=" flex-1 lg:pl-24">
                {/* img  */}
                <img className="w-[370px] lg:w-[400px] shadow-xl shadow-slate-700 rounded-full lg:rounded-sm" src="https://i.ibb.co/ySDvCV9/neaj.jpg" alt="photo of neaj" />
            </div>
            <div className="pt-5 px-4 flex-1">
                {/* text  */}
               <h1 className="text-2xl lg:text-4xl pb-3 font-semibold text-[#9acd32]"> Hello, <br />   <Typewriter
                                options={{
                                    strings: ['I am professional 2D animator❤️'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /> </h1>
                <p className="text-lg font-semibold pb-6 ">If you need any services inbox me.. </p>
                <p className='text-2xl font-semibold'>My skill</p>
               <ol className='font-bold text-xl'>
                <li>1. Characters design</li>
                <li>2. Background design</li>
                <li>3. Animation</li>
                <li>4. Video Editing </li>
                <li>5. Graphics design also❤️</li>
               </ol>

            </div>
         </div>
        </div>
    );
};

export default About;