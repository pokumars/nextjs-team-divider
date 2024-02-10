import KidSection, { Kid } from '@/Sections/KidSection';
import { generateKidSchema } from '@/utils/schemas';
import { useState } from 'react';
import { ValidationError } from 'yup';

const defaultKidErrors = { age: true, ageErrMsg: ' ', name: true, nameErrMsg: ' ' };


export default function Home() {
  const [kidValues, setKidValues] = useState<Kid>({ name: '', age: 3 });
  const [kidErrors, setKidErrors] = useState<typeof defaultKidErrors>(defaultKidErrors);
  

  const handleKidValueChange= async (fieldName: string, value: number | string ) => {
    const kidSchema = generateKidSchema();
    const newKidValues= { ...kidValues, [fieldName]: value };
    setKidValues(newKidValues);    

    kidSchema.validate(newKidValues, { abortEarly: false }).then((res) => {
      // No validation errors, clear the errors and set isValid to true
      console.log('res of validate then', res);
      setKidErrors({ ...defaultKidErrors });
    }).catch((err: ValidationError) => {
      // https://github.com/jquense/yup?tab=readme-ov-file#validationerrorerrors-string--arraystring-value-any-path-string
      const errorMessages = err.inner.reduce((acc, curVal) => {
        const tempErrMsg = { [`${curVal.path}`]: false, [`${curVal.path}ErrMsg`]: curVal.message };

        return { ...acc, ...tempErrMsg  };
      }, {});
        // resets all values to as if the validation passed and then adds the current errors
      setKidErrors({ ...defaultKidErrors, ...errorMessages });
    });
  };

  return (
    <div className='p-5'>
      <KidSection
        kidValues={kidValues}
        onChangeKidValues={handleKidValueChange}
        kidErrors={kidErrors}/>

    </div>
  );
};