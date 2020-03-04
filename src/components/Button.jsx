import React from 'react'
import './Button.css'


/* 

    Exibicao condicional de classe 
    eu aplico a classe OU NAO dentro no botão
    de acordo com as PROPRIEDADES que eu recebi

*/
export default props => {

    let classes = 'button '
    classes += props.operation ? 'double' : ''
    classes += props.double ? 'operation' : ''
    classes += props.triple ? 'operation' : ''

return (

    <button 
        onClick={e => props.click(e.target.innerHTML)}
        className={classes}>
        {props.label}
    </button>

    )


}



// export default props => {


//     let classes = 'button';
//     classes += props.operation ? 'operation': 
        
//         props.double ? 'double': 
//         props.triple ? 'triple': ''


//     return(

//     <button
//         onClick={e => props.click && props.click(props.label)}
//         className={classes}> 
//         {props.label}
//     </button>

//     )
// }