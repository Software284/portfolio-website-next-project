import { useRouter } from 'next/router';
function BlogWithDate(props){
    const router = useRouter();
    console.log(router.query);
    return(
        <h1>hello</h1>
    );
}
export default BlogWithDate;