import React from 'react';


const ImageList = (props)=> {
    console.log(props);
    const images = props.images.map(({description, id, urls}) => {
        return <img width="200" alt={description} key={id} src={urls.regular} />
    })
   return (
       <div>
          <div>{images}</div>
       </div>
   );
}

export default ImageList