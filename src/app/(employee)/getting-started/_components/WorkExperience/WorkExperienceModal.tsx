import Button from "@/components/Button";
import DropdownInput from "@/components/Reusable/DopdownInput/DropdownInput";
import Modal from "@/components/Reusable/Modal/Modal";
import TextArea from "@/components/Reusable/TextArea/TextArea";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type TWorkExperienceModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<any>;
  errors: FieldErrors;
};
const WorkExperienceModal:React.FC<TWorkExperienceModalProps> = ({
    isModalOpen,
    setIsModalOpen,
    register,
    errors,
}) => {
    const workTypes = ["Full Time", "Part Time", "Internship"];
    return (
        <Modal
      heading="Add Your Work Experience"
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    >

      <div className="flex flex-col gap-5 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextInput
          label="Company Name"
          placeholder="eg.,  MITRA Consultancy"
          error={errors.fullName}
          {...register("fullName")}
          isRequired={false}
        />
         <DropdownInput
            label="Course"
            {...register("occupation")}
            error={errors.occupation}
            options={workTypes}
            isRequired={false}
          />
          <TextInput
          label="From"
          type="date"
          error={errors.fullName}
          {...register("fullName")}
          isRequired={false}
        />
        <TextInput
          label="To"
          type="date"
          error={errors.fullName}
          {...register("fullName")}
          isRequired={false}
        />
        </div>
        <TextInput
          label="Company Location"
          placeholder="ex: New York, America"
          error={errors.fullName}
          {...register("fullName")}
          isRequired={false}
        />
        <TextArea
            label="Work Description"
            placeholder="What was the project assigned? What was your contribution to the project? What are the some important features of the project."
            cols={2}
            rows={4}
            error={errors.fullName}
            {...register("fullName")}
            isRequired={false}
          />
        <TextInput
          label="Project Links"
          placeholder="Your projects links"
          error={errors.fullName}
          {...register("fullName")}
          isRequired={false}
        />
      
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Button variant="natural" className="px-6 py-3">
          Cancel
        </Button>
        <Button type="submit" variant="normal" className="px-6 py-3">
          Add
        </Button>
      </div>
    </Modal>
    );
};

export default WorkExperienceModal;