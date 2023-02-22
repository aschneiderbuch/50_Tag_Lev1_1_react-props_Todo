import "./HtmlSchablone.scss"


const HtmlSchablone = (props) => {
    return ( 

        <section>
            <h2>{props.überschrift}</h2>
            <article>
            <p>{props.id}</p> <p>{props.text}</p>
            </article>
            <p>{props.uuid}</p>
        </section>

     );
}
 
export default HtmlSchablone;