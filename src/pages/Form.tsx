const Form = () => {

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        alert("Your notes are saved and will be answered soon.");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" name="firstName"/>
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="lastName"/>
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email"/>
            </label>
            <br />
            <label>
                Note:
                <textarea
                    style={{ width: "500px", height: "100px" }}
                    name="description"
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
