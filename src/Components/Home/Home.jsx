import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    return (
        <div className="w-5/6 mx-auto">
          <h1 className='text-5xl font-extrabold text-center'>Home</h1>
          <Banner></Banner>
          <JobCategory></JobCategory>
          <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;