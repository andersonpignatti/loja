import { useState } from "react";




function decide() {





    const [products,setProdutcts] = useState('');
    

    fetch('https://fakestoreapi.com/products/4')
            .then(res=>res.json())
            .then(data => {
              setProdutcts(data);
            })          
            return [products,setProdutcts];
        }

export default decide