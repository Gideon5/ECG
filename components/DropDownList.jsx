import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react';

const DropDownList = () => {

  const [selected, setSelected] = useState("");
  
  const data = [
      {key:'1', value:'Walking'},
      {key:'2', value:'Resting'},
      {key:'3', value:'Running'},
      // {key:'4', value:'Computers', disabled:true},
      // {key:'5', value:'Vegetables'},
      // {key:'6', value:'Diary Products'},
      // {key:'7', value:'Drinks'},
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        search={false}
        placeholder="Current State"
    />
  )

};

export default DropDownList;