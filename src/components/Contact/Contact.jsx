import { FaUser } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import css from './Contact.module.css'
const Contact = ({data: {number, name, id}, onDelete}) =>{
    return(
        <div className={css.box} >
      <p className={css.contact}> <FaUser />  {name}</p>
      <p  className={css.contact}> <FaPhoneAlt /> {number}</p>
      <button className={css.btn} type="button" onClick ={() => onDelete(id)}>
        Delete
      </button>
    </div>
    )
}

export default Contact