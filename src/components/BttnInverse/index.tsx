
import { ButtonModel } from '../../Entity_Models/bttn';
import './style.css';
type Props={
  CategoryBttn: ButtonModel;
} 

export default function BttnInverse ({CategoryBttn}:Props) {
  return (
      <div className="dsc-btn dsc-btn-white">{
          CategoryBttn.name
        }</div>
  );
}
