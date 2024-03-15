import * as React from 'react';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';


import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function BasicFormControl() {
  const [emailvalue, setemailvalue] = useState('')
  const [passvalue, setpasslvalue] = useState('')
  const [valueinobj, setobj] = useState([])
  function clicked() {
    if (emailvalue === "" || passvalue === "") {
        alert("fill the required field");
    } else {
        const userobj = {
            Email: emailvalue,
            password: passvalue
        };
        console.log(userobj); // Logging the user object
        createUserWithEmailAndPassword(auth, userobj.Email, userobj.password)
            .then((userCredential) => {
                // Signed up
                console.log(userCredential.user);
                console.log("user is successfully signed up");
                alert("user is successfully signed up")
            })
            .catch((error) => {
                console.error(error); // Logging the error
                console.log("user failed to sign up");
            });
    }
}

  function Emailvalue(e) {
    setemailvalue(e.target.value)
  }

  function Passlvalue(e) {
    //  console.log(e.target.value)
    setpasslvalue(e.target.value)
  }




  return (
    <>
      <FormControl style={{ margin: 40, }} defaultValue="" required>
        <Label   >Username</Label>
        <StyledInput  placeholder="Write your name here" type="email" />

        <HelperText />
      </FormControl>
      <FormControl style={{ margin: 40, }} defaultValue="" required>
        <Label   >email</Label>
        <StyledInput onChange={Emailvalue} placeholder="Write your email here" type="email" />

        <HelperText />
      </FormControl>
      <FormControl style={{ margin: 40, }} defaultValue="" required>
        <Label   >password</Label>
        <StyledInput onChange={Passlvalue} placeholder="Write your passwrod here" type='password' />


        <HelperText />

        <button onClick={clicked} type='submit' style={{ width: "300px", marginTop: 30, height: "30px" }} >
          SGINUP
        </button>
        <Link  to={"/LOGIN"}>
        <div   >
          login page
        </div>
        </Link>

      </FormControl>
    </>
  );
}



const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
   
    padding: 10px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  }
`,
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 10px;
  padding: 0px 12px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
 
`;

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};