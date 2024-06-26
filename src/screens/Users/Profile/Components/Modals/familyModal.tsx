import { useEffect, useState } from "react";
import { Modal } from "antd";
import CustomInput from "src/components/CustomInput";
import profileStore from "src/store/users/profile";
import "../index.scss";
import authStore from "src/store/users/auth";

export default function FamilyModal() {
  const { postProfileDetails, personalDetails } = profileStore(
    (state) => state
  );
  const { userId } = authStore((state) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    Address: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
    motherOccupation: "",
    familyValue: "",
    familyType: "",
    familyStaus: "",
    numOfBrothers: "",
    numOfSisters: "",
    aboutFamily: "",
  });

  useEffect(() => {
    personalDetails?.familyInfo && setFormData(personalDetails?.familyInfo);
  }, [personalDetails?.familyInfo]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    const payload = {
      registerId: userId,
      emailId: personalDetails?.emailInfo.emailId ?? "",
      contactInfo: personalDetails?.contactInfo ?? {
        mobileNo1: "",
        mobileNo2: "",
        verifyStatusMob1: "",
        verifyStatusMob2: "",
      },
      familyInfo: formData,
      educationInfo: personalDetails?.educationInfo ?? {
        highestEducation: "",
        college: "",
        educationDet: "",
        employedIn: "",
        occupation: "",
        occupationDet: "",
        annualIncome: "",
      },
      basicInfo: personalDetails?.basicInfo,
      locationInfo: personalDetails?.basicInfo?.locationInfo ?? {
        country: "",
        state: "",
        district: "",
        citizenship: "",
      },
    };
    postProfileDetails(payload);
    // setFormData({
    // Address: "",
    // fatherName: "",
    // motherName: "",
    // fatherOccupation: "",
    // motherOccupation: "",
    // familyValue: "",
    // familyType: "",
    // familyStaus: "",
    // numOfBrothers: 1,
    // numOfSisters: 1,
    // aboutFamily: "",
    // });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="profile-tabs">
      <button className="add-details-btn" onClick={showModal}>
        {formData?.Address === "" ? "Add Details" : "Edit Details"}
      </button>
      {/* <div className="details-listing">
        {personalDetails?.map((res: any) => (
          <div className="family-single-wrap">
            <span className="family-line">
              <p className="family-relation">{res.relation}</p>:
              <p className="family-name">{res.name}</p>
              <a onClick={() => onEditPress(res)}>
                <EditOutlined />
              </a>
            </span>
            <p className="family-desc">{res.description}</p>
          </div>
        ))}
      </div> */}
      <Modal
        title="Add Family info"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label>Address:</label>
        <CustomInput
          placeHolder="Address"
          onChange={handleChange}
          name="Address"
          value={formData.Address}
          type="text"
          style={{ width: "100%" }}
        />
        <label>Father's Name:</label>
        <CustomInput
          placeHolder="Father Name"
          onChange={handleChange}
          name="fatherName"
          value={formData.fatherName}
          type="text"
          style={{ width: "100%" }}
        />
        <label>Father's Occupation:</label>
        <CustomInput
          placeHolder="Father's Occupation"
          onChange={handleChange}
          name="fatherOccupation"
          value={formData.fatherOccupation}
          type="text"
          style={{ width: "100%" }}
        />
        <label>Mother's name:</label>
        <CustomInput
          placeHolder="Mother's name"
          onChange={handleChange}
          name="motherName"
          value={formData.motherName}
          type="text"
          style={{ width: "100%" }}
        />

        <label>Mother's Occupation:</label>
        <CustomInput
          placeHolder="Mother's Occupation"
          onChange={handleChange}
          name="motherOccupation"
          value={formData.motherOccupation}
          type="text"
          style={{ width: "100%" }}
        />
        <label>Family Value:</label>
        <CustomInput
          placeHolder="Family Value"
          onChange={handleChange}
          name="familyValue"
          value={formData.familyValue}
          type="text"
          style={{ width: "100%" }}
        />
        <label>Family Type:</label>
        <CustomInput
          placeHolder="Family Type"
          onChange={handleChange}
          name="familyType"
          value={formData.familyType}
          type="text"
          style={{ width: "100%" }}
        />
        <label>Family Status:</label>
        <CustomInput
          placeHolder="Family Status"
          onChange={handleChange}
          name="familyStaus"
          value={formData.familyStaus}
          type="text"
          style={{ width: "100%" }}
        />
        <label>Number Of Brothers:</label>
        <CustomInput
          placeHolder="Number Of Brothers"
          onChange={handleChange}
          name="numOfBrothers"
          value={formData.numOfBrothers}
          type="text"
          style={{ width: "100%" }}
        />
        <label>Number Of Sisters:</label>
        <CustomInput
          placeHolder="Number Of Sisters"
          onChange={handleChange}
          name="numOfSisters"
          value={formData.numOfSisters}
          type="text"
          style={{ width: "100%" }}
        />
        <label>About Family:</label>
        <CustomInput
          placeHolder="About Family"
          onChange={handleChange}
          name="aboutFamily"
          value={formData.aboutFamily}
          type="text"
          style={{ width: "100%" }}
        />
      </Modal>
    </div>
  );
}
