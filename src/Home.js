import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
    let {data:blogs, isPending, error} = useFetch("https://mohamed-f22.github.io/dogo-db/db.json")

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;
