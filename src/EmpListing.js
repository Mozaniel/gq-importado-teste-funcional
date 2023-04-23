import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const[empdata,empdatachange]=useState(null);
    const navigate=useNavigate();

    const LoadEdit=(id)=>{ 
        navigate("/lista/edit/"+id);
    }
    const Removefunction=(id)=>{
        if (window.confirm('Você tem certeza de que deseja excluir a informação ?')) {
            fetch("http://localhost:8000/lista/" + id,{
            method:"DELETE"
        }).then((res)=>{
            alert('Informação excluída com sucesso !')
            window.location.reload();
        }).catch((err)=>{
            console.log(err.message);
        })
        }
    }

    useEffect(() =>  {
        fetch("http://localhost:8000/lista").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return ( 
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Lista de Inspeção</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="lista/create" className="btn btn-success">Adicionar novo item (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Dia</td>
                                <td>Item</td>
                                <td>Código</td>
                                <td>Lote</td>
                                <td>Modelo</td>
                                <td>Qtd Insp</td>
                                <td>Qtd NG</td>
                                <td>Qtd Ret</td>
                                <td>Qtd OK</td>
                                <td>Status</td>
                                <td>Usuário</td>
                                <td>Ação</td>
                            </tr>
                        </thead>
                        <tbody>
                            { empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.dia}</td>
                                        <td>{item.item}</td>
                                        <td>{item.codigo}</td>
                                        <td>{item.lote}</td>
                                        <td>{item.modelo}</td>
                                        <td>{item.qtdinsp}</td>
                                        <td>{item.qtdng}</td>
                                        <td>{item.qtdret}</td>
                                        <td>{item.qtdok}</td>
                                        <td>{item.status}</td>
                                        <td>{item.usuario}</td>
                                        <td>
                                            <a onClick={()=>{LoadEdit(item.id)}} className="btn btn-success">Editar</a>
                                            <a onClick={()=>{Removefunction(item.id)}} className="btn btn-danger">Excluir</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;