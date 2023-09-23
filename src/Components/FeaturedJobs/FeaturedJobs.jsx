import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(rsc => rsc.json())
        .then(data => setJobs(data));

    },[])

    return (
        <div>
            <div className="text-center py-6">
                <h1 className="text-5xl font-extrabold">Featured Jobs : {jobs.length} </h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid md:grid-cols-2 gap-2 ">
                    {
                        jobs.slice(0,dataLength) .map(job => <Job key={job.id} job={job} ></Job> )
                    }
                </div>
                {/* <div className={`pt-7 ${dataLength===jobs.length && 'hidden'}`}> */}
                <div className={`pt-7 ${dataLength===jobs.length ? 'hidden' : ''}`}>
                <button onClick={()=>setDataLength(jobs.length)}
                className='bg-gradient-to-r from-sky-500 to-indigo-500 py-2 px-6 rounded-lg text-white'> Show All  </button>
            </div>

                <div className={`pt-7 ${dataLength===jobs.length ? '' : 'hidden'}`}>
                <button onClick={()=>setDataLength(4)}
                className='bg-gradient-to-r from-sky-500 to-indigo-500 py-2 px-6 rounded-lg text-white'> Hidden Data  </button>
            </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;