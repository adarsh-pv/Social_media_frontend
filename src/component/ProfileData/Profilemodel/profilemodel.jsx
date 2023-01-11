/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { Button, Modal, useMantineTheme } from '@mantine/core';
// import { useFormik } from 'formik';
import { useState } from 'react';
import { fetchProfileDetails, profiledata} from '../../../Apirequests/authapis';
import './profilemodel.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllusersdata } from '../../../Store/usersSlice';

// const imageRef = useRef();

function ProfileModel({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  const dispatch = useDispatch()

  const [fullname, setfullname] = useState('');
  const [number, setNumber] = useState('');
  const [livesin, setLivesin] = useState('');
  const [works, setWorks] = useState('');
  const [DOB, setDOB] = useState('');
  const [githublink, setGithublink] = useState('');
  const [linkdinlink, setLinkdinlik] = useState('');
  const [status, setStatus] = useState('');
  const [previousname,setPreveousname] = useState('')
  const handleSubmit =  (event) => {
    event.preventDefault();
    profiledata({ fullname, number, livesin, works, DOB, githublink, linkdinlink, status });
    dispatch(setAllusersdata({ fullname, number, livesin, works, DOB, githublink, linkdinlink, status }))
  };
  const fields = async () =>{
    const {data} = await fetchProfileDetails()
    console.log(data,"data")
    if(data)
    { setPreveousname(data)
  
    dispatch(setAllusersdata({ fullname:data.name, number:data.number, livesin:data.Livesin, works:data.workat, DOB:data.dob, githublink:data.githubid, linkdinlink:data.linkdinid, status:data.status }))
    }
  }

  useEffect(() =>{
    fields()
  },[])


  console.log(previousname,"kinking")
  return (  
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.5}
      overlayBlur={2}
      size="50%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}>
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoI"
            name="fullname"
            onChange={(event) => setfullname(event.target.value)}
            defaultValue={previousname.name}
            placeholder="Full name"
            />
          <input
            type="number"
            className="infoI"
            name="number"
            defaultValue={previousname.number}
            onChange={(event) => setNumber(event.target.value)}
            placeholder="ph number"
            />

          <input
            type="text"
            className="infoI"
            name="livesin"
            defaultValue={previousname.Livesin}
            onChange={(event) => setLivesin(event.target.value)}
            placeholder="Lives in"
            />
          <input
            type="text"
            className="infoI"
            name="works"
            onChange={(event) => setWorks(event.target.value)}
            defaultValue={previousname.workat}
            placeholder="works at"
            />
        </div>
        <div>
          <input
            type="text"
            className="infoI"
            onChange={(event) => setDOB(event.target.value)}
            defaultValue={previousname.dob}
            name="DOB"
            placeholder="DOB"
          />
          <input
            type="text"
            className="infoI"
            name="githublink"
            onChange={(event) => setGithublink(event.target.value)}
            defaultValue={previousname.githubid}
            placeholder="github link"
          />
          <input
            type="text"
            className="infoI"
            name="githublink"
            onChange={(event) => setLinkdinlik(event.target.value)}
            defaultValue={previousname.linkedinid}
            placeholder="Linkedin link"
          />
        
          <input
            type="text"
            className="infoI"
            name="status"
            onChange={(event) => setStatus(event.target.value)}
            defaultValue={previousname.status}
            placeholder="life status"
          />
        </div>

        <div>
          <Button type='submit' className="button"  >Applay</Button>
         
        </div>
      </form>
    </Modal>
  );
}
export default ProfileModel;
