import {Hobbydata} from './Data/hobbydata'
import HobbyCard from "./components/HobbyCard";
function Hobbies(){
   return (
       <div id = 'Hobbies'>
           <h1 className="Tittle">My Hobbies</h1>
           { Hobbydata.map((val,key) => {
               return (
                   <HobbyCard
                       title = {val.title}
                       description = {val.description}
                       image = {val.image}
                       />

               );
           })}
       </div>
   )
}

export default Hobbies;