import styled from 'styled-components'

const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;
    background: #242424;
    padding: 1em;
    align-items: center;
    justify-content: space-between;

    .paginas-cab {
        display: flex;
        flex-direction: row;
        color: #FFFFFF;
    }

    .opcoes {
        padding-right: 1em;
        padding-left: 1em;
        font-size: 1.5em;
    }
`





export { Cabecalho }