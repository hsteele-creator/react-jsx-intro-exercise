const Person = ({name, age, hobbies}) => {
   return <div>
    <p>Learn some information about this person.</p>
    <p>{age > 18 ? "please go vote!" : "you must be 18"}</p>
    <p>{name.length > 8 ? name.slice(0, 7) : name}</p>

    <ul>
    {hobbies.map(hobby => <li>{hobby}</li>)}
    </ul>

    </div>
}