import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Table from './components/tabla';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import BackArrow from '../images/backarrow.png';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

function Foto() {

    const navigate = useNavigate();
    var id = '';
    var rol = '';
    try{
        var { id, rol }  = JSON.parse(localStorage.getItem('dataKey'));
    }
    catch{
        var id = '';
        var rol = '';
    }
    useEffect(() => {
        if(id === ''){
        navigate('/')
        }
    }, [])

    const location = useLocation()
    const {idSolicitud} = location.state;

    const [selectedFile, setSelectedFile] = useState();

    const [source, setSource] = useState();
    const [modelos, setModelos] = useState();
    const [modeloseleccionado, setModeloseleccionado] = useState();

    const [isFilePicked, setIsFilePicked] = useState(false);

    const [refrimodelo, setRefrimodelo] = useState();

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setSource(URL.createObjectURL(event.target.files[0]))
        setIsFilePicked(true);
        fetch(`http://192.168.1.131:2000/modelo`)
        .then( (res) => res.json())
        .then((data)=> {setModelos(data)})
        .catch((err) => {
            alert(err)
      })
    };

    useEffect(() => {
        setModeloseleccionado(modelos && modelos[0].idModelo)
    }, [modelos])

    const handleSubmission = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("archivo", selectedFile);

        fetch(`http://192.168.1.131:2000/image/add/${refrimodelo && refrimodelo[0].idRefrigeradorSolicitado}`, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("Success:", result);
                alert('Foto agregada correctamente')
            })
            .catch((error) => {
                console.error("Error:",error);
                alert('Foto no agregada')
            });

        const url = `http://192.168.1.131:2000/checklist/add`;
        const data = {
            id: `${refrimodelo && refrimodelo[0].idRefrigeradorSolicitado}`,
            puerta: '0',
            posicion: 'Favorable',
            movimientos: '',
            personas: '0',
            horario: ''

          };
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
    
          fetch(url, options)
          .then((res) => res.json())
          .then((data) => {
            alert('Checklist creada correctamente')
          })
            .catch((err) => {
                alert('Checklist no creada')
            }
          );

            const url2 = `http://192.168.1.131:2000/refrisolicitado/update/${refrimodelo && refrimodelo[0].idRefrigeradorSolicitado}`;
            const data2 = {
            id: `${refrimodelo && refrimodelo[0].idRefrigeradorSolicitado}`,
            idModelo: `${modeloseleccionado}`,
            idSolicitud: `${idSolicitud}`,
            fecha_Entrega: '',
            movimiento: 'Mantener',
            comentarios: '',
            idChecklist: `${refrimodelo && refrimodelo[0].idRefrigeradorSolicitado}`,

          };
          const options2 = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data2),
          };
    
          fetch(url2, options2)
          .then((res) => res.json())
          .then((data) => {
            alert('Refrigerador actualizado correctamente')
          })
            .catch((err) => {
                alert('Refrigerador no actualizado')
            }
          );
        navigate(`/solcheck/${idSolicitud}`)
    };

    const ModeloChange = (e) => {
        setModeloseleccionado(e.target.value);
    }

    useEffect(() => {
        const url = `http://192.168.1.131:2000/refrisolicitado/edfunico`;
            const data = {
                idModelo: `${modeloseleccionado}`,
                idSolicitud: `0`
            };
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            fetch(url, options)
            .then( (res) => res.json())
            .then((data)=> {setRefrimodelo(data); console.log(data)});
    }, [modeloseleccionado])

  return (
    <div>
        <form onSubmit={handleSubmission}>
            <div class='redbg'>
                <Nav.Link href={`/solcheck/${idSolicitud}`}><img class='imageflex' src={BackArrow} alt='backarrow' width='45px' height='45px'/></Nav.Link>
                <h1 class='header'>Subir Foto</h1>
            </div>
            <br/>
            <input accept='image/*' type="file" name="archivo" onChange={changeHandler} />
            <br/><br/>
            {isFilePicked ? (
                <div>
                    <img src={source} alt={selectedFile.name} style={{maxWidth: '300px', border: 'solid 4px black'}}/>
                    <br /><br />
                    <p>Seleccione modelo utilizado</p>
                    <select value={modeloseleccionado} onChange={ModeloChange}>
                        {modelos && modelos.map((item) => (
                            <option value={item.idModelo}>{item.idModelo}</option>
                        ))}
                    </select>
                    <br /><br />
                </div>
            ) : (
                <p>Seleccione una foto</p>
            )}

            <div>
                
                <button className='bot'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Foto