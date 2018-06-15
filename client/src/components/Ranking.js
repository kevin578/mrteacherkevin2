import React from 'react'
import oneStar from '../img/badges/oneStar.svg'
import twoStar from '../img/badges/twoStar.svg'
import threeStar from '../img/badges/threeStar.svg'

export default (props) => {


        function checkArray(item) {
            return props.rank.includes(item)? true: false
        }

        const getImage = ()=> { 

            //Mindstorms
            if (checkArray('three_star')) return threeStar;
            if (checkArray('two_star')) return twoStar;
            if (checkArray('one_star')) return oneStar; 
            return            
                        
          }
  return (
     <img src = {getImage()}/>
  )
}
 