import {React, useEffect, useState} from "react";

const Top3Des = (props) =>{

    const [top3desarrolladores, setTop3desarrolladores] = useState()

    useEffect(() => {
        fetch(`http://192.168.1.131:2000/desarrollador/gettop3/des`)
        .then( (res) => res.json())
        .then((data)=> {setTop3desarrolladores(data); console.log(data)});
    }, [])

    const {type, item} = props;

    if(type === 'Desktop'){
        return(
            <div className="top3cont_desk">
                <div className='sol_toolbar'>
                    <p className='lbl1'>Top 3 desarrolladores</p>
                </div>
                <div className='order'>
                    <p className='pos1'>1</p>
                    <p className="name">Juan Mercedes</p>
                    <p className="name">5</p>
                </div>
                <div className='order'>
                    <p className='pos2'>2</p>
                    <p className="name2">Santiago Remes</p>
                    <p className="name2">3</p>
                </div>
                <div className='order'>
                    <p className='pos3'>3</p>
                    <p className="name3">Pepito Juarez</p>
                    <p className="name3">1</p>
                </div>
            </div>
        );
    }else if(type === 'Mobile'){
        return(
            <div className="top3cont">
                <div className='sol_toolbar'>
                    <p className='lbl1'>Top 3 desarrolladores</p>
                </div>
                <div className='order'>
                    <p className='pos1'>1</p>
                    <p className="name">Juan Mercedes</p>
                    <p className="name">5</p>
                </div>
                <div className='order'>
                    <p className='pos2'>2</p>
                    <p className="name2">Santiago Remes</p>
                    <p className="name2">3</p>
                </div>
                <div className='order'>
                    <p className='pos3'>3</p>
                    <p className="name3">Pepito Juarez</p>
                    <p className="name3">1</p>
                </div>
            </div>
        );
    }
}

export default Top3Des;