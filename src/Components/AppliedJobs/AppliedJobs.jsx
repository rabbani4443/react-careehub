import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../../Utility/localStorge";

const AppliedJobs = () => {

    const jobs = useLoaderData();
    // console.log(jobs)
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs]= useState([])

    const handelJobsFilter= filter =>{
        if(filter === 'all'){
            return setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            return setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            return setDisplayJobs(onsiteJobs);
        }

    }

    useEffect(()=>{
        const storeJobsIds = getStoreJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storeJobsIds.includes(job.id))
            // console.log(jobsApplied)

            const jobsApplied =[];
            for(const id of storeJobsIds ){
                const job = jobs.find(job=> job.id === id)
                if (job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
            // console.log(appliedJobs)
            console.log(jobs,storeJobsIds, jobsApplied)
        }
    },[]);
    return (
        <div>
            <div>
            <h1 className="text-4xl font-bold"> Applied Jobs {appliedJobs.length} </h1>
            {
                displayJobs.map(job=> <li key={job.id}> {job.job_title} : {job.remote_or_onsite} </li>)
            }

            </div>
                <details className="dropdown mb-32 ">
                <summary className="m-1 btn ">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={()=>handelJobsFilter('all')} ><a>All</a></li>
                <li onClick={()=>handelJobsFilter('remote')} ><a>Remote</a></li>
                <li onClick={()=>handelJobsFilter('onsite')} ><a>Onsite</a></li>
                </ul>
                </details>
        </div>
    );
};

export default AppliedJobs;