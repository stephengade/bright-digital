import Image from 'next/image'
import { IBlog } from './blog-card'

export const MainFeaturedBlogPost = (props: IBlog) => {
    const {author, category, publishDate, readTime, title} = props
    return (
        <div className="">
            <div className="flex flex-row items-center gap-3">
                <Image src="/author-image.svg"  width={100} height={100} alt={title} className="h-[50px] w-[50px]" />

                <div className="">
                    <p className="text-[#F3F3F4]">{author?.name}</p>
                    <p className="text-sm font-poppins text-[#787878] mt-2">{publishDate}</p>
                </div>
            </div>

         
         <h3 className="text-[#F3F3F4] mt-6 font-[500] font-manrope text-[28px] md:text-[38px] flex items-start">{title}</h3>

         <div className="mt-12 mb-6">
          <p className="text-sm font-poppins text-[#787878] flex flex-row items-center gap-5">
            <span className="text-bprimary">{category}</span> |{" "}
            <span className="">{readTime} minute read</span>{" "}
          </p>
        </div>

        <Image src="/main-featured-blog-cover.svg" width={300} height={300} className='w-full h-[340px] md:max-w-[540px]'  alt={title} />


        </div>
    )
}