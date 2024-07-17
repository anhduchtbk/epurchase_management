import React, { useState, useCallback, useEffect } from 'react';
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
  const [optionSelected, setOptionSelected] = useState({
    TH: '',
    DMH: '',
    NMH: '',
    LMH: '',
    PB: '',
  });
  const [filteredData, setFilteredData] = useState([]);

  const edit = (record) => {
    form.setFieldsValue({
      TH: '',
      DMH: '',
      NMH: '',
      LMH: '',
      PB: '',
      ...record,
    });
    setEditingKey(record.key);
  };

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
  const originalData = [
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
      key: '1',
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
      key: '2',
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
      key: '3',
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
      key: '4',
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
      key: '5',
      TH: 'Duplex 1MT DL 250 gsm khổ 750 không FSC 5',
      DMH: 'Duplex 1MT DL 250 gsm',
      NMH: 'Phần mềm, Nhóm chiết khấu',
      LMH: 'Paper supplies',
      PB: 'Khong',
      TT: <Tag color={'green'}>
        Active
      </Tag>
    },
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
      key: '1',
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
      key: '2',
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
      key: '3',
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
      key: '4',
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
      key: '5',
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

  const handleDelete = useCallback((key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  }, [dataSource]);

  const save = useCallback(async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setDataSource(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setDataSource(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  },);

  const handleClickDropdown = (key, record) => {
    if (key.key === '0' || key === '0') {
      // isEditing(record);
      edit(record);
    } else if (key.key === '1' || key === '1') {
      handleDelete(record.key)
    }
  }

  const handleAddNew = useCallback(
    () => {
      let newKey = String(dataSource.length + 1);
      let newData = {
        key: newKey,
        TH: '',
        DMH: '',
        NMH: '',
        LMH: '',
        PB: '',
        TT: <Tag color={'green'}>
          Active
        </Tag>
      };
      handleClickDropdown('0', newData);
      setDataSource([newData, ...dataSource]);
    }, [dataSource]
  );

  const handleSearchID = (val, typeD) => {
    setOptionSelected(prevOptions => ({
      ...prevOptions,
      [typeD]: val
    }));
  }

  const handleChangeID = (val, typeD) => {
    setOptionSelected(prevOptions => ({
      ...prevOptions,
      [typeD]: val
    }));
  }

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
      editable: true,
    },
    {
      title: 'Sử dụng phiên bản',
      width: 100,
      dataIndex: 'PB',
      editable: true,
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
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Lưu
            </Typography.Link>
          </span>
        ) :
          (
            dataSource.length >= 1 ? (
              <Space size="middle">
                <Dropdown
                  menu={{
                    items,
                    onClick: (key) => {
                      handleClickDropdown(key, record)
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
          )

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

  useEffect(() => {
    const filterData = () => {
      const filtered = dataSource.filter(item => {
        return Object.keys(optionSelected).every(key => {
          if (optionSelected[key] === '') return true; 
          return item[key].toLowerCase().includes(optionSelected[key].toLowerCase());
        });
      });
      setFilteredData(filtered);
    };

    filterData();
  }, [optionSelected, dataSource]);

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
              onClick={handleAddNew}
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
          <InputDrop title="Sử Dụng Phiên Bản" placeholder="Chọn phiên bản" dataFilter={dataSource} type="PB"
            onSearchID={(val) => {
              handleSearchID(val, "PB")
            }}
            onChangeID={(val) => {
              handleChangeID(val, "PB")
            }}
          />
          <InputDrop title="Nhóm Mặt Hàng" placeholder="Chọn nhóm mặt hàng" dataFilter={dataSource} type="NMH"
            onSearchID={(val) => {
              handleSearchID(val, "NMH")
            }}
            onChangeID={(val) => {
              handleChangeID(val, "NMH")
            }}
          />
          <InputDrop title="Danh Mục Mặt Hàng" placeholder="Nhập danh mục mặt hàng" dataFilter={dataSource} type="DMH"
            onSearchID={(val) => {
              handleSearchID(val, "DMH")
            }}
            onChangeID={(val) => {
              handleChangeID(val, "DMH")
            }}
          />
          <InputS title="Tên Mặt Hàng" placeholder="Nhập tên mặt hàng" dataFilter={dataSource} type="TMH"

          />
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
                dataSource={filteredData}
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
