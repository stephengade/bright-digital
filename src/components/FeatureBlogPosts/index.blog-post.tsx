import { FeatureBlog } from "./blog-card"
import { BlogData } from "./data.blog"
import { MainFeaturedBlogPost } from "./main-featured-blog-post"

export const HomeFeaturedBlogIndex = ()  => {
    const featuredBlogPost =  BlogData[0]
    return (
        <section className="pt-12 lg:pt-[250px] grid grid-cols-1 lg:grid-cols-2">
            <div className="radial_bg">
                <MainFeaturedBlogPost {...featuredBlogPost} />
            </div>
            <div className="flex flex-col gap-[35px] lg:gap-[75px] radial_bg">
              {BlogData.slice(1,).map((data) => {
                return <FeatureBlog key={data.title.split("").join()} {...data}  />
              })}
            </div>

        </section>
    )
}