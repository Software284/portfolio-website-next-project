import {useRouter} from 'next/router';
function SelectedAboutProject() {
    const router = useRouter();
    console.log(router.query);
    return(
        <div>
            <h1>Selected About Project</h1>
        </div>
    );
}
export default SelectedAboutProject;