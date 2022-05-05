import {useRouter} from 'next/router';
function DynamicContentPage() {
    const router= useRouter();
    console.log(router.query);
    return (
        <div>
            <h1> Dynamic Content Blog Page with name</h1>
        </div>
    );
}
export default DynamicContentPage;