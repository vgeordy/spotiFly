import styled from 'styled-components';

export const ContactContainer = styled.div`
    background-color: #BF55EC;
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
`
export const ContactH1 = styled.h1`
    color: #ecd555;
    font-size: 64px;
    text-align: center;
    margin: 64px;

`
export const ContactWrapper = styled.div`


`
export const ContactForm = styled.form`
    width: 50%;
    align-items: center;

    label {
        font-size: 1.8rem;
    }

    input, textarea {
        width: 100%;
        font-size: 1rem;
        padding: 1.2rem;
        background-color: #fff
        outline: none;
        border: none;
        border-radius: 6px;
        margin-top: 1rem;
        margin-bottom: 1rem;
}
textarea {
    min-height: 250px;
    resize: vertical;
}

button {
    width: 100%;
    margin-top: 1rem;
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
}

    
`

