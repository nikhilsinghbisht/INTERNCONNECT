import React, { useEffect, useState } from "react";

import {
  Box,
  Card,
  Container,
  ListItemIcon,
  MenuItem,
  MenuList,
  Pagination,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../../redux/actions/jobAction";
import { Link, useParams } from "react-router-dom";
import CardElement from "../../Component/CardElement";

import LoadingBox from "../../Component/LoadingBox";
import SelectComponent from "../../Component/SelectComponent";
import { jobTypeLoadAction } from "../../redux/actions/jobTypeAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../componentsCss/jobpage.css";
const Jobpage = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  );

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState("");

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);

  useEffect(() => {
    dispatch(jobTypeLoadAction());
    console.log(jobs);
  }, []);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };

  return (
    <>
      <div className="box-container">
        <Container>
          <div className="stack-container">
            <div className="right-section">
              <div className="job-listings">
                <div className="load-box">
                  {loading ? (
                    <LoadingBox />
                  ) : jobs && jobs.length === 0 ? (
                    <div className="no-result">
                      <h2>No result found!</h2>
                    </div>
                  ) : (
                    jobs &&
                    jobs.map((job, i) => (
                      <CardElement
                        key={i}
                        id={job.job_id}
                        jobTitle={job.role_name}
                        description={job.description}
                        category={job.job_type ? job.job_type : "No category"}
                        location={job.location}
                      />
                    ))
                  )}
                </div>
                <div className="pagination-container">
                  <Pagination
                    color="primary"
                    variant="outlined"
                    page={page}
                    count={pages === 0 ? 1 : pages}
                    onChange={(event, value) => setPage(value)}
                  />
                </div>
              </div>
            </div>
            <div className="left-section">
              <div className="filter-card">
                <div className="filter-heading">
                  <Typography
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                  >
                    Filter jobs by category
                  </Typography>
                </div>
                <SelectComponent
                  handleChangeCategory={handleChangeCategory}
                  cat={cat}
                />
              </div>
              <Card className="location-card">
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component="h4"
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                  >
                    Filter jobs by location
                  </Typography>
                  <MenuList>
                    {setUniqueLocation &&
                      setUniqueLocation.map((location, i) => (
                        <MenuItem key={i}>
                          <ListItemIcon>
                            <LocationOnIcon
                              sx={{
                                color: palette.secondary.main,
                                fontSize: 18,
                              }}
                            />
                          </ListItemIcon>
                          <Link
                            style={{ color: palette.secondary.main }}
                            to={`/search/location/${location}`}
                          >
                            {location}
                          </Link>
                        </MenuItem>
                      ))}
                  </MenuList>
                </Box>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Jobpage;
