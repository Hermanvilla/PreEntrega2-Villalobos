function Book(props) {
    return (
        <>
            <img src={props.imagen} alt={props.name} />
            <p>{props.categoria}</p>
        </>
    )
}
export default Book