import styled from 'styled-components'

export default function Button({buttonLabel, onClick}) { 


    return (
        <StyledButton onClick={onClick} className="btn btn-primary">{buttonLabel}</StyledButton>
    )
}

const StyledButton = styled.button`
    width: 120px;
    height: 50px;
    margin-top: 10px;
    @media only screen and (min-width: 1920px) {
        width: 180px;
        height: 60px;
    }
`