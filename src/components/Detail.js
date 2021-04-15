import React from 'react'
import { useSource } from '../context/SourceContext'
import './Detail.scss'
import Container from 'react-bootstrap/Container'

const Detail = (props) => {
    const { sources } = useSource()

    return (
        <Container>
            <div id="detail">
                <h4>{props.detailData.properties.title}</h4>
                <div className="data-container">
                    <div className="data-title">Title</div>
                    <div className="data-value">{props.detailData.properties.title}</div>
                </div>
                <div className="data-container">
                    <div className="data-title">Magnitude</div>
                    <div className="data-value">{props.detailData.properties.mag}</div>
                </div>
                <div className="data-container">
                    <div className="data-title">Time</div>
                    <div className="data-value">{props.detailData.properties.time}</div>
                </div>
                <div className="data-container">
                    <div className="data-title">Status</div>
                    <div className="data-value">{props.detailData.properties.status}</div>
                </div>
                <div className="data-container">
                    <div className="data-title">Tsunami</div>
                    <div className="data-value">{props.detailData.properties.tsunami}</div>
                </div>
                <div className="data-container">
                    <div className="data-title">Type</div>
                    <div className="data-value">{props.detailData.properties.type}</div>
                </div>   
            </div>
        </Container>
    )
}

export default Detail