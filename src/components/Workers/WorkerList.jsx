import Card from "../UI/Card"


const WorkerList = (props) => {
    const{workers} = props;
   
    return (
        <Card className="mt-10">
            <ul>
                <li className="flex justify-between p-2">
                    <span className="font-bold">İsim</span>
                    <span className="font-bold">Maaş</span>
                </li>
                {workers.map((worker) => (
                    <li className ="flex justify-between cursor-pointer hover:shadow-xl p-2 transition-shadow" key={worker.id}>
                        <span>{worker.name}</span>
                        <span className="text-teal-700 font-medium">{worker.salary} ₺</span>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default WorkerList