
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from '../../Utility/localStorge';

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    console.log(jobs, id)

    const job = jobs.find(job => job.id == idInt);
    console.log(job)


    const handelApplyJob = () =>{
        saveJobApplication(id)

     toast.success("Apply Success !");
}


    return (
        <div>
            <h1 className="text-5xl">Job Details</h1>
            <p className="text-xl font-bold text-center py-5">
                {job.job_description}
            </p>
            <div className='py-7 text-center'>
                 <button onClick={handelApplyJob} className='bg-gradient-to-r from-sky-500 to-indigo-500 py-2 px-6 rounded-lg text-white'>Apply Job</button>
            </div>
            <ToastContainer />
        </div>
    );
};

JobDetails.propTypes = {
    
};

export default JobDetails;