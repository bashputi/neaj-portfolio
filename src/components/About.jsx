import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <div id="about" className=" py-12 lg:py-32  text-white w-70vw mx-auto">
            <h1 className="text-center pb-28 text-3xl font-bold uppercase lg:text-5xl text-amber-500"> About Me</h1>
         {/* <div className='flex bg-orange-400 justify-evenly'> */}
         <div className="lg:flex  ">
         <div className="flex justify-center lg:justify-end items-center lg:w-1/2 mx-auto">
                {/* img  */}
               <div>
               <img className="w-[370px] shadow-xl shadow-slate-700 rounded-full " src="https://i.ibb.co/Bgc7Pzh/Whats-App-Image-2024-01-12-at-10-29-52-PM-1.jpg" alt="photo of neaj" />
               </div>
            </div>
            <div className="mt-14 lg:mt-0 pl-4 lg:pl-20  lg:w-1/2 ">
                {/* text  */}
             
              <h1 className="text-2xl lg:text-4xl pb-3 font-semibold text-[#9acd32]"> Hello, <br />   <Typewriter
                                options={{
                                    strings: ['I am professional 2D animator❤️'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /> </h1>
                <p className="text-xl font-semibold pb-6 ">If you need any services contact me.. </p>
                <p className='mb-3 text-lg font-semibold'>Click here...</p>
                {/* contact icon  */}
                <div className="flex gap-5 mb-2">
                 <a href="https://www.instagram.com/md_neaj_morshed">
                 <div>
                     <img className="w-10 hover:w-12" src="https://i.ibb.co/x5dxh93/instagramlogoresized-1-removebg-preview.png" alt="instagram logo" />
                 </div>
                 </a>
                 <a href="https://www.linkedin.com/in/md-neaj-morshed-90b901206">
                 <div className="">
                     <img className="w-8 hover:w-10" src="https://i.ibb.co/4Jjr9My/png-transparent-linkedin-logo-computer-icons-facebook-user-profile-facebook-blue-angle-text-removebg.png" alt="linkedin logo" />
                 </div>
                 </a>
                 <a href="https://www.facebook.com/neaj2022?mibextid=ZbWKwL">
                 <div>
                     <img className="w-16 -ml-2.5 hover:w-20" src="https://i.ibb.co/3Yx5FmR/images-removebg-preview.png" alt="facebook logo" />
                 </div>
                 </a>
            
             </div>

                <p className='text-xl font-semibold'>Or Email me:</p>
                <div>
                    <img className='inline w-8' src="https://i.ibb.co/chLZbqw/Screenshot-2024-01-03-012128-removebg-preview.png" alt="email image" />  <span className='text-lg font-semibold'>neajmost@gmail.com</span>
                    
                </div>
                <p className='text-xl mt-5 font-semibold'>My Youtube Channel</p>
                <div>
                    <a href="https://www.youtube.com/@neajscartoonchannel">
                    <img className='inline w-16 hover:w-20 ml-16' src="https://i.ibb.co/sWFvw90/Screenshot-2024-01-03-020800-removebg-preview.png" alt="youtube image" />
                    </a>
                    
                </div>
                <p className='text-2xl mt-4 font-semibold'>My skill</p>
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