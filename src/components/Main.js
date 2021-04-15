import React, { useState } from 'react'
import { useSource } from '../context/SourceContext'
import { useMain } from '../context/MainContext'
import { useProfile } from '../context/ProfileContext'
import { useDetail } from '../context/DetailContext'
import Detail from './Detail'
import Profile from './Profile'
import Container from 'react-bootstrap/Container'
import BootstrapTable from 'react-bootstrap-table-next';
import './Main.scss'
import '../assets/css/react-bootstrap-table2.scss'

const Main = () => {
    const { sources } = useSource()
    const { isMain, setIsMain } = useMain()
    const { isProfile, setIsProfile } = useProfile()
    const { isDetail, setIsDetail } = useDetail()
    const [detailData, setDetailData] = useState()

    const columns = [{
        dataField: 'properties.title',
        text: 'Title',
        sort: true
    }, {
        dataField: 'properties.mag',
        text: 'Magnitude',
        sort: true
    }, {
        dataField: 'properties.time',
        text: 'Time',
        sort: true
    }];

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
          console.log('ROW:')
          console.log(row)
          setIsMain(false)
          setIsDetail(true)
          setDetailData(row)
        }
      };

    return (
        <Container>
            {isMain &&
                <div id="main">
                    <h4>{sources.data.metadata.title}</h4>
                    <BootstrapTable keyField='id' data={sources.data.features} columns={columns} rowEvents={rowEvents} />  
                </div>
            }
            {isDetail &&
                <Detail detailData={detailData} />
            }
            {isProfile &&
                <Profile />
            }
        </Container>
    )
}

export default Main