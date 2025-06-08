
const BlogCard = ({ blog }) => {

    const { title, description, category, image, _id } = blog;

    return (
        <div onClick={() => Navigate(`/blog/${_id}`)}>
            <img src={image} alt="" className='aspect-video' />
            <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primay/20 rounded-full text-x5 text-[#6f1396]'>{category}</span>
            <div className='p-5'>
                <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
                <p
                    className='mb-3 text-xs text-gray-600'
                    dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
                ></p>
            </div>
        </div>
    )
}

export default BlogCard