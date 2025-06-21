import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  const baseClasses =
    'flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer rounded-r-lg transition-all duration-200'

  const getLinkClasses = (isActive) =>
    `${baseClasses} ${
      isActive
        ? ' bg-indigo-100 border-r-4 border-indigo-400 text-primary font-semibold'
        : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
    }`

  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>
      {/* Dashboard */}
      <NavLink end to="/admin" className={({ isActive }) => getLinkClasses(isActive)}>
        <img src={assets.home_icon} alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Dashboard</p>
      </NavLink>

      {/*Add Blog */}
      <NavLink to="/admin/addBlog" className={({ isActive }) => getLinkClasses(isActive)}>
        <img src={assets.add_icon} alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Add Blogs</p>
      </NavLink>

      {/* Blog Lists */}
      <NavLink to="/admin/listBlog" className={({ isActive }) => getLinkClasses(isActive)}>
        <img src={assets.list_icon} alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Blog Lists</p>
      </NavLink>

      {/* Comments */}
      <NavLink to="/admin/comments" className={({ isActive }) => getLinkClasses(isActive)}>
        <img src={assets.comment_icon} alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Comments</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
