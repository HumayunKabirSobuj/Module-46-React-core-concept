

const ReusableFrom = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
    }


    return (
        <div>

            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>

                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>


        </div>
    );
};

export default ReusableFrom;