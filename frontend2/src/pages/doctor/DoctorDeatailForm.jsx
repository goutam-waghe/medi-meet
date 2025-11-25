import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  RiUpload2Line,
  RiUser3Line,
  RiStethoscopeLine,
  RiMoneyRupeeCircleLine,
  RiFilePaper2Line,
  RiCalendar2Line,
} from "@remixicon/react";
import { fetchSpecializations } from "../../redux/slice/SpacailizationSlice";
import { resetDoctorDetailState, submitDoctorDetail } from "../../redux/slice/doctorDeatilSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { fetchDoctorDetail } from "../../redux/slice/userSlice";

const DoctorDetailForm = () => {
  const { loading, success, error, doctorDetail } = useSelector(
    (state) => state.doctorDetail
  );
  const navigate = useNavigate()
  const specialization = useSelector((state) => state.specializations);
  const dispatch = useDispatch();
  // console.log(loading, success, error, doctorDetail);
  const [form, setForm] = useState({
    image: null,
    certificate_pdf: null,
    description: "",
    fees: "",
    experience: "",
    specialization_id: "",
  });

  // console.log(specialization);
  useEffect(() => {
    dispatch(fetchSpecializations());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  useEffect(() => {

  })

  const submitHandler = (e) => {
    console.log("working");
    e.preventDefault();
    const fd = new FormData();
    fd.append("specialization_id", Number(form.specialization_id)),
      fd.append("experience", Number(form.experience)),
      fd.append("fees", Number(form.fees)),
      fd.append("description", form.description),
      fd.append("image", form.image),
      fd.append("certificate_pdf", form.certificate_pdf),
      dispatch(submitDoctorDetail(fd));
  };

  useEffect(() => {
    if (error) toast.error(error?.detail);
  }, [error]);

  useEffect(() => {
    if (success) {
      // localStorage.removeItem("doctor")
      dispatch(fetchDoctorDetail())
      toast.success("request send to the Admin");
      setTimeout(() => navigate("/doctor-dashboard"), 1500);
      dispatch(resetDoctorDetailState());
    }
  }, [success, navigate ]);

//   useEffect(() => {
//   if (success) {
//     toast.success("Doctor details saved!");

//     // 1️⃣ First update doctor in redux + localStorage
//     dispatch(fetchDoctorDetail())
//       .unwrap()
//       .then(() => {
//         // 2️⃣ Navigate ONLY after doctor detail exists
//         navigate("/doctor-dashboard");
//       });

//     dispatch(resetDoctorDetailState());
//   }
// }, [success]);
  return (
    <div className="min-h-screen my-20">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl border border-blue-100 p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Doctor Profile Setup
        </h2>

        <form onSubmit={submitHandler} className="space-y-6">
          {/* Profile Image */}
          <div>
            <label className="text-neutral-700 font-semibold mb-2 block">
              Profile Image
            </label>

            <div className="border border-blue-200 p-4 rounded-xl flex items-center gap-4 bg-blue-50/30 hover:bg-blue-50 transition">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
                id="imageUpload"
              />

              <label
                htmlFor="imageUpload"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                <RiUpload2Line /> Upload Image
              </label>

              {form.image && (
                <span className="text-blue-600 text-sm font-medium">
                  {form.image.name}
                </span>
              )}
            </div>
          </div>

          {/* Certificate Upload */}
          <div>
            <label className="text-neutral-700 font-semibold mb-2 block">
              Certificate PDF
            </label>

            <div className="border border-blue-200 p-4 rounded-xl flex items-center gap-4 bg-blue-50/30 hover:bg-blue-50 transition">
              <input
                type="file"
                name="certificate_pdf"
                accept="application/pdf"
                onChange={handleChange}
                className="hidden"
                id="certificateUpload"
              />

              <label
                htmlFor="certificateUpload"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                <RiFilePaper2Line /> Upload PDF
              </label>

              {form.certificate_pdf && (
                <span className="text-blue-600 text-sm font-medium">
                  {form.certificate_pdf.name}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-neutral-700 font-semibold mb-2 block">
              Description
            </label>

            <textarea
              name="description"
              rows="3"
              value={form.description}
              onChange={handleChange}
              placeholder="Short introduction about your medical experience"
              className="w-full border border-blue-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
            ></textarea>
          </div>

          {/* Fees */}
          <div>
            <label className="text-neutral-700 font-semibold mb-2 block">
              Consultation Fees (₹)
            </label>

            <div className="flex items-center gap-2 border border-blue-200 px-4 py-3 rounded-xl bg-blue-50/20">
              <RiMoneyRupeeCircleLine className="text-neutral-700 text-xl" />
              <input
                type="number"
                name="fees"
                value={form.fees}
                onChange={handleChange}
                placeholder="Enter fees"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="text-neutral-700 font-semibold mb-2 block">
              Experience (Years)
            </label>

            <div className="flex items-center gap-2 border border-blue-200 px-4 py-3 rounded-xl bg-blue-50/20">
              <RiCalendar2Line className="text-neutral-700 text-xl" />

              <input
                type="number"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="e.g., 5"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Specialization */}
          <div>
            <label className="text-neutral-700 font-semibold mb-2 block">
              Specialization
            </label>

            <div className="flex items-center gap-2 border border-blue-200 px-4 py-3 rounded-xl bg-blue-50/20">
              <RiStethoscopeLine className=" text-xl" />

              <select
                name="specialization_id"
                value={form.specialization_id}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
              >
                <option value="">Select specialization</option>
                {specialization.list?.category?.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            {loading ? "saving.." : "Save Profile"}
          </button>
        </form>
      </div>{" "}
    </div>
  );
};

export default DoctorDetailForm;
