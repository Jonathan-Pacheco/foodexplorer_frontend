import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

.tagContainer {
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
}

.removeTag {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3.2rem;
  padding: 0 1.6rem;
  border-radius: .8rem;
  background-color: ${({ theme })=> theme.COLORS.LIGHT_600};
  
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;

  > button {
    border: none;  
    background: none; 
    margin-left: .8rem;
  }
}

.createTag {
  position: relative;

   > input {
    width: 14rem;
    border: 1px dashed;
    border-color: ${({ theme })=> theme.COLORS.LIGHT_500};
    
    height: 3.2rem;
    padding-left: 1.6rem;
    padding-right: 3rem;
    
    outline: none;
  }

   > button {
    position: absolute;
    right: 1.6rem;
    height: 100%;
    border: none;  
    background: none; 
  }

}
`;
