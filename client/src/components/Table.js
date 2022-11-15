import { Table } from "antd";

import React, { useState } from "react";

const TableOne = ({ columns, data, loadding }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [loading, setLoading] = useState(false);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <Table
        // rowSelection={rowSelection}
        pagination={false}
        loading={loadding}
        columns={columns}
        dataSource={data}
        scroll={{ x: true }}
        rowKey="id"
      />
    </div>
  );
};

export default TableOne;
