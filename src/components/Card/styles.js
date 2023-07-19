import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
`;


export const Content = styled.div`
    position: relative;
    display: flex;
    border: 1px solid red;
    
    justify-content: center;
    align-items: center;

    min-width: 30.4rem;
    width: auto;
    height: 46.2rem;
    border-radius: .8rem;

    border: 1px solid;
    border-color:  ${({ theme }) => theme.COLORS.DARK_300};
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    animation: slideInDown 1s ease-in-out;


    @keyframes slideInDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.top-btn {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    border: none;
    font-size: 3rem;
    transition: scale .2s;
}

.top-btn:hover {
    scale: 0.9;
    }

.container {
    display: grid;
    padding: 2.4rem;
    text-align: center;
    align-items: center;
       
        
    > img {
        width: 17.6rem;
        height: 17.6rem;
        margin: 0 auto 1.6rem;
        border-radius: 50%;
        object-fit: cover;
        transition: transform .8s cubic-bezier(0.600, 0.800, 0.700, 1.000) ;
    }

    > img:hover { 
        transform: rotateY(180deg);
    }
}

.product-name {
    font-weight: 700;
    font-size: 2.4rem;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1.5rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    transition: scale .3s;
}

.product-name:hover {
    scale: 1.1;
}
    
.desc {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
    margin-bottom: 1.5rem;
    height: auto;
    width: 25.6rem;

    display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.price {
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.CAKE_200};

    margin-bottom: 1.5rem;
    }


@media (max-width: 993px) {
    display: flex;
        
    width: 21rem;
    height: 29.2rem;
    min-width: 21rem;

    .container {
        > img {
            width: 8.8rem;
            height: 8.8rem;
            margin: 0 auto 1.2rem;
        }
    }

    .product-name {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 1.2rem;
    }


    .desc {
        display: none;
    }

    .price {
        font-size: 1.6rem;
        margin-bottom: 1.2rem;
    }
 }
`;


export const UserCard = styled.div`
display: flex;

.user-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    margin-left: auto;
    margin-right: auto;
}

.insert-btn {
    width: 9.2rem;
    height: 4.8rem;
    margin-left: .2rem;
    transition: scale .2s;
}

.insert-btn:hover {
    scale: 0.9;
}

@media (max-width: 993px) {
    .user-btns {
        flex-direction: column;
    }

    .insert-btn {
        height: 3.2rem;
        width: 100%;
    }
}
`;