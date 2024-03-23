import useInputState from "../../Hooks/UseInputState";

const HookForm = () => {

    // const [name, handleNameChange]=useInputState('Humayun Kabir Sobuj')
    const emailState=useInputState('humayun247021@gmail.com')
    // const nameState=useInputState('Humayun Kabir Sobuj')

    const handleSubmit=(e)=>{
        console.log('form data ', emailState.value)
        e.preventDefault();
    }
    
    return (
        <div>

            <form onSubmit={handleSubmit}>

                {/* <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br /> */}
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>

        </div>
    );
};

export default HookForm;