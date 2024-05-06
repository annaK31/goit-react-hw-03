
const Contact = ({data: {number, name, id}, onDelete}) =>{
    return(
        <div >
      <p>{name}</p>
      <p>{number}</p>
      <button  type="button" onClick ={() => onDelete(id)}>
        Delete
      </button>
    </div>
    )
}



export default Contact