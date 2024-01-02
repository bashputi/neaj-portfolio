import { useEffect, useState } from "react";


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data); 
                setProjects(data);
            })
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div id="projects" className=" py-12 lg:py-32 text-white sm:max-w-[370px] lg:max-w-7xl mx-auto">
              <h1 className="text-center pb-28 text-3xl font-bold uppercase lg:text-5xl text-amber-500">My Work</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    projects.map(item => <div key={item?.id} className="card lg:flex lg:card-side w-[370px] lg:w-[620px] bg-slate-200 shadow-xl">
                   <div className="lg:pt-3"> <figure><img className="lg:min-w-[310px] lg:h-[300px]" src={item?.img} alt="Movie"/></figure></div>
                    <div className="card-body ">
                      <h2 className="card-title text-black">{item?.title}</h2>
                      <p className="text-black">{item?.description}</p>
                      <div className="card-actions justify-end">
                        <a href={item?.link}><button className="btn btn-primary">Watch Now</button></a>
                      </div>
                    </div>
                  </div>)
                }
              </div>
        </div>
    );
};

export default Projects;