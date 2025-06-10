import { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets"
import { motion } from "motion/react";
import BlogCart from "./BlogCart";

const BlogList = () => {
    console.log("BlogList Rendered");
    
    const [Menu, SetMenu] = useState("All");
    console.log("Selected Menu:", Menu);
    
    return (
        <div>
            <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
                {blogCategories.map((item, key) => (
                    <div key={key} className="relative" >
                        <button onClick={() => SetMenu(item)}
                            className={`cursor-pointer text-gray-500 ${Menu === item && 'text-white px-4 pt-0.5'}`}>
                            {item}
                            {
                                Menu === item && (
                                    <motion.div layoutId='underline' transition={{type: 'spring', stiffness:500, damping:30}} className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"></motion.div>
                                )
                            }
                        </button>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 mb-24 mx-8 sm;mx-16 xl:mx-40">
                {blog_data.filter((blog)=> Menu === "All"? true : blog.category === Menu).map((blog, key) => <BlogCart key={key} blog={blog} />)}
            </div>
        </div>
    )
}

export default BlogList;