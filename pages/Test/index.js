import Link from "next/link";
import { useRouter } from "next/router";

function MyTest(){
    const router = useRouter();
    console.log(router.query);

    const clients=[
        {id:"max", name:"Maximilian"},
        {id: "manu",name:"Manuel"}
    ];

    function loadProjectHandler(){
        // router.push('/clients/max/projecta');
        router.push({
            pathname: '/Test/[id]/[clientprojectId]',
            query: { id: 'max', clientprojectId: 'projecta'},
        })
        // router.replace("/clients/max/projecta");
    }
    return(
        <div>
            <h1> My Test Page </h1>
            <ul>
                {clients.map((client) => (
                    // <li key={client.id}><Link href={`/clients/{client.id}`}>{client.name}</Link></li>
                    <li key={client.id}><Link href={{
                        pathname: "/Test/[id]",
                        query: {id: client.id},
                    }}>{client.name}</Link></li>
                ))}
            </ul>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>

    );
}
export default MyTest;