import React from 'react';



const Features = props => {

return(<article className="feature">
      <figure>
      <img src={props.img}></img>
      </figure>
      <h4>{props.title}</h4>
      <p>
      {props.description}
      </p>
    </article>)

}

export default Features