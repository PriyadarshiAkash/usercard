import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";

const Card = ({ count }) => {
  const [userData, setUserData] = useState(null);
  // const [counts, setCounts] = useState(0);
  // setCounts(count);
  
  console.log("count",count);
  useEffect(() => {
    const fetchData = async (count) => {
      try {

        const response = await fetch(
          `https://randomuser.me/api/?page=${count}&results=1&seed=abc`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data.results[0]);
        console.log(userData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(count);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="flex justify-center items-center">
      <div className="border-4 border-slate-600 bg-slate-100 rounded-3xl m-6 grid md:flex">
        <div className="border-4 border-slate-600 rounded-3xl m-6 w-[180px] h-[180px] bg-gray-300">
          {userData && (
            <img
              className="w-full h-full rounded-2xl"
              src={userData.picture.large}
              alt="User"
            />
          )}
        </div>
        <div className="grid m-auto mx-2 pb-2">
          <div className="">
            {userData && ( // Display form fields only when userData is available
              <>
                <div className="grid gap-2 items-center pr-4 md:flex">
                  <div className="">
                    <TextField
                      required
                      id="outlined-required"
                      label="FirstName"
                      value={userData.name.first}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="LastName"
                      value={userData.name.last}
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={userData.gender}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="pr-4 ">
                  <TextField
                    id="outlined-password-input"
                    label="Mobile Number"
                    type=""
                    autoComplete=""
                    value={userData.cell}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
