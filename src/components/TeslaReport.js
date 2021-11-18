import React from 'react';
import styled from 'styled-components';

function TeslaReport() {
    return (
        <div>
            <TeslaImpactReport>
                <a href="https://www.tesla.com/impact-report/2020">Read Tesla's 2020 Impact Report</a>
            </TeslaImpactReport>
        </div>
    )
}

export default TeslaReport;

const TeslaImpactReport = styled.div`
    position:fixed;
    top:0;
    width:100%;
    margin: 0rem 0rem;
    padding: 1rem 2rem;
    background-color: #fff;
    text-decoration: underline;
    font-weight: 500;
    color: grey;
    line-height: 1rem;
`