import React, { useState } from 'react';
import './App.css';
import { Icon, Image } from 'semantic-ui-react';
import { Input, Table, Tag, Space, Dropdown, Form, Typography, Badge, Button } from 'antd';
import { SearchOutlined, DashOutlined, BellOutlined, AppstoreOutlined, SwapOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import { InputDrop, InputS } from './Components/InputFilter';


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <></> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

function App() {

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      TH: '',
      DMH: '',
      NMH: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const language = {
    "vietnamese": "VI",
    "english": "EN"
  }

  let items = [
    {
      label: "sửa",
      key: '0',
    },
    {
      label: "xoá",
      key: '1',
    }
  ]

  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      TH: 'Duplex 1MT DL 250 gsm khổ 750 không FSC 0',
      DMH: 'Duplex 1MT DL 250 gsm',
      NMH: 'Phần mềm, Nhóm chiết khấu',
      LMH: 'Paper supplies',
      PB: 'Khong',
      TT: <Tag color={'green'}>
        Active
      </Tag>
    },
    {
      key: '2',
      TH: 'Duplex 1MT DL 250 gsm khổ 750 không FSC 1',
      DMH: 'Duplex 1MT DL 250 gsm',
      NMH: 'Phần mềm, Nhóm chiết khấu',
      LMH: 'Paper supplies',
      PB: 'Khong',
      TT: <Tag color={'green'}>
        Active
      </Tag>
    },
    {
      key: '3',
      TH: 'Duplex 1MT DL 250 gsm khổ 750 không FSC 2',
      DMH: 'Duplex 1MT DL 250 gsm',
      NMH: 'Phần mềm, Nhóm chiết khấu',
      LMH: 'Paper supplies',
      PB: 'Khong',
      TT: <Tag color={'green'}>
        Active
      </Tag>
    },
    {
      key: '4',
      TH: 'Duplex 1MT DL 250 gsm khổ 750 không FSC 3',
      DMH: 'Duplex 1MT DL 250 gsm',
      NMH: 'Phần mềm, Nhóm chiết khấu',
      LMH: 'Paper supplies',
      PB: 'Khong',
      TT: <Tag color={'green'}>
        Active
      </Tag>
    },
    {
      key: '5',
      TH: 'Duplex 1MT DL 250 gsm khổ 750 không FSC 4',
      DMH: 'Duplex 1MT DL 250 gsm',
      NMH: 'Phần mềm, Nhóm chiết khấu',
      LMH: 'Paper supplies',
      PB: 'Khong',
      TT: <Tag color={'green'}>
        Active
      </Tag>
    },
    {
      key: '6',
      TH: 'Duplex 1MT DL 250 gsm khổ 750 không FSC 5',
      DMH: 'Duplex 1MT DL 250 gsm',
      NMH: 'Phần mềm, Nhóm chiết khấu',
      LMH: 'Paper supplies',
      PB: 'Khong',
      TT: <Tag color={'green'}>
        Active
      </Tag>
    },
  ]);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const columns_tab = [
    {
      title: 'Tên mặt hàng',
      width: 100,
      dataIndex: 'TH',
      key: '1',
      editable: true,
    },
    {
      title: 'Danh mục mặt hàng',
      width: 100,
      dataIndex: 'DMH',
      key: '2',
      editable: true,
    },
    {
      title: 'Nhóm mặt hàng',
      width: 100,
      dataIndex: 'NMH',
      key: '3',
      editable: true,
    },
    {
      title: 'Loại mặt hàng',
      width: 100,
      dataIndex: 'LMH',
      key: '4',
    },
    {
      title: 'Sử dụng phiên bản',
      width: 100,
      dataIndex: 'PB',
      key: '5',
    },
    {
      title: 'Trạng thái',
      width: 100,
      dataIndex: 'TT',
      key: '6',
    },
    {
      title: 'Tác vụ',
      width: 130,
      dataIndex: 'TV',
      key: '7',
      render: (_, record) => {
        return dataSource.length >= 1 ? (
          <Space size="middle">
            <Dropdown
              menu={{
                items,
                onClick: (key) => {

                  if (key.key === '0') {
                    isEditing(record);
                    edit(record);
                  } else if (key.key === '1') {
                    handleDelete(record.key)
                  }
                }
              }}
            // trigger={['click']}
            >
              <a>
                <Space>
                  <DashOutlined />
                </Space>
              </a>
            </Dropdown>
          </Space>
        ) : null

      },

      fixed: 'right'
    },
  ];

  const mergedColumns = columns_tab.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className='static'>
      <header className="h-[60px] w-full flex justify-end items-center  absolute bg-white px-[2%]">
        <div className='flex flex-nowrap space-x-5 items-center'>
          <Badge count={5}>
            <BellOutlined />
          </Badge>

          <div>
            <Button icon={<></>}>
              vietnamese
            </Button>
          </div>


          <div className='flex cursor-pointer'>
            <Image avatar src="" />
            <div>
              <text>Administrator</text>
              <div>
                <text>Administrator</text>
                <Icon name='dropdown' />
              </div>
            </div>
          </div>

          <div>
            <Button icon={<AppstoreOutlined />} />
          </div>
        </div>

      </header>

      <div
        className='bg-[#CCCCCC] h-[100vh] pt-[80px] px-[2%] space-y-5'
      >
        <text className='font-[700] text-[30px]'>Danh sách mặt hàng</text>
        <div
          className='flex justify-between'
        >
          <div className='flex flex-row space-x-4'>
            <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />} />

            <Button type="dashed" icon={<SwapOutlined />}>
              Bộ lọc
            </Button>
          </div>

          <div
            className='space-x-3'
          >
            <Button
              children="Tạo mới"
              icon={<PlusOutlined />}
            />

            <Button
              children="Thao tác"
              icon={<DownOutlined />}
              iconPosition='end'
            />
          </div>
        </div>

        <div
          className='bg-white grid gap-4 grid-cols-5 p-[1%] rounded-lg'
        >
          <InputDrop title="Loại Mặt Hàng" placeholder="Nhập loại mặt" />
          <InputDrop title="Trạng Thái" placeholder="Nhập trạng thái" />
          <InputDrop title="Sử Dụng Phiên Bản" placeholder="Chọn phiên bản" />
          <InputDrop title="Nhóm Mặt Hàng" placeholder="Chọn nhóm mặt hàng" />
          <InputDrop title="Danh Mục Mặt Hàng" placeholder="Nhập danh mục mặt hàng" />
          <InputS title="Tên Mặt Hàng" placeholder="Nhập tên mặt hàng" />
          <InputS title="Tên Khác" placeholder="Nhập tên khác" />
          <InputS title="Mã Mặt Hàng" placeholder="Nhập mã mặt hàng" />
          <InputS title="Mã Từ ERP" placeholder="Nhập mã từ ERP" />
        </div>

        <div
          className='bg-white rounded-lg p-[1%]'
        >
          <div>
            <label className='font-[500] text-[16px] text-[#3f8cff]'>{dataSource.length} Kết quả</label>
            <Form form={form} component={false}>
              <Table
                // columns={columns_tab}
                pagination={{
                  position: ["topRight"],
                }}
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                columns={mergedColumns}
                rowClassName="editable-row"
                dataSource={dataSource}
                scroll={{
                  x: 1300,
                  y: 300,
                }}
                bordered
              />
            </Form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
