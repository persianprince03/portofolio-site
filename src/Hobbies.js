import {Hobbydata} from './Data/hobbydata'
import HobbyCard from "./components/HobbyCard";
function Hobbies(){
   return (
       <div>
           <h2>My Hobbies</h2>
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