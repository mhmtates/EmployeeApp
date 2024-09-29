import Card from "../UI/Card"


const GetAllEmployees = (props) => {
    
    const{employees} = props;
   
    if(employees.length < 1)
    {
        return;
    }

    const deleteEmployee = (id) =>{
        props.setEmployees(
            employees.filter((item) => item.id !== id)
        )
    }
   
    return (
        <Card className="mt-10 justify-start" >
            <ul>
                <li className="flex gap-x-12 ">
                    <span className="font-bold ml-2">Tam İsmi</span>
                    <span className="font-bold">Doğum Tarihi</span>
                    <span className="font-bold">Şirket</span>
                    <span className="font-bold">Departman</span>
                    <span className="font-bold">Pozisyon</span>
                    <span className="font-bold">Maaş</span>
                   
                </li>
                {employees.map((employee) => (
                    <li className ="flex cursor-pointer hover:shadow-xl p-2 gap-x-6  transition-shadow "
                    key={employee.id}
                    onClick={() => deleteEmployee(employee.id)}>
                        <span>{employee.fullName}</span>
                        <span className="text-slate-700 font-medium">
                            {employee.birthDate}
                        </span>
                        <span className="text-slate-700 font-medium">
                            {employee.company}
                        </span>
                        <span className="text-cyan-700 font-medium ">
                            {employee.department}
                        </span>
                        <span className="text-yellow-700 font-medium">{employee.position}</span>
                        <span className="text-teal-700 font-medium">{employee.salary} ₺</span>
                        
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default GetAllEmployees