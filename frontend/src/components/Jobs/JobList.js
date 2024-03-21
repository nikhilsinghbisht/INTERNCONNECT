import React from "react";
import SearchInput from "../../Component/SearchInput";
import "../../componentsCss/joblist.css";
import Jobpage from "./Jobpage";
import Footerbar from "../Bars/Footerbar";
const JobList = (props) => {
  const removeJobHandler = (id) => {
    props.removeJobHandler(id);
  };

  // const renderJobList = props.jobs.map((job) => {
  //   return (
  //     <JobCard
  //       job={job}
  //       deleteJob={removeJobHandler}
  //       setCurrentJob={props.setCurrentJob}
  //       key={job.id}
  //     />
  //   );
  // });

  return (
    <>
      <div style={{ backgroundColor: "#f9f9ff" }}>
        <section class="banner-area relative" id="home">
          <div class="overlay overlay-bg"></div>
          <div class="container">
            <div class="row search-page-top d-flex align-items-center justify-content-center">
              <div class="banner-content col-lg-12">
                <h1>Job List</h1>
                <h2 class="text">Search Results</h2>
                <div className="search-div">
                  <SearchInput />
                </div>
                <p class="text">
                  49 Results found for <span>"Frontend developer"</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="features-area">
          <div class="">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="single-feature">
                  <h4>Search</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-feature">
                  <h4>Apply</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-feature">
                  <h4>Work</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-feature">
                  <h4>Get Certified</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Jobpage />
        </section>
      </div>
      <Footerbar />
    </>
  );
};

export default JobList;
