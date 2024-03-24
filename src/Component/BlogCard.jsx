import { Link } from "react-router-dom";


const BlogCard = ({blog}) => {
    return (
        <div>
            <Link to={'/'} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={blog.cover_image} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">{blog.title}</h3>
					<span className="text-xs text-black">{new Date (blog.readable_publish_date).toDateString()}</span>
					<p className="text-black">{blog.description}</p>
				</div>
			</Link>
        </div>
    );
};

export default BlogCard;