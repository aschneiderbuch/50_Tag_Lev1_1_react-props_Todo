import { dataObj2 } from "../datenSpeicherObj/DatenSpeicherObj.jsx";
import { dataArrayObj2 } from "../datenSpeicherObj/DatenSpeicherObj.jsx";
import HtmlSchablone from "../htmlSchablone/HtmlSchablone.jsx";
console.log(dataObj2);
console.log(dataArrayObj2);



// !!! das ist der wichtige Teil  Array
// import der HTML Schablone
const html_befüllt = dataArrayObj2.map( (obj) => {
   return <HtmlSchablone überschrift={obj.überschrift} id={obj.id} text={obj.text} uuid={obj.uuid}></HtmlSchablone>
})

console.log(html_befüllt);


// 


const DatenVerarbeitungMap = () => {
    return ( 

        <>
        {html_befüllt} 
        
        </>

     );
}
 
export default DatenVerarbeitungMap;