import TextInput from '../TextInput.js';


function NewUserForm (props) {


  return (

    <TextInput
      type="text"
      name="personName"
      placeholder=" add your name here "
      onChange={inputChange} 
      value={formValues.personName}
      label={"Name"}
    />
  )
}

export default NewUserForm;