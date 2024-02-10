import CustomTextField from '@/components/CustomTextField';
import React, { useState } from 'react';
export type Kid = { age?: number, name: string }
export type KidErrors = {
  age: boolean;
  ageErrMsg: string;
  name: boolean;
  nameErrMsg: string; 
}

interface KidSectionProps {
  kidValues: Kid
  kidErrors: KidErrors
  onChangeKidValues: (fieldName: string, value: any) => void
 }

export default function KidSection(props: KidSectionProps) {
  const { kidValues, onChangeKidValues, kidErrors } = props;

  return (
    <div>
      <h2>Tell us about your kid?</h2>
      <p> How old are they and what is their name</p>
      
      <div>
        
        <div className="sm:w-full md:w-1/4">
          <CustomTextField 
            autoFocus
            margin="dense"
            id="name"
            name='name'
            label="Name"
            type="text"
            required
            fullWidth
            isValid={kidErrors.name}
            errorMessage={kidErrors.nameErrMsg}
            value={kidValues.name}
            customOnChange={onChangeKidValues}  
          />
        </div>
        <div className="sm:w-full md:w-1/4" >
          <CustomTextField
            autoFocus
            margin="dense"
            id="age"
            name='age'
            label="Age"
            type="number"
            required
            fullWidth
            isValid={kidErrors.age}
            errorMessage={kidErrors.ageErrMsg}
            value={kidValues.age}
            customOnChange={onChangeKidValues}          
          />
        </div>

      </div>
    </div>

  );
}




// export const generateKidSchema = (maxAge: number= 5): ObjectSchema<Kid> => {
//   return object({
//     name: string().required().min(3, 'must be at least 3 characters long'),
//     age: number().required().positive().integer().min(1).max(maxAge),
//   });
// };





// import KidSection, { Kid } from '@/Sections/KidSection';
// import { generateKidSchema } from '@/utils/schemas';
// import { Button } from '@mui/material';
// import { useState } from 'react';
// import { ValidationError } from 'yup';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';


// const defaultKidErrors = { age: true, ageErrMsg: ' ', name: true, nameErrMsg: ' ' };


// export default function Home() {
//   const [kidValues, setKidValues] = useState<Kid>({ name: '', age: 3 });
//   const [kidErrors, setKidErrors] = useState<typeof defaultKidErrors>(defaultKidErrors);

//   const handleKidValueChange= async (fieldName: string, value: number | string ) => {
//     // keyof typeof gameConfigValues is equivalent to Kid. i.e keyof typeof an OBJECT is equivalent to keyof the TYPE
//     const kidSchema = generateKidSchema();
//     const newKidValues= { ...kidValues, [fieldName]: value };
//     setKidValues(newKidValues);    

//     kidSchema.validate(newKidValues, { abortEarly: false }).then((res) => {
//       // No validation errors, clear the errors and set isValid to true
//       console.log('res of validate then', res);
//       setKidErrors({ ...defaultKidErrors });
//     }).catch((err: ValidationError) => {
//       // https://github.com/jquense/yup?tab=readme-ov-file#validationerrorerrors-string--arraystring-value-any-path-string
//       const errorMessages = err.inner.reduce((acc, curVal) => {
//         const tempErrMsg = { [`${curVal.path}`]: false, [`${curVal.path}ErrMsg`]: curVal.message };

//         return { ...acc, ...tempErrMsg  };
//       }, {});
//         // resets all values to as if the validation passed and then adds the current errors
//       setKidErrors({ ...defaultKidErrors, ...errorMessages });
//     });


//   };

//   const doSomething = () => {

//   };

//   return (
//     <div className='p-5'>
//       <KidSection
//         kidValues={kidValues}
//         onChangeKidValues={handleKidValueChange}
//         kidErrors={kidErrors}/>

//     </div>
//   );
// };


// Another way of doing the validation instead of using the .then(). catch() is the try-catch. When the 
// validated value is not up to standard, it throws an error so then you handle that error scenario in
// the catch branch. If it is valid, then you can handle the valid case straight away in the try branch.
/* try {
      const validationResult = await kidSchema.validate(newKidValues, { abortEarly: false });
      console.log('validationResult in try catch ',validationResult);
      // No validation errors, clear the errors and set isValid to true
      setKidErrors({ ...defaultKidErrors });
      
    } catch (err: any) {
      // https://github.com/jquense/yup?tab=readme-ov-file#validationerrorerrors-string--arraystring-value-any-path-string
      const errorMessages = err.inner.reduce((acc: any, curVal: { path: any; message: any; }) => {
        const tempErrMsg = { [`${curVal.path}`]: false, [`${curVal.path}ErrMsg`]: curVal.message };

        return { ...acc, ...tempErrMsg  };
      }, {});
        // resets all values to as if the validation passed and then adds the current errors
      setKidErrors({ ...defaultKidErrors, ...errorMessages });
    } */



/* .then((res) => {
      // No validation errors, clear the errors and set isValid to true
      console.log('res of validate then', res);
      setKidErrors({ ...defaultKidErrors });
    }) */