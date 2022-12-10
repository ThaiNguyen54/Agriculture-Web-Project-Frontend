import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reportFetch } from '../../../features/reports/reportFetch';
import ReportUser from './ReportUser';
import Table from 'react-bootstrap/Table';

const ReportList = () => {
  const {reports} = useSelector((state) => state.report)

  return (
    <Table striped bordered hover>
      <thead>
      <tr>
          <th>#</th>
          <th>Tiêu đề</th>
          <th>Nội dung báo cáo</th>
          <th>Email</th>
          <th>Duyệt</th>
      </tr>
      </thead>
      <tbody>
      {
          reports.map((item, idx) => {
            return(
                <ReportUser item={item} idx={idx}/>
            )
          })
      }
      </tbody>
    </Table>
  )
}

export default ReportList