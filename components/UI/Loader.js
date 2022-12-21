import React from 'react'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className='loader_wrapper'>
        <div className='loader_inner_wrapper'>
            <Image src="/images/gif_loader_image.gif" width={64} height={64} alt="Loader"/>
        </div>
    </div>
    
  )
}

export default Loader