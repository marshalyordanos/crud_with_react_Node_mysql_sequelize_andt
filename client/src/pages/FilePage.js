import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../api/api";
import AddModel from "../components/AddModel";
import TableOne from "../components/Table";
import {
  ButtonStyle,
  HeaderContainerStyle,
  TitleStyle,
} from "../utils/styles/TitleStyle";

const FilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState([]);

  const columns = [
    {
      title: "Image",
      //   dataIndex: "",
      render: (loadding, row) => {
        console.log("llllllllll", row);
        return (
          <div>
            {row?.audio && (
              <img
                src={`/vedio.jpg`}
                width={70}
                height={70}
                style={{ objectFit: "cover" }}
              />
            )}
            {row?.video && (
              <img
                src={`/audio.jpg`}
                width={70}
                height={70}
                style={{ objectFit: "cover" }}
              />
            )}
            {row?.file && (
              <img
                src={`https://media.officedepot.com/images/t_search,f_auto/products/543082/Office-Depot-Brand-File-Folders-13`}
                width={70}
                height={70}
                style={{ objectFit: "cover" }}
              />
            )}
            {row?.image && (
              <img
                src={`http://127.0.0.1:5000/img/${row.image}`}
                width={70}
                height={70}
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        );
      },
      //   align: "right",
    },
    {
      title: "Name",
      dataIndex: "orginalName",
    },

    {
      title: "Size",
      dataIndex: "size",
      width: 800,
    },
    {
      title: "Crated",
      width: 800,
      render: (_, row) => {
        let date = new Date(row.createdAt);
        const x = String(date).split(" ").splice(0, 4);
        const y = x.splice(2, 1);
        console.log("sss", x);
        return (
          <h1>
            {/* {row.createdAt} */}
            {x.join(" ")}
          </h1>
        );
      },
    },

    {
      title: "Delete",
      dataIndex: "",
      render: (loadding, row) => (
        <ButtonStyle>
          <NavLink to={`/admin/roles/${row.id}`}>
            <button onClick={() => onDelete(row.id)} className="red">
              Detail
            </button>
          </NavLink>
        </ButtonStyle>
      ),
      //   align: "right",
    },
  ];

  useEffect(() => {
    const featchData = async () => {
      setLoading(true);
      const res = await api.get("/file");
      console.log(res.data);
      setLoading(false);
      setData(res.data.data);
    };
    featchData();
  }, []);
  const onFinish = async (file) => {
    setLoading(true);

    const data1 = new FormData();

    if (file.type.startsWith("image")) {
      data1.append("image", file);
    } else if (file.type.startsWith("video")) {
      data1.append("video", file);
    } else if (file.type.startsWith("audio")) {
      data1.append("audio", file);
    } else {
      data1.append("file", file);
    }
    const res = await api.post("/file", data1);
    setLoading(false);

    console.log(res.data);
    setData([res.data?.data, ...data]);

    setIsModalOpen(false);
  };
  const onDelete = async (id) => {
    setLoading(true);

    const res = await api.delete(`/file/${id}`);
    const x = data.filter((d) => d.id !== id);
    setData(x);
    setIsModalOpen(false);
    setLoading(false);
  };
  return (
    <div>
      <HeaderContainerStyle>
        <TitleStyle className="titles">
          <h1>Files</h1>
        </TitleStyle>
        <ButtonStyle>
          <button onClick={() => setIsModalOpen(true)} className="green">
            Add Files
          </button>
        </ButtonStyle>
      </HeaderContainerStyle>
      <TableOne loadding={loading} columns={columns} data={data} />
      <AddModel
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        // list={roleList}
        onFinish={onFinish}

        // handelSave={() => {}}
      />
    </div>
  );
};

export default FilePage;
