type Props = {
    id: string;
    name: string;
  };
  
  export function DateField({ id, name}: Props) {
 
    return (
    <input style={{marginRight: 4}} type="date" id={id} name={name}/>
    );
  }