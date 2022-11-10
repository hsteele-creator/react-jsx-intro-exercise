const Tweet = (props) => (
    <div>
        <ul>
        <li>{props.username}</li>
        <li>{props.name}</li>
        <li>{props.date}</li>
        <li>{props.msg}</li>
        </ul>
    </div>
)