import React from 'react'
import { blogCategories } from '../assets/assets'

const BlogList = () => {
  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
            {blogCategories.map((item)=>(
                <div key={item} className='relative'>
                    <button>
                        {item}
                    </button>
                </div>
            ))}
        </div>
        {/* -------blog cards------------ */}
        <div></div>

    </div>
  )
}

export default BlogList