
import {ToastContainer, toast } from "react-toastify";
import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
// type PropForm = {
//     laoname: string,
//     engname: string,
//     nicname: string,
//     gender: string,
//     cvperson: string,
//     date: string,
//     position: string,
//     salary: string,
//     datein: string,
//     tell: string
// }
const Register = () => {
    // const form = useForm({
    //     defaultValues: {
    //         laoname: '',
    //         engname: '',
    //         nicname: '',
    //         gender: '',
    //         cvperson: '',
    //         date: '',
    //         position: '',
    //         salary: '',
    //         datein: '',
    //         tell: '',
    //     }
    // })

    // const { register, handleSubmit,reset } = form

    // const Submit = (e) => {
    //     e.preventDefault();
    //     const url = "https://api.sheety.co/764ffda23d1636ac54296097cc9cbb57/cmpBestech/formsubmit";
    //     let body = {
    //         formsubmit: {
    //             laoname: '',
    //             engname: '',
    //             nicname: '',
    //             gender: '',
    //             date:'',
    //             position: '',
    //             salary:'',
    //             datein:'',
    //             cvperson:'',
    //             tell: ''
    //         }
    //     }
    //     axios.post(url, body).then((res) => {
    //         if (res) {
    //             console.log(body)
    //             toast.success("ທ່ານສົ່ງອີເມວສຳເລັດ, ພວກເຮົາຈະຕິດຕໍ່ກັບໃນໄວໆນີ້ ຂໍຂອບໃຈ", {
    //                 position: toast.POSITION.TOP_RIGHT,
    //             });
    //         } else {
    //             toast.error("ທ່ານສົ່ງອີເມວບໍສຳເລັດ", {
    //                 position: toast.POSITION.TOP_RIGHT,
    //             });
    //         }
    //     })
    //    reset()
    // }

    // const handleSubmit = (e: PropForm) => {
    //     e.preventDefault();
    //     // Perform form validation and submission here

    // };

    const [laoname, setLaoname] = useState("");
    const [engname, setEngname] = useState("");
    const [nicname, setNicname] = useState("");
    const [gender, setGender] = useState("");
    const [cvperson, setCvperson] = useState("");
    const [date, setDate] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [datein, setDatein] = useState("");
    const [tell, setTell] = useState("");
    const [reset, setReset ] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation and submission here
        const url = "https://api.sheety.co/764ffda23d1636ac54296097cc9cbb57/cmpBestech/formsubmit";
        let body = {
            formsubmit: {
                laoname,
                engname,
                nicname,
                gender,
                date,
                position,
                salary,
                datein,
                cvperson,
                tell
            }
        }
        axios.post(url, body).then((res) => {
            if (res) {
                toast.success("ທ່ານສົ່ງອີເມວສຳເລັດ, ພວກເຮົາຈະຕິດຕໍ່ກັບໃນໄວໆນີ້ ຂໍຂອບໃຈ", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setLaoname("");
                setEngname("");
                setNicname("");
                setGender("");
                setCvperson("");
                setDate("");
                setPosition("");
                setSalary("");
                setDatein("");
                setTell("");
            } else {
                toast.error("ທ່ານສົ່ງອີເມວບໍສຳເລັດ", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }setReset(res);
        })
    };
    return (
        <div className='container p-5 mt-5 mx-auto justify-center' id='register' style={{ "fontFamily": "phetsarath ot" }}>
            <div className="-mx-4 flex flex-wrap lg:justify-between">
                <div className="relative rounded-lg dark:bg-gray-800 bg-white p-8 border-2 sm:p-12">
                    <div className="card p-2 mb-6 dark:text-white text-black border-2">
                        <div className="card-header bg-white text-dark">
                            <h2 className="text-dark flex items-center mb-6 text-[20px] font-bold uppercase sm:text-[20px] lg:text-[20px] xl:text-[20px] text-black dark:text-white">

                                <span className=''>ຟອມສະໝັກເຂົ້າບໍລິສັດ Bestech SaaS Consultuncy</span>
                            </h2>
                        </div>
                        <div className="card-body mt-2 show-5  bg-white">
                            <form action="" onSubmit={handleSubmit}>

                                <div className="mb-6">
                                    <label  className='mb-2'>ຊື່ແລະນາມສະກຸນເປັນພາສາລາວ</label><br></br>
                                    <input
                                        type="text"
                                        placeholder="ຊື່: ......"
                                        value={laoname} onChange={(e) => setLaoname(e.target.value)} required
                                        className="form-control"
                                    
                                    />
                                </div>
                                <div className="mb-6 mt-4">
                                    <label  className='mb-2'>ຊື່ແລະນາມສະກຸນເປັນພາສາອັງກິດ</label><br></br>
                                    <input
                                        type="text"
                                        placeholder="ຊື່: ......"
                                        value={engname} onChange={(e) => setEngname(e.target.value)} required
                                        className="form-control"
                                        
                                    />
                                </div>
                                <div className="mb-6 mt-4">
                                    <label  className='mb-2'>ຊື່ຫລິນ</label><br></br>
                                    <input
                                        type="text"
                                        placeholder="ຊື່: ......"
                                        value={nicname} onChange={(e) => setNicname(e.target.value)} required
                                        className="form-control"
                                        
                                    />
                                </div>
                                <div className="mb-6 mt-4">
                                    <label  className='mb-2'>ເພດ</label><br></br>
                                    <select className='form-control'value={gender} onChange={(e) => setGender(e.target.value)} required >
                                        <option value="">ກາລຸຸນາລະບຸເພດ</option>
                                        <option value="ເພດຍິງ">ເພດຍິງ</option>
                                        <option value="ເພດຊາຍ">ເພດຊາຍ</option>
                                    </select>
                                </div>


                                <div className="mb-6 mt-4">
                                    <label  className='mb-2'>ວັນເດືອນປິເກິດ (ກາລຸນາເລືອກວັນເດືອນປິເກິດຂອງທ່ານ)</label><br></br>
                                    <input
                                        type="date"
                                        placeholder="ຊື່: ......"
                                        value={date} onChange={(e) => setDate(e.target.value)} required
                                        className="form-control"
                                       
                                    />
                                </div>
                                <div className="mb-6 mt-4">
                                    <label  className='mb-2'>ເງິນເດືອນຂັ້ນເລິມຕົ້ນ(ທ່ານຢາກໄດ້ເງິນເດືອນເທົ່າລະບຸໄວເພື່ອງ່າຍໃນການສຳພາດ)</label><br></br>
                                    <input
                                        type="number"
                                        placeholder="1,000,000: ......"
                                        value={salary} onChange={(e) => setSalary(e.target.value)} required
                                        className="form-control"
                                       
                                    />
                                </div>
                                <div className="mb-6 mt-4">
                                    <label  className='mb-2'>ຕຳແຫນ່ງ (ທ່ານສະໝັກຕຳແໜ່ງຫ້ຍງໃນບໍລິສັດເຮົາເລືອກຕຳແໜ່ງທີ່ຕ້ອງການ)</label><br></br>
                                    <select  className='form-control'   value={position} onChange={(e) => setPosition(e.target.value)} required>
                                        <option value="">ກາລຸຸນາລະບຸຕຳແຫນ່ງ</option>
                                        <option value="Developer Programming">Developer Programming</option>
                                        <option value="Graphis Designer">Graphis Designer UX/UI</option>
                                        {/* <option value="Software Developer(Software Architect)">Software Developer(Software Architect)</option>
                                        <option value="Computer Scientis(Software Architect)">Computer Scientis (Software Architect)</option>
                                        <option value="Programmer(Software Architect)">Programmer(Software Architect)</option>
                                        <option value="Coder(Software Architect)">Coder(Software Architect)</option>
                                        <option value="Software Developer(Software Engineer)">Software Developer(Software Engineer)</option>
                                        <option value="Computer Scientis(Software Engineer)">Computer Scientis(Software Engineer)</option>
                                        <option value="Programmer(Software Engineer)">Programmer(Software Engineer)</option>
                                        <option value="Coder(Software Engineer)">Coder(Software Engineer)</option>
                                        <option value="Data Analyst(Information Architect)">Data Analyst(Information Architect)</option>
                                        <option value="Data Engineer(Information Architect)">Data Engineer(Information Architect)</option>
                                        <option value="Programmer(Information Architect)">Programmer(Information Architect)</option>
                                        <option value="Coder(Information Architect)">Coder(Information Architect)</option>
                                        <option value="Data Analyst(Data Scientist)">Data Analyst(Data Scientist)</option>
                                        <option value="Data Engineer(Data Scientist)">Data Engineer(Data Scientist)</option>
                                        <option value="Programmer(Data Scientist)">Programmer(Data Scientist)</option>
                                        <option value="Coder(Data Scientist)">Coder(Data Scientist)</option> */}
                                    </select>
                                </div>
                                <div className="mb-6 mt-4">
                                    <label  className='mb-2'>ວັນທີເຂົ້າທຳງານ (ຖ້າທ່ານສຳພາດຜ່ານທ່ານຈາກເລິ່ມງານມື້ໃດ.)</label><br></br>
                                    <input
                                        type="date"
                                        placeholder=""
                                        value={datein} onChange={(e) => setDatein(e.target.value)} required
                                        className="form-control"
                                       
                                    />
                                </div>
                                <div className="mb-6 mt-4">
                                    <label htmlFor="CVperson" className='mb-2'>ເອກະສານກ່ຽວຂ້ອງ CV.(ສົງCVທ່ານຂອງໃຫ້ເຮົາເພື່ອງ່າຍຕໍ່ໃນການພິຈາລະນາ)</label><br></br>
                                    <input
                                        type="file"
                                        placeholder=""
                                        value={cvperson} onChange={(e) => setCvperson(e.target.value)} required
                                        className="form-control"
                                       
                                    />
                                </div>
                                <div className="mb-6 mt-4">
                                    <label  className='mb-2'>ເບິໂທຕິດຕໍ(ຖ້າທ່ານສຳພາດຜ່ານແລ້ວເຮົາຈາກຕິດຕໍຫາເບິນີ້)</label><br></br>
                                    <input
                                        type="number"
                                        placeholder="ເບິໂທ: ......"
                                        value={tell} onChange={(e) => setTell(e.target.value)} required
                                        className="form-control"
                                       
                                    />
                                </div>


                                <div className="justify-center mb-2 text-center mt-4">
                                    <button type='submit' className='btn btn-primary'> Send Messages</button>
                                </div>

                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Register;
