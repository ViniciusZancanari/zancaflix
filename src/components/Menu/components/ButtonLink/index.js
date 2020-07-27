import React, { Children } from 'react';

function ButtonLink(props){
    //props => {classeName: 'algo passa aqui', href:'/'}
    return(
        <a href={props.href} className={props.className} >
            {props.children}
        </a>
    );
}
export default ButtonLink;

