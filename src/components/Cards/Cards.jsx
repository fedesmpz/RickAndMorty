import Card from '../Card/Card';
import './cards.css'

export default function Cards({ characters, onClose }) {
  
   return( 
   <div className='cards'>
      {characters.map(({id, name, status, species, gender, origin, image})=>{
        return(
         <div>
            <Card 
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />
        </div>
        ) 
      })}

   </div>   
   )
}
