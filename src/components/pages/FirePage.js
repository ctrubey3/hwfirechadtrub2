import React from "react";
import fire from "../../Fire";
import Container from "./Container";



function FirePage() {
    const [people, setPeople] = React.useState([]);
    const [submit, setSubmit] = React.useState(true)
    const [form, setForm] = React.useState({
        name: "",
        number: "",
        errors: {
            name: "",
        }

    })
    const db = fire.firestore();


    React.useEffect(() => {
        let newItems = [];
        db.collection("people").get().then(function (snapshot) {
            snapshot.forEach(function (doc) {
                const obj = doc.data();

                let item = {
                    id: doc.id,
                    name: obj.name,
                    number: obj.number
                };

                console.log(obj);
                newItems.push(item);
            });


            setPeople(newItems)
        });
        console.log()


    }, [db, submit]);


    const handleChange = event => e => {
        setForm({
            ...form,
            [event]: e.target.value
        })

    };


    const handleSubmit = () => {
        db.collection("people").add(form).then(() => {

            setForm({
                values: {
                    name: "",
                    number: "",
                },
                errors: {
                    name: "",
                }

            });

            setSubmit(!submit)
        });
    }


    const handleDelete = (id) => {
        db.collection("people").doc(id).delete().then(() => {
            setSubmit(!submit);
        })
    }
    const PeopleEles = people.map((ppl, idx) =>
        <div>
            <h1>{ppl.name}</h1>
            <h3>{ppl.number}</h3>
            <button>
                <div key={idx} onClick={() => handleDelete(ppl.id)}>Delete</div>
            </button>
        </div>
    );


    return (
        <div>

            <h1>Fire Page</h1>
            {PeopleEles}

            <input type="text"
                   name="name"
                   id="name"
                   placeholder="Name..."
                   onChange={handleChange("name")}/>


            <input type="text" placeholder={"Number..."} onChange={handleChange("number")}/>
            <button onClick={handleSubmit}>Submit</button>
            <Container/>
        </div>

    )

}

export default FirePage;