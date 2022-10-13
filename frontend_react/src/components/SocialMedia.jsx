import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          
          <a href="https://github.com/hnascx" target="_blank" rel="noreferrer"><BsGithub/></a>       
        </div>    
        <div>
          <a href="https://instagram.com/hnascx" target="_blank" rel="noreferrer"><BsInstagram/></a>
        </div>    
        <div>
          <a href="https://api.whatsapp.com/send?phone=5511948275951&text=Fala%20Henrique%2C%20tudo%20bem%3F%20Vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!" target="_blank" rel="noreferrer"><FaWhatsapp/></a>
        </div>    
    </div>
  )
}

export default SocialMedia