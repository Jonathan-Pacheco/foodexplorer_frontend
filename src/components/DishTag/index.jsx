import React, { useState, useEffect } from 'react';

import { Container } from "./styles.js";

import Plus from "../../assets/PlusGrey.svg";
import Cross from "../../assets/X.svg";


export function DishTag({ sentTags, handleTags }) {
  const [tags, setTags] = useState([]);
  const [tag, setTag]= useState('');
  
  useEffect(() => {
    
      setTags(sentTags);
    
  }, [sentTags]);
  
 
  const RemoveTag = (i) => {
    const newTags = [ ...tags ];
    newTags.splice(i, 1);
    setTags(newTags);
    handleTags(newTags);
  }


  const Tag = (e) => {
    const val = e.target.value;
    setTag(val);
  }


  const EnterInput = (e) => {   
    if (e.key === 'Enter' && tag) {
      AddTag();
    }     
  }

 
  const AddTag= () => {
    if(tag!==''){
    if (tags.find(t => t.toLowerCase() === tag.toLowerCase())) {
      setTag('');
      return;
    }
    setTags([...tags, tag]);     
    handleTags([...tags, tag]);
    
    setTag('');
  }
  }
  

  return (
    <Container>
    <div>
    <div className="tagContainer">

        { tags.map((tag, i) => ( 
        <div className='removeTag' key={i}>
            {tag}
          <button type="button" onClick={() => { RemoveTag(i); }}><img src={Cross}/></button>
        </div>
        ))}
 
      <div className="createTag">
      <input 
      type="text" 
      placeholder="Adicionar" 
      value={tag} 
      onChange={Tag}
      onBlur={AddTag}
      onKeyDown={EnterInput} 
      required={tags.length > 0 ? false : true} />

      <button type="button" onClick={AddTag} ><img src={Plus}/></button>
      </div>

    </div>
    </div>
    </Container>
  );
}
 