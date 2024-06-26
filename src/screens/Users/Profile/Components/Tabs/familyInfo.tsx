import profileStore from "src/store/users/profile";
import noDataImage from "../../../../../assets/no-data.png";
import "../index.scss";
import SingleRow from "../singleRow";
import FamilyModal from "../Modals/familyModal";

export default function FamilyInfoTab() {
  const { personalDetails } = profileStore((state) => state);
  return (
    <div className="profile-tabs">
      {!personalDetails?.familyInfo ? (
        <div className="no-data-container">
          <div className="no-data-wrap">
            <img src={noDataImage} />
            <span className="no-data-text">No details are added yet</span>
            <FamilyModal />
            {/* <button>Add details</button> */}
          </div>
        </div>
      ) : (
        <div className="tab-content-wrap">
          <div>{personalDetails?.educationInfo && <FamilyModal />}</div>

          <div className="tab-content-cover">
            <div className="tab-content">
              <SingleRow
                keyName="Address"
                keyValue={personalDetails?.familyInfo?.address}
              />
              <SingleRow
                keyName="Father's Name"
                keyValue={personalDetails?.familyInfo?.fathersName}
              />
              <SingleRow
                keyName="Father's Occupation"
                keyValue={personalDetails?.familyInfo?.fathersOccupation}
              />
              <SingleRow
                keyName="Mother's Name"
                keyValue={personalDetails?.familyInfo?.mothersName}
              />
              <SingleRow
                keyName="Mother's Occupation"
                keyValue={personalDetails?.familyInfo?.mothersOccupation}
              />
            </div>
            <div className="tab-content">
              <SingleRow
                keyName="Family Value"
                keyValue={personalDetails?.familyInfo?.familyValue}
              />
              <SingleRow
                keyName="Family Status"
                keyValue={personalDetails?.familyInfo?.familyStaus}
              />
              <SingleRow
                keyName="Number Of Brothers"
                keyValue={personalDetails?.familyInfo?.noofBrothers}
              />
              <SingleRow
                keyName="Number Of Sisters"
                keyValue={personalDetails?.familyInfo?.noofSisters}
              />{" "}
              <SingleRow
                keyName="About Family"
                keyValue={personalDetails?.familyInfo?.aboutFamily}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
