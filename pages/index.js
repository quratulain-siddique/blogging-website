import { Fragment } from "react";
import Hero from "@/components/hero";
import FeaturedPosts from "@/components/featuredPosts";


function HomePage()
{
    
    return (
        <Fragment>
            <title>{`QURAT' Blog`}</title>
            <Hero/>
            <FeaturedPosts />
        </Fragment>
    );
}
export default HomePage;