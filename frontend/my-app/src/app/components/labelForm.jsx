export default function LabelForm(props){

    return(
        <div className={props.classe}>
            <label htmlFor={props.name}>{props.title}</label>
            <input type={props.type} id={props.name} name={props.name} placeholder={props.placeholder}></input>
        </div>
    );
}