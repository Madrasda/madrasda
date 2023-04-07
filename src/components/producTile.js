import React from 'react';
const productTile=({pageData}) =>{
    return(
    <ul className='list-group mb-4'>    
    {pageData.map(page=>(
        <li key={page.id} className='list-group-item'>
            {page.title}
        </li>
    ))}
    </ul> 
);
};
export default productTile;