import React, { useRef } from "react";
import card1 from '../../assets/img/image1.jpg'

let ButtonExample = () => {

    let imgElement = useRef();

    let getImage = () => {
        console.log(imgElement.current);
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <img ref={imgElement} src={card1} alt="" height={200} width={200} >
                        </img>
                        <div className="card-body">
                            <button onClick={getImage} className="btn btn-secondary btn-sm">Clik Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default ButtonExample;