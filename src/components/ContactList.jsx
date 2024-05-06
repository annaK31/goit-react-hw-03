import Contact from './Contact'


const ContactList = ({contacts, onDelete}) =>{
return(
    <ul>
       {contacts.map((item) =>
         <li  key={item.id}>
                 <Contact data={item} onDelete={onDelete}/>
         </li>
    )
       }
    </ul>
)
}




export default ContactList