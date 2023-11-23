import './style.css';
import { ButtonModel } from '../../Entity_Models/bttn';
type props  ={
    CategoryBttn:ButtonModel;
}

export default function BttnPrimary({CategoryBttn}: props){
    return(
        <div className="dsc-btn dsc-btn-blue">{CategoryBttn.name}</div>
    );
}