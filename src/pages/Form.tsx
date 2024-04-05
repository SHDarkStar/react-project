// فرم برای گرفتن اطلاعات از کاربر به همراه یک نوشته متنی, شاکل اسم, فامیل, ایمیل, یادداشت
// طراحی یک رویداد که کاربر پس از زدن دکمه تایید, یک پیام به عنوان ذخیره شدن اطلاعات دریافت کند.
import "./styles.css";
const Form = () => {
    const submitHandle = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        alert("Your notes are saved and will be answered soon.");
    };

    return (
        <form className="labels" onSubmit={submitHandle}>
            <label >
                First Name:
                <br />
                <input type="text"/>
            </label>
            <br />
            <label>
                Last Name:
                <br />
                <input type="text"/>
            </label>
            <br />
            <label>
                Email:
                <br />
                <input type="email"/>
            </label>
            <br />
            <label>
                Note:
                <br />
                <textarea style={{ width: "500px", height: "100px" }}/>
            </label>
            <br />
            <button className="submitButton" type="submit">Submit</button>
        </form>
    );
};

export default Form;
