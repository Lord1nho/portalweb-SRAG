type Props = {
    id: string;
    name: string;
  };
  
  export function DateField({ id, name}: Props) {
 
    return (
    <input style={{marginLeft: 5}} type="date" id={id} name={name}/>
    );
  }