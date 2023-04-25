import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
    const[id,idchange]=useState("");
    const[dia,diachange]=useState("");
    const[item,itemchange]=useState("");
    const[codigo,codigochange]=useState("");
    const[lote,lotechange]=useState("");
    const[modelo,modelochange]=useState("");
    const[qtdinsp,qtdinspchange]=useState("");
    const[qtdng,qtdngchange]=useState("");
    const[qtdret,qtdretchange]=useState("");
    const[qtdok,qtdokchange]=useState("");
    const[status,statuschange]=useState("");
    const[usuario,usuariochange]=useState("");
    const[ativo,ativochange]=useState(true);
    const[validation,valchange]=useState(false);

    const navigate=useNavigate();

    const handlesubmit=(e) => {
        e.preventDefault();
        const empdata={dia,item,codigo,lote,modelo,qtdinsp,qtdng,qtdret,qtdok,status,usuario,ativo};   

        fetch("http://localhost:8000/lista/",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
        }).then((res)=>{
            alert('Informação salva com sucesso !')
            navigate('/');
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Lista de Inspeção</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Dia</label>
                                            <input required value={dia} onMouseDown={e=>valchange(true)} onChange={e=>diachange(e.target.value)} className="form-control"></input>
                                            {dia.length==0 && validation && <span className="text-danger">Digite a data da inspeção !</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Item</label>
                                            <input value={item} onChange={e=>itemchange(e.target.value)}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Código</label>
                                            <input value={codigo} onChange={e=>codigochange(e.target.value)}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Lote</label>
                                            <input value={lote} onChange={e=>lotechange(e.target.value)}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Modelo</label>
                                            <input value={modelo} onChange={e=>modelochange(e.target.value)}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Qtd Insp</label>
                                            <input value={qtdinsp} onChange={e=>qtdinspchange(e.target.value)}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Qtd NG</label>
                                            <input value={qtdng} onChange={e=>qtdngchange(e.target.value)}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Qtd Ret</label>
                                            <input value={qtdret} onChange={e=>qtdretchange(e.target.value)}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Qtd OK</label>
                                            <input value={qtdok} onChange={e=>qtdokchange(e.target.value)}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Status</label>
                                            <input value={status} onChange={e=>statuschange(e.target.value)}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Usuário</label>
                                            <input value={usuario} onChange={e=>usuariochange(e.target.value)}className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={ativo} onChange={e=>ativochange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Ativo</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Salvar</button>
                                            <Link to="/" className="btn btn-danger">Voltar</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmpCreate;