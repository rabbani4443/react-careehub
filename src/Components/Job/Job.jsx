
import PropTypes from 'prop-types';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id,logo,company_name,job_title,job_type,remote_or_onsite,location,salary} = job
    // console.log(job)
return (
    <>
    <div>
        <div className='border-2 p-6 rounded-lg text-left'>
            <div><img src={logo} alt="" /></div>
            <h1 className='text-2xl font-extrabold'> {job_title} </h1>
            <p>{company_name} </p>
            <div className='flex items-center gap-20 remote_or_onsite py-5'>
                <p className='border-2 rounded-lg py-2 px-6'>{remote_or_onsite} </p>
                <p className='border-2 rounded-lg py-2 px-6'>{job_type} </p>
            </div>
            <div className='flex items-center gap-4'>
                <p className='flex items-center'>  
                <span className='pr-2'> <GrLocation ></GrLocation>  </span>
                 {location} </p>
                <p className='flex items-center'> 
                <span className='pr-2'> <AiOutlineDollarCircle ></AiOutlineDollarCircle>  </span>
                {salary} </p>
            </div>
            <div className='pt-7'>
                <Link to={`/job/${id}`}>       
                 <button className='bg-gradient-to-r from-sky-500 to-indigo-500 py-2 px-6 rounded-lg text-white'>View Details</button>
                </Link>
            </div>
            <div>

            </div>
        </div>
    </div>
    </>
);
};

Job.propTypes = {
    job:PropTypes.object
};

export default Job;