import { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_awd9xjl', 'template_xphmr05', form.current, 'MHciCW_bock6EmeiI')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Email Send Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact" className=" py-12 lg:py-32 text-white max-w-7xl mx-auto">
              <h1 className="text-center pb-28 text-3xl font-bold uppercase lg:text-5xl text-amber-500">Contact With me</h1>

              <div className='shadow-2xl p-10 border-2 rounded-2xl border-[#E21B70] relative py-12 mx-auto container'>
                <div className='grid md:grid-cols-12 justify-center items-center '>
                    <div className='md:col-span-6'>
                        <img className='w-3/4' src="https://i.ibb.co/McqLNL3/gif.gif" alt="gif" />
                    </div>
                    <div className='md:col-span-6 md:px-0 px-6'>
                        <form className="mx-auto " ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#ABB2BF]">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    className="block w-full px-4 py-2 border text-[#282C33] border-gray-300 focus:outline-none focus:ring-[#E21B70] focus:border-[#E21B70] sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block  mb-2 text-sm font-medium text-[#ABB2BF]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    className="block w-full px-4 py-2 border text-[#282C33] border-gray-300  focus:outline-none focus:[#E21B70] focus:border-[#E21B70] sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#ABB2BF]">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full px-4 py-2 text-[#282C33] border border-gray-300 focus:outline-none focus:ring-[#E21B70] focus:border-[#E21B70]  sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className='bg-none border border-[#E21B70] px-3 py-2 mr-6 hover:border-b-4 duration-200'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;